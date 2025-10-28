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
                "value": "sizes/300x600/300x600_fr3_bg1.jpg"
                },
                {
                "size": "160x600",
                "value": "sizes/300x600/300x600_fr3_bg1.jpg"
                 },
                {
                "size": "300x250",
                "value": "sizes/300x250/300x250_fr3_bg1.jpg"
                },
                {
                "size": "300x600",
                "value": "sizes/300x600/300x600_fr3_bg1.jpg"
                },
                {
                "size": "320x100",
                "value": "sizes/320x100/320x100_fr3_bg1.jpg"
                },
                {
                "size": "320x240",
                "value": "sizes/320x240/320x240_fr3_bg1.jpg"
                },
                {
                "size": "336x280",
                "value": "sizes/300x250/300x250_fr3_bg1.jpg"
                },
                {
                "size": "728x90",
                "value": "sizes/728x90/728x90_fr3_bg1.jpg"
                },
                {
                "size": "970x250",
                "value": "sizes/970x250/970x250_fr3_bg1.jpg"
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
                "value": "sizes/300x600/300x600_fr3_bg2.png"
                },
                {
                "size": "160x600",
                "value": "sizes/300x600/300x600_fr3_bg2.png"
                 },
                {
                "size": "300x250",
                "value": "sizes/300x250/300x250_fr3_bg2.png"
                },
                {
                "size": "300x600",
                "value": "sizes/300x600/300x600_fr3_bg2.png"
                },
                {
                "size": "320x100",
                "value": "sizes/320x100/320x100_fr3_bg2.png"
                },
                {
                "size": "320x240",
                "value": "sizes/320x240/320x240_fr3_bg2.png"
                },
                {
                "size": "336x280",
                "value": "sizes/300x250/300x250_fr3_bg2.png"
                },
                {
                "size": "728x90",
                "value": "sizes/728x90/728x90_fr3_bg2.png"
                },
                {
                "size": "970x250",
                "value": "sizes/970x250/970x250_fr3_bg2.png"
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
            "hidden": false, // we don't want to show this
            "value": "images/bf6b4a85c5ab056de62479a4f551e935eb5255e4.png"
        },
        {
            "id": "s1_elem2",
            "name": "image",
            "type": "image",
            "hidden": false, // we don't want to show this
            "value": "images/77beda469db5e8ded624a218165c70f3e44a8816.png"
        },
        {
             
            "id": "s1_emoji",
            "name": "image",
            "type": "image",
            "hidden": false, // we don't want to show this
            "value": "images/c18b0b441c4b07bd417b3e87075c3c342a490cc9.png"
        }]

}