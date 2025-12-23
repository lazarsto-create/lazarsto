export const project = {
    id: 1,
    client: "DPG",
    title: "VTP | 2025 Puzzelfit",
    sizes: ["300x600", "320x400", "720x405", "720x480", "970x250", "1080x1350", "1080x1920"],
    description: "Dynamic HTML5 banner campaign tailored for GPD Media’s 9 distinct brands. Each ad dynamically loads brand-specific text, images, logos, and links from a single content feed.", //optional
    type: "dco", //options: display, apto, dco
    platform: "pexi", //options: dcs, weborama, pexi
    campaign: "dpg-fluister-format-2025",
    date: "2025",
    dynamic: [{
         "id": "s0_brand",
            "name": "Brand",
            "type": "preset",
            "options": ["AD","ED","de_Morgen", "HUMO", "flair", "HLN", "Libelle", "margriet"],
            "value": "de_Morgen"
    },
        {
            "id": "s0_CTA",
            "name": "CTA",
            "type": "text",
            "value": "Speel direct"
        },
        {
            "id": "s0_FRAME2",
            "name": "Frame2",
            "type": "text",
            "value": "on"
        }, {
            "id": "s0_screen_image",
            "name": "image",
            "type": "image",
            "hidden": false, // we don't want to show this
            "value": "images/mobile_screen.jpg"
        },
        {
            "id": "s0_subtitle1",
            "name": "Subtitle 1",
            "type": "text",
            "value": "Speel jouw favoriete puzzels in de Puzzelfit-app"
        },
        {
            "id": "s0_subtitle2",
            "name": "Subtitle 2",
            "type": "text",
            "value": ""
        },
        {
            "id": "s0_title",
            "name": "Title",
            "type": "text",
            "value": "Puzzelfit reist met je mee deze zomer"
        }]

}