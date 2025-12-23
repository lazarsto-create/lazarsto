export const project = {
    id: 1,
    client: "DPG",
    title: "VTP | 2025 Fluister",
    sizes: ["300x600", "320x400", "720x405", "720x480", "970x250", "1080x1350", "1080x1920"],//
    description: "Dynamic HTML5 banner campaign tailored for GPD Media’s 9 distinct brands. Each ad dynamically loads brand-specific text, images, logos, and links from a single content feed.", //optional
    type: "dco", //options: display, apto, dco
    platform: "pexi", //options: dcs, weborama, pexi
    campaign: "dpg-fluister-format-2025",
    date: "2025",
    dynamic: [{
         "id": "s0_brand",
            "name": "Brand",
            "type": "preset",
            "options": ["de_Morgen", "de_Volkskrant", "flair", "Het_Parool", "HLN", "Libelle", "margriet", "Trouw"],
            "value": "de_Morgen"
    },
        {
            "id": "s0_title",
            "name": "Title",
            "type": "text",
            "value": "Title sample text"
        }, {
            "id": "s0_cta",
            "name": "CTA",
            "type": "text",
            "value": "Click here"
        },
        {
            "id": "s0_articleImage1",
            "name": "image",
            "type": "image",
            "hidden": false, // we don't want to show this
            "value": "images/img1.jpg"
        }, {
            "id": "s0_articleImage2",
            "name": "image",
            "type": "image",
            "hidden": false, // we don't want to show this
            "value": "images/img2.jpg"
        },
        {
             "id": "s0_articleTtitle1",
            "name": "Article Title",
            "type": "text",
            "value": "Article title sample 1"
        },
        {
             "id": "s0_articleTtitle2",
            "name": "Article Title",
            "type": "text",
            "value": "Article title sample 2"
        },
        {
             "id": "s0_articleSub1",
            "name": "Article Subtitle",
            "type": "text",
            "value": "Article subtitle sample 1"
        },
        {
             "id": "s0_articleSub2",
            "name": "Article Subtitle",
            "type": "text",
            "value": "Article subtitle sample 2"
        },
        {
             "id": "s0_label1",
            "name": "Label",
            "type": "text",
            "value": "Label 1"
        },
        {
             "id": "s0_label2",
            "name": "Label",
            "type": "text",
            "value": "Label 2"
        }]

}