export const project = {
    id: 1,
    client: "Mediamarkt",
    title: "MM | 2025 Smartphone",
    sizes: ["120x600", "160x600", "300x250", "300x600", "320x100", "320x240", "336x280", "728x90", "970x250"],
    description: "Dynamic HTML5 banner campaign tailored for Mediamarkt distinct brands. Each ad dynamically loads brand-specific text, images, logos, and links from a single content feed.", //optional
    type: "dco", //options: display, apto, dco
    platform: "pexi", //options: dcs, weborama, pexi
    campaign: "Mediamarkt smartphone ",
    date: "2025",
    dynamic: [{
         "id": "s0_Background",
            "name": "Image Background",
            "type": "image",
            "hidden": true, // we don't want to show this
             "value": [
                {
                "size": "120x600",
                "value": "https://app.grid8.com/images/no.png"
                },
                {
                "size": "160x600",
                "value": "https://app.grid8.com/images/no.png"
                 },
                {
                "size": "300x250",
                "value": "https://app.grid8.com/images/no.png"
                },
                {
                "size": "300x600",
                "value": "https://app.grid8.com/images/no.png"
                },
                {
                "size": "320x100",
                "value": "https://app.grid8.com/images/no.png"
                },
                {
                "size": "320x240",
                "value": "https://app.grid8.com/images/no.png"
                },
                {
                "size": "336x280",
                "value": "https://app.grid8.com/images/no.png"
                },
                {
                "size": "728x90",
                "value": "https://app.grid8.com/images/no.png"
                },
                {
                "size": "970x250",
                "value": "https://app.grid8.com/images/no.png"
                }
            ]
    },
     {
            "id": "s0_Overlay",
            "name": "Image Overlay",
            "type": "image",
            "hidden": true, // we don't want to show this
             "value": [
                {
                "size": "120x600",
                "value": "https://app.grid8.com/images/no.png"
                },
                {
                "size": "160x600",
                "value": "https://app.grid8.com/images/no.png"
                 },
                {
                "size": "300x250",
                "value": "https://app.grid8.com/images/no.png"
                },
                {
                "size": "300x600",
                "value": "https://app.grid8.com/images/no.png"
                },
                {
                "size": "320x100",
                "value": "https://app.grid8.com/images/no.png"
                },
                {
                "size": "320x240",
                "value": "https://app.grid8.com/images/no.png"
                },
                {
                "size": "336x280",
                "value": "https://app.grid8.com/images/no.png"
                },
                {
                "size": "728x90",
                "value": "https://app.grid8.com/images/no.png"
                },
                {
                "size": "970x250",
                "value": "https://app.grid8.com/images/no.png"
                }
            ]
        },
        {
             "id": "s1_Background",
            "name": "Image Background",
            "type": "image",
            "hidden": true, // we don't want to show this
             "value": [
                {
                "size": "120x600",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/3b1ac13bb11ecb717b0b2b9a743542103f887c79.jpg"
                },
                {
                "size": "160x600",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/3b1ac13bb11ecb717b0b2b9a743542103f887c79.jpg"
                 },
                {
                "size": "300x250",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/67f66ee953bb6cf7cf66a0852d7edf5b4695cd75.jpg"
                },
                {
                "size": "300x600",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/3b1ac13bb11ecb717b0b2b9a743542103f887c79.jpg"
                },
                {
                "size": "320x100",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/8c6a085503d5cd94d0719fd9038ae78f6b0b33ea.jpg"
                },
                {
                "size": "320x240",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/8054d6ead4682d1128b65c5a43ef1d43f0ee32b4.jpg"
                },
                {
                "size": "336x280",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/bdbf329e0323682bc10808f6710d8403b1d0f390.jpg"
                },
                {
                "size": "728x90",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/817ca49b2180b3294acf1686638aa8ce094e98b3.jpg"
                },
                {
                "size": "970x250",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/2ad1316578424d0e6e02f34645a8c7a616a4d162.jpg"
                }
            ]
        }, {
            "id": "s1_Overlay",
            "name": "Image Overlay",
            "type": "image",
            "hidden": true, // we don't want to show this
             "value": [
                {
                "size": "120x600",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/3c342a2ada97d3e0148bc7a4d607a418e8d49306.png"
                },
                {
                "size": "160x600",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/3c342a2ada97d3e0148bc7a4d607a418e8d49306.png"
                 },
                {
                "size": "300x250",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/c5c07834ca9e15d968c67d705707a1d22c0ce4e3.png"
                },
                {
                "size": "300x600",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/3c342a2ada97d3e0148bc7a4d607a418e8d49306.png"
                },
                {
                "size": "320x100",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/7d6af9f9b711c379b86cd11736a8511b1452864a.png"
                },
                {
                "size": "320x240",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/87524cf5d2131d6723673d4ae1d66bab1908d9f2.png"
                },
                {
                "size": "336x280",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/79031f9057b5b4854a9ed45d0816feece7a9f66c.png"
                },
                {
                "size": "728x90",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/ba83086d4dd0002c86b5f865d281d3f4f860157f.png"
                },
                {
                "size": "970x250",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/24a03d9383ee3dfb88483607fc179a6e2cfbc5c5.png"
                }
            ]
        },
        {
            "id": "s1_CTA",
            "name": "Copy",
            "type": "text",
            "value": "Click here"
        },
        {
             "id": "s1_copy",
            "name": "Article Title",
            "type": "text",
            "value": "Voor elk shot, de juiste lens|ALTIJD BINNEN HANDBEREIK"
        },
        {
            "id": "s1_elem1",
            "name": "image",
            "type": "image",
            "hidden": true, // we don't want to show this
            "value": "https://dco3.s3.eu-central-1.amazonaws.com/bf6b4a85c5ab056de62479a4f551e935eb5255e4.png"
        },
        {
            "id": "s1_elem2",
            "name": "image",
            "type": "image",
            "hidden": true, // we don't want to show this
            "value": "https://dco3.s3.eu-central-1.amazonaws.com/77beda469db5e8ded624a218165c70f3e44a8816.png"
        },
        {
             
            "id": "s1_emoji",
            "name": "image",
            "type": "image",
            "hidden": true, // we don't want to show this
            "value": "https://dco3.s3.eu-central-1.amazonaws.com/c18b0b441c4b07bd417b3e87075c3c342a490cc9.png"
        }]

}