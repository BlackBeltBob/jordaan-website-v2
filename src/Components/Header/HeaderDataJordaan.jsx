const HeaderDataJordaan = [
    {
        title: 'Home',
        link: '/'
    },
    {
        title: 'Organisatie',
        megamenu: [
            {
                title: 'Organisatie',
                dropdown: [
                    {
                        icon: 'fas fa-user-friends',
                        title: 'Team',
                        link: '/page/our-team'
                    },
                    {
                        icon: 'solid-icon-Target',
                        title: 'Onze missie',
                        link: '/page/mission-statement'
                    },
                    {
                        icon: 'solid-icon-Medical-Sign',
                        title: 'Voor verwijzers',
                        link: '/page/for-referrers'
                    },
                    {
                        icon: 'fas fa-skull-crossbones', //'far fa-comment-dots',
                        title: 'Contact',
                        link: '/page/contact-form'
                    },
                    {
                        icon: 'solid-icon-Affiliate',
                        title: 'Samenwerkingspartners',
                        link: '/page/collaborations'
                    },
                ],
            },
        ]
    },
    {
        title: 'Tarieven',
        megamenu: [
            {
                title: 'Tarieven',
                dropdown: [
                    {
                        icon: 'fas fa-money-bill-wave-alt',
                        title: 'Prijslijst 2024',
                        link: '/page/tariffs-2024'
                    },
                    {
                        icon: 'fas fa-clock',
                        title: 'Chronische zorgtrajecten',
                        link: '/page/chronic-healthcare'
                    },
                    {
                        icon: 'fas fa-file-contract',
                        title: 'Gecontracteerde zorgverzekeraars',
                        link: '/page/contracted-insurers'
                    },
                ]
            },
        ],
    },
    {
        title: 'Reviews',
        megamenu: [
            {
                title: 'Reviews',
                dropdown: [
                    {

                        icon: 'fas fa-flask',
                        title: 'Klanttevredenheidsonderzoek',
                        link: '/page/reviews-prem'
                    },
                    {
                        icon: 'far fa-comment',
                        title: 'Testimonials',
                        link: '/page/reviews-testimonials'
                    },
                    {
                        icon: 'fab fa-google',
                        title: 'Review achterlaten',
                        link: 'https://g.page/r/CexOIx2B4m5hEAg/review'
                    },
                ],
            },
            {
                dropdown: [
                    {
                        img: `${process.env.PUBLIC_URL}/assets/img/qualityseal.png`,
                        link: 'https://mensendieck.substack.com/',
                    },
                ]
            }
        ],
    },
    {
        title: 'Aanbod',
        megamenu: [
            {

                title: 'Pakketten',
                dropdown: [
                    {
                        icon: 'fas fa-skull-crossbones',
                        title: 'Rugklachten',
                        link: '/page/pakket-rugklachten'
                    },
                    {
                        icon: 'fas fa-skull-crossbones',
                        title: 'Nekklachten',
                        link: '/page/pakket-nekklachten'
                    },
                    {
                        icon: 'fas fa-skull-crossbones',
                        title: 'Slaaptraining',
                        link: '/page/pakket-slaaptraining'
                    },
                ]
            },
            {
                title: 'Behandelingen',
                dropdown: [
                    {
                        icon: 'fas fa-dumbbell',
                        title: 'Onze reguliere behandelingen',
                        link: '/page/treatments'
                    },
                    {
                        icon: 'fas fa-eye',
                        title: 'Hypnotherapie',
                        link: '/page/treatment-hypnotherapy'
                    },
                    {
                        icon: 'fas fa-users',
                        title: 'Bewegingsgroepen',
                        link: '/page/treatment-exercisegroups'
                    },
                ]
            },
            {
                title: 'Nieuwsbrief',
                dropdown: [
                    {
                        img: `${process.env.PUBLIC_URL}/assets/img/webp/download.jpeg`,
                        link: 'https://mensendieck.substack.com/',
                    },
                ]
            }
        ]
    },
]

export default HeaderDataJordaan