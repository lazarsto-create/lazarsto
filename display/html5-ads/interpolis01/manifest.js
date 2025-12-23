export const project = {
    id: 1,
    client: "Interpolis",
    title: "Particulier",
    sizes: ["120x600", "160x600", "300x250", "300x600", "320x100", "320x240", "336x280", "728x90", "970x250"],
    description: "MAINCOPY: for non bold font use <n>non bold</n> wrapping; USP: use '|' to devide USP  texts; LABEL_POSITION: shift label horizontally,vertically pixels", //optional
    type: "dco", //options: display, apto, dco
    platform: "dcs", //options: dcs, weborama, pexi
    campaign: "Interpolis_DCO_Particulier",
    date: "2024",
    dynamic: [
        {
            "id": "s0_maincopy",
            "name": "MAINCOPY",
            "type": "text",
            "value": "Rechtsbijstand- <br>verzekering <br> <n>van Interpolis </n>"
        }, 
        {
            "id": "s0_USP",
            "name": "USP",
            "type": "text",
            "value": "Keuze uit 4 verschillende dekkingen|Klanten beoordelen juridische hulp met een 8|Je bent direct verzekerd"
        }, 
        {
            "id": "s0_CTA",
            "name": "CTA",
            "type": "text",
            "value": "Ontdek nu"
        },
        {
            "id": "s0_label",
            "name": "LABEL",
            "type": "image",
            "hidden": true, // we don't want to show this
            "value": "https://dco3.s3.eu-central-1.amazonaws.com/51888c54767a41e0ee632f16bc0586d1404d4697.png"
        },
        {
            "id": "s0_image",
            "name": "IMAGE",
            "type": "image",
            "hidden": true, // we don't want to show this
            "value": [
                {
                "size": "300x600",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/fdd3b2f0771090d821138aa4ae6ea7dfd7e38a2f.jpg"
                },
                {
                "size": "160x600",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/494ec7cd1235893cd8c6ac0a4af3dd92b0aedfd3.jpg"
                 },
                {
                "size": "120x600",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/681ea37de7946116047f1214bcd9a15edca9a477.jpg"
                },
                {
                "size": "336x280",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/71337b5f940b1db27ed855e5afcf453ae51db9c0.jpg"
                },
                {
                "size": "300x250",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/c56ef1c43c03f4edc6ffd6afcb000ce01c2487ba.jpg"
                },
                {
                "size": "320x240",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/c65d3150d6473b9aebfb64cd28f3ec6497531dc1.jpg"
                },
                {
                "size": "970x250",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/59e4bf13f9de76ead204408a4bdf40d259568c8e.jpg"
                },
                {
                "size": "728x90",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/8be72220a8d1486cdb27f39731cc13ab52ee78ea.jpg"
                },
                {
                "size": "320x100",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/e16fb0be917e20c0a1f9ac67973e21f273f00685.jpg"
                }
            ]
        },
        {
            "id": "s0_label_position",
            "name": "LABEL_POSITION",
            "type": "text",
            "value": "-20,10"
        }
    ]

}