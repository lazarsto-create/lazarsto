export const project = {
    id: 1,
    client: "DPG",
    title: "VTP | 2024 Puzzels",
    sizes: ["300x600", "300x250", "320x240", "728x90", "970x250", "1080x1920", "1080x1080"],
    description: "Dynamic HTML5 banner campaign tailored for GPD Media’s 9 distinct brands. Each ad dynamically loads brand-specific text, images, logos, and links from a single content feed.", //optional
    type: "dco", //options: display, apto, dco
    platform: "pexi", //options: dcs, weborama, pexi
    campaign: "dpg-fluister-format-2025",
    date: "2025",
    dynamic: [{
         "id": "s0_brand",
            "name": "Brand",
            "type": "preset",
            "options": ["de_Morgen", "de_Volkskrant", "flair", "Het_Parool", "HLN", "Libelle", "margriet", "Trouw", "Nu"],
            "value": "de_Morgen"
    },
        {
            "id": "s0_bg_color",
            "name": "Bg Color",
            "type": "text",
            "value": "f4c6bd"
        }, {
            "id": "s0_CTA",
            "name": "CTA",
            "type": "text",
            "value": "Speel direct"
        },
        {
            "id": "s0_bg_image",
            "name": "image",
            "type": "image",
            "hidden": true, // we don't want to show this
            "value": "https://app.grid8.com/images/no.png"
        }, {
            "id": "s0_card_1",
            "name": "image",
            "type": "image",
            "hidden": true, // we don't want to show this
            "value": "https://dco3.s3.eu-central-1.amazonaws.com/87d215865f3d6471925de94ff22105ecbf318e9c.jpeg"
        },
        {
            "id": "s0_card_2",
            "name": "image",
            "type": "image",
            "hidden": true, // we don't want to show this
            "value": "https://dco3.s3.eu-central-1.amazonaws.com/6e8712a745ede7de6c903605d023b1c1ccef3599.jpeg"
        },
        {
            "id": "s0_card_3",
            "name": "image",
            "type": "image",
            "hidden": true, // we don't want to show this
            "value": "https://dco3.s3.eu-central-1.amazonaws.com/5931156720077f49a9d9b21873f6c3fc27aa7d55.jpeg"
        },
        {
             "id": "s0_heading_1_copy",
            "name": "Header1",
            "type": "text",
            "value": "Daag uw brein uit met onze puzzels"
        },
        {
            "id": "s0_heading_2_copy",
            "name": "Header2",
            "type": "text",
            "value": "Houd uw brein fit met onze puzzels"
        },
        {
            "id": "s0_image",
            "name": "image",
            "type": "image",
            "hidden": true, // we don't want to show this
            "value": "https://dco3.s3.eu-central-1.amazonaws.com/167bb0c654b37332151449a8a576292a2bc435d4.png"
        },
        {
             "id": "s0_image_show",
            "name": "Show image",
            "type": "text",
            "value": "show"
        },{
             "id": "s0_subheading_1",
            "name": "Subheader1",
            "type": "text",
            "value": "Elke dag nieuwe opgaven"
        },
        {
            "id": "s0_subheading_2",
            "name": "Subheader2",
            "type": "text",
            "value": "Elke dag nieuwe opgaven"
        },
        {
            "id": "social_shade",
            "name": "Shadow",
            "type": "text",
            "value": "#2f2f2f"
        }]

}