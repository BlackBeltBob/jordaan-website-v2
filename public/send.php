<?php
// Contact / newsletter endpoint for the static React site.
// Upload this file to the PHP hosting and point REACT_APP_API_URL at its URL
// (e.g. https://oefentherapie-fysiotherapie.nl/send.php).

$mail_to   = "info@oefentherapie-fysiotherapie.nl";
$mail_from = "noreply@oefentherapie-fysiotherapie.nl";

// Sites that may call this script from a browser.
$allowed_origins = [
    "https://blackbeltbob.github.io",
    "https://oefentherapie-fysiotherapie.nl",
    "https://www.oefentherapie-fysiotherapie.nl",
    "https://mensendieck-fysiotherapie.nl",
    "https://www.mensendieck-fysiotherapie.nl",
    "http://localhost:3000",
];

$origin = isset($_SERVER["HTTP_ORIGIN"]) ? $_SERVER["HTTP_ORIGIN"] : "";
if (in_array($origin, $allowed_origins, true)) {
    header("Access-Control-Allow-Origin: " . $origin);
    header("Vary: Origin");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
}
header("Content-Type: application/json; charset=utf-8");

function respond($status, $code = 200) {
    http_response_code($code);
    echo json_encode(["status" => $status]);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    respond("success", 204);
}
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    respond("fail", 405);
}
// Browsers always send Origin on cross-origin POSTs; refuse other sites.
if ($origin !== "" && !in_array($origin, $allowed_origins, true)) {
    respond("fail", 403);
}

$data = json_decode(file_get_contents("php://input"), true);
if (!is_array($data)) {
    respond("fail", 400);
}

// Trim, cap the length and strip control characters (prevents mail header injection).
function field($data, $key, $multiline = false) {
    $value = isset($data[$key]) && is_string($data[$key]) ? $data[$key] : "";
    $value = mb_substr(trim($value), 0, $multiline ? 2000 : 200);
    $pattern = $multiline ? '/[^\P{C}\n]/u' : '/\p{C}/u';
    return preg_replace($pattern, " ", $value);
}

// Honeypot: real visitors never fill this in. Pretend it worked.
if (field($data, "website") !== "") {
    respond("success");
}

$headers_base = "From: " . $mail_from . "\r\n"
    . "Content-Type: text/plain; charset=UTF-8\r\n"
    . "X-Mailer: PHP/" . phpversion();

if (isset($data["voornaam"])) {
    // Intake / contact form
    $voornaam       = field($data, "voornaam");
    $tussenvoegsel  = field($data, "tussenvoegsel");
    $achternaam     = field($data, "achternaam");
    $straatnaam     = field($data, "straatnaam");
    $huisnummer     = field($data, "huisnummer");
    $postcode       = field($data, "postcode");
    $woonplaats     = field($data, "woonplaats");
    $telefoonnummer = field($data, "telefoonnummer");
    $emailadres     = field($data, "emailadres");
    $ref            = field($data, "ref");
    $product        = field($data, "product");
    $hulpvraag      = field($data, "hulpvraag", true);

    $required = [$voornaam, $achternaam, $straatnaam, $huisnummer, $postcode, $woonplaats, $telefoonnummer];
    foreach ($required as $value) {
        if ($value === "") {
            respond("fail", 422);
        }
    }
    if (!filter_var($emailadres, FILTER_VALIDATE_EMAIL)) {
        respond("fail", 422);
    }

    $naam = implode(" ", array_filter([$voornaam, $tussenvoegsel, $achternaam]));
    $subject = "[AANMELDING] " . $naam . " - " . $telefoonnummer . " " . $emailadres;
    $message = "Er is een nieuwe aanmelding op de website:\n\n"
        . "Naam: " . $naam . "\n"
        . "Adres:\n" . $straatnaam . " " . $huisnummer . "\n" . $postcode . " " . $woonplaats . "\n\n"
        . "Telefoon en Email:\n" . $telefoonnummer . " " . $emailadres . "\n\n"
        . "Behandeling / product:\n" . ($product !== "" ? $product : "—") . "\n\n"
        . "Hulpvraag:\n" . ($hulpvraag !== "" ? $hulpvraag : "—") . "\n\n"
        . "Verwijzing:\n" . ($ref !== "" ? $ref : "—");
    $reply_to = $emailadres;
} else {
    // Newsletter form (just an email address)
    $email = field($data, "email");
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        respond("fail", 422);
    }
    $subject  = "Nieuwe nieuwsbrief aanmelding";
    $message  = "Nieuw e-mailadres aangemeld voor de nieuwsbrief:\n\n" . $email;
    $reply_to = $email;
}

$headers = $headers_base . "\r\nReply-To: " . $reply_to;
$ok = mail($mail_to, mb_encode_mimeheader($subject, "UTF-8"), $message, $headers);

respond($ok ? "success" : "fail", $ok ? 200 : 500);
