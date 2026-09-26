import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Form, Formik } from "formik";
import { Input, Select } from "../Form/Form";
import { ContactFormJordaanSchema } from "../Form/FormSchema";
import { resetForm, sendEmail } from "../../Functions/Utilities";
import Buttons from "../Button/Buttons";
import MessageBox from "../MessageBox/MessageBox";

const classNameInputs = "rounded-[5px] py-[15px] px-[20px] w-full bg-lightgray mb-[5px] border-[1px] border-transparent";
const classNameSelect = "rounded-[5px] py-[15px] px-[20px] w-full bg-lightgray mb-[5px] border-[1px] border-transparent";

const initialValues = {
  voornaam: "",
  tussenvoegsel: "",
  achternaam: "",
  straatnaam: "",
  huisnummer: "",
  postcode: "",
  woonplaats: "",
  telefoonnummer: "",
  emailadres: "",
  ref: "",
  product: "",
  hulpvraag: "",
  website: "", // honeypot, must stay empty
};

export const JordaanContactForm = () => (
  <Container>
    <Row className="justify-center xs:mx-0 gx-0">
      <Col xl={10} lg={11}
           className="col-12 relative bg-white rounded-[6px] shadow-[0_0_20px_rgba(0,0,0,0.1)] mx-auto overflow-hidden">
        <Row>
          <Col md={4} className="col-12 bg-no-repeat bg-cover overflow-hidden relative bg-center sm:h-[350px]"
               style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/webp/temp3.webp)` }} />
          <Col md={8} className="col-12 p-24 xs:p-14 md:p-10">
            <h2 className="heading-5 font-serif font-bold text-[#262b35] uppercase tracking-[-1px] w-[90%] mb-[20px]">
              Boek een afspraak
            </h2>
            <p className="w-[90%] lg:w-full mb-[35px]">
              Laat hier uw gegevens achter, dan nemen wij contact met u op.
            </p>
            <Formik
              initialValues={initialValues}
              validationSchema={ContactFormJordaanSchema}
              onSubmit={async (values, actions) => {
                actions.setSubmitting(true);
                try {
                  const response = await sendEmail(values);
                  if (response.status === "success") {
                    resetForm(actions);
                  } else {
                    actions.setStatus({ success: false });
                    actions.setSubmitting(false);
                    setTimeout(() => actions.setStatus(null), 5000);
                  }
                } catch {
                  actions.setStatus({ success: false });
                  actions.setSubmitting(false);
                  setTimeout(() => actions.setStatus(null), 5000);
                }
              }}
            >
              {({ status, isSubmitting }) => (
                <Form>
                  <Row>
                    <Col md={5}>
                      <Input showErrorMsg={false} type="text" name="voornaam" labelClass="mb-[25px]"
                             className={classNameInputs} placeholder="Voornaam*" />
                    </Col>
                    <Col md={3}>
                      <Input showErrorMsg={false} type="text" name="tussenvoegsel" labelClass="mb-[25px]"
                             className={classNameInputs} placeholder="Tussenvoegsel" />
                    </Col>
                    <Col md={4}>
                      <Input showErrorMsg={false} type="text" name="achternaam" labelClass="mb-[25px]"
                             className={classNameInputs} placeholder="Achternaam*" />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={8}>
                      <Input showErrorMsg={false} type="text" name="straatnaam" labelClass="mb-[25px]"
                             className={classNameInputs} placeholder="Straatnaam*" />
                    </Col>
                    <Col md={4}>
                      <Input showErrorMsg={false} type="text" name="huisnummer" labelClass="mb-[25px]"
                             className={classNameInputs} placeholder="Huisnummer*" />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4}>
                      <Input showErrorMsg={false} type="text" name="postcode" labelClass="mb-[25px]"
                             className={classNameInputs} placeholder="Postcode*" />
                    </Col>
                    <Col md={8}>
                      <Input showErrorMsg={false} type="text" name="woonplaats" labelClass="mb-[25px]"
                             className={classNameInputs} placeholder="Woonplaats*" />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Input showErrorMsg={false} type="text" name="telefoonnummer" labelClass="mb-[25px]"
                             className={classNameInputs} placeholder="Telefoonnummer*" />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Input showErrorMsg={false} type="email" name="emailadres" labelClass="mb-[25px]"
                             className={classNameInputs} placeholder="E-mailadres*" />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Select name="ref" labelClass="mb-[25px]" className={classNameSelect}>
                        <option value="">Hoe heeft u ons gevonden?</option>
                        <option value="Google">Google</option>
                        <option value="Huisarts">Huisarts</option>
                        <option value="Verzekeraar">Verzekeraar</option>
                        <option value="Kennis">Via een kennis</option>
                        <option value="Social media">Social media</option>
                      </Select>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Select name="product" labelClass="mb-[25px]" className={classNameSelect}>
                        <option value="">Welke behandeling / welk product?</option>
                        <option value="e-Consult">e-Consult</option>
                        <option value="Thuiswerkplekinspectie">Thuiswerkplekinspectie</option>
                        <option value="Beweeggroepen">Beweeggroepen</option>
                        <option value="Chronische pijn">Chronische pijn</option>
                        <option value="Ontspanning">Ontspanning / hypnotherapie</option>
                        <option value="Slaaptherapie">Slaaptherapie</option>
                      </Select>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Input showErrorMsg={false} type="text" name="hulpvraag" labelClass="mb-[30px]"
                             className={classNameInputs} placeholder="Wat is uw hulpvraag?" />
                    </Col>
                  </Row>
                  <div aria-hidden="true" style={{ position: "absolute", left: "-9999px" }}>
                    <Input type="text" name="website" tabIndex={-1} autoComplete="off" className={classNameInputs} />
                  </div>
                  {status === true && (
                    <Row>
                      <Col>
                        <MessageBox className="mt-[10px] mb-[20px] py-[10px]" theme="message-box01" variant="success"
                                    message="Uw aanvraag is verstuurd. Wij nemen zo spoedig mogelijk contact met u op." />
                      </Col>
                    </Row>
                  )}
                  {status?.success === false && (
                    <Row>
                      <Col>
                        <MessageBox className="mt-[10px] mb-[20px] py-[10px]" theme="message-box01" variant="danger"
                                    message="Uw aanvraag kon niet verstuurd worden. Probeer het later opnieuw." />
                      </Col>
                    </Row>
                  )}
                  <Buttons ariaLabel="aanvraag versturen" type="submit" disabled={isSubmitting}
                           className="text-sm leading-none font-medium rounded-[4px] w-full uppercase"
                           themeColor={["#fd7f87", "#f7aa80"]} color="#fff" size="lg" title="Aanvragen" />
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);
