export const project = {
    id: 1,
    tags:["dco"],
    client: "Unive",
    title: "Univé_Autoverzekering",
    sizes: ["120x600", "160x600", "300x250", "300x600", "320x240", "320x400", "320x480", "336x280", "970x250"],
    description: "MAINVAR functionality:  COPY-2 - '5' - time when copy1 changes to copy2; BTN - '6' - tiem start animation of cta and usps, '1 or 0' - visible or non visible last usp; STICKER - '7' - time of appearing sticker1, '9' - time of changing sticker1 to sticker2", //optional

    type: "dco", //options: display, apto, dco
    platform: "dcs", //options: dcs, weborama, pexi
    campaign: "Univé_Autoverzekering_2024",
    date: "2024",
    dynamic: [
        {
        "id": "s0_copy_1",
        "name": "COPY_1",
        "type": "text",
        "value": "Véél situaties<br>onderweg de baas"
        },
        {
        "id": "s0_copy_2",
        "name": "COPY_2",
        "type": "text",
        "value": "Jij kunt het aan <br> met Univé"
        },
        {
            "id": "s0_i1",
            "name": "I1",
            "type": "image",
            "hidden": true, // we don't want to show this
             "value": [
                {
                "size": "300x600", 
                "value": "images/300x600/21fc376da605b04aaa73bf303f22743646f7bf12.jpg""
                },
                {
                "size": "120x600",
                "value": "images/300x600/d62d3f3c739bb073bc8d048549d5b88769c2ae56.jpg""
                 },
                {
                "size": "160x600",
                "value": "images/120x600/23c68e2513992fb7361888acacff168e3373a3a2.jpg""
                },
                {
                "size": "300x250",
                "value": "images/160x600/b556e24899279dd0fbbaafdb417f1f32a289194a.jpg""
                },
                {
                "size": "320x240",
                "value": "images/300x250/174122d4192726b83e6f2044f61ed64d0307b142.jpg""
                },
                {
                "size": "336x280",
                "value": "images/320x240/cf459fe37f6e04790db2894ef548054dfd7a0f9c.jpg""
                },
                {
                "size": "320x400",
                "value": "images/336x280/b8cfdd872df62a1d82b6abe4443255de76431c40.jpg""
                },
                {
                "size": "320x480",
                "value": "images/320x400/2184cf0c63aec1ba510184864d8206712fa84a66.jpg""
                },
                {
                "size": "970x250",
                "value": "images/320x480/cd66bdab9b1a7c423f9492c225335255fa2c3ca2.jpg""
                }
            ]
        },
        {
            "id": "s0_i2",
            "name": "I2",
            "type": "image",
            "hidden": true, // we don't want to show this
            "value": [
                {
                "size": "300x600",
                "value": "images/300x600/97244189171f1ce1e8a3c6fd11167cca7c907166.jpg""
                },
                {
                "size": "120x600",
                "value": "images/300x600/ff6d8d5ba0cde6468b8713efb59f604a7e461d8c.jpg""
                 },
                {
                "size": "160x600",
                "value": "images/120x600/ea97de9fa73574a5912c09a0e5c5d91f0f37b31d.jpg""
                },
                {
                "size": "300x250",
                "value": "images/160x600/beeab66e96d8fc2fc970d8cd1ba85c5da220437b.jpg""
                },
                {
                "size": "320x240",
                "value": "images/300x250/18b1cf5a299abff0ad0506836852ff59ac5959d2.jpg""
                },
                {
                "size": "336x280",
                "value": "images/320x240/a0e68263eda7942f55d9a66c3524cd8121f459df.jpg""
                },
                {
                "size": "320x400",
                "value": "images/336x280/8049f1c3bae9c9e440282ec6ce4aafcedcd82122.jpg""
                },
                {
                "size": "320x480",
                "value": "images/320x400/bc5f47bbca2f9b229188c4cdf810e2904598f842.jpg""
                },
                {
                "size": "970x250",
                "value": "images/320x480/424bc5fa23984a95315e4c633e64cabd18250bde.jpg""
                }
            ]
        },
        {
            "id": "s0_i3",
            "name": "I3",
            "type": "image",
            "hidden": true, // we don't want to show this
            "value": [
                {
                "size": "300x600",
                "value": "images/300x600/80491424169423fa9b0c051c259d9f29d66c50aa.jpg""
                },
                {
                "size": "120x600",
                "value": "images/300x600/01253aa19fa4b97a6697a14567f7f69e9def6ff1.jpg""
                 },
                {
                "size": "160x600",
                "value": "images/120x600/e91e1b612f3fbd809de93ab0c429abcfd9f98152.jpg""
                },
                {
                "size": "300x250",
                "value": "images/160x600/880bf4d480c42070a86104090a75f6614e4f2bc8.jpg""
                },
                {
                "size": "320x240",
                "value": "images/300x250/c99a75419140b2c9ccae6c3c00d14258f8d6f759.jpg""
                },
                {
                "size": "336x280",
                "value": "images/320x240/e8bf825e1a2f62c5ca7e2215719afeb5497daeb3.jpg""
                },
                {
                "size": "320x400",
                "value": "images/336x280/2acf681f60b6b0cec99f969525afb74b012388b8.jpg""
                },
                {
                "size": "320x480",
                "value": "images/320x400/9cab567a5b6c1887c9145403efa44592632f36cd.jpg""
                },
                {
                "size": "970x250",
                "value": "images/320x480/f7e01e38dcd456c5ef11aebdae67b98975bf7318.jpg""
                }
            ]
        },
        {
            "id": "s0_i4",
            "name": "I4",
            "type": "image",
            "hidden": true, // we don't want to show this
            "value": [
                {
                "size": "300x600",
                "value": "images/300x600/78fd6ed4f32e99d22ac7db0cf35e8b69b88d34fe.jpg""
                },
                {
                "size": "120x600",
                "value": "images/300x600/0ceb504e53d10d09166cd6e4bb850372e0707df3.jpg""
                 },
                {
                "size": "160x600",
                "value": "images/120x600/39d80770e3a961a36c59c8db443f3888d6821789.jpg""
                },
                {
                "size": "300x250",
                "value": "images/160x600/c4b542448c0c28051a37437d1755f33217d68f7a.jpg""
                },
                {
                "size": "320x240",
                "value": "images/300x250/91f378cd7f1f69587f96cdf2c83b4c5d5785c839.jpg""
                },
                {
                "size": "336x280",
                "value": "images/320x240/a1000eb739e0faa7d496a2eba39211b6ac0e912b.jpg""
                },
                {
                "size": "320x400",
                "value": "images/336x280/eff176acbcb78ffe80d71ff6196973ed33bf424c.jpg""
                },
                {
                "size": "320x480",
                "value": "images/320x400/ce956f37de3ea2b0d295546d136db9b531066458.jpg""
                },
                {
                "size": "970x250",
                "value": "images/320x480/fea75c5847cc5f4c597d4de1f32ee542f1a91325.jpg""
                }
            ]
        },
        {
            "id": "s0_i5",
            "name": "I5",
            "type": "image",
            "hidden": true, // we don't want to show this
            "value": [
                {
                "size": "300x600",
                "value": "images/300x600/ae2615aa37f4b39f6fdc50777e4d57e4e1b78965.jpg""
                },
                {
                "size": "120x600",
                "value": "images/300x600/eb126b342c9e958004d056d7df51e9f27fbc298a.jpg""
                 },
                {
                "size": "160x600",
                "value": "images/120x600/1f69e1498636dcd3a1f1e0b75cceb6bf4fe3e681.jpg""
                },
                {
                "size": "300x250",
                "value": "images/160x600/5cd4bbb3154b9ff118f8364802a1f8094db2bb9a.jpg""
                },
                {
                "size": "320x240",
                "value": "images/300x250/82e2139b0f6a887d4e74503caa6f6bdb13e78e6c.jpg""
                },
                {
                "size": "336x280",
                "value": "images/320x240/727d4b093f4506aae583e76070096c84866e7750.jpg""
                },
                {
                "size": "320x400",
                "value": "images/336x280/4fa1e374e53829b5b6ba09fecb18aa6a63843485.jpg""
                },
                {
                "size": "320x480",
                "value": "images/320x400/aaa5587f4f811909e102552211b6fbe426eae241.jpg""
                },
                {
                "size": "970x250",
                "value": "images/320x480/3a463980a149513cc1d7b1a2326e327bda1cd40a.jpg""
                }
            ]
        },
        {
            "id": "s0_cta",
            "name": "CTA",
            "type": "text",
            "value": "Ontdek onze autoverzekering"
        },
        {
            "id": "s0_usp1",
            "name": "USP1",
            "type": "image",
            "hidden": true, // we don't want to show this
            "value": [
                {
                "size": "300x600",
                "value": "images/300x600/a2b640b8a876843cbded62ca1474b07dabec0a0f.png""
                },
                {
                "size": "120x600",
                "value": "images/300x600/11396a259de7a9b0fd25e25bc0d2ba1a832a5089.png""
                 },
                {
                "size": "160x600",
                "value": "images/120x600/e8be35039c3eb8021bad4c5fb863fe1c2d6ad28f.png""
                },
                {
                "size": "300x250",
                "value": "images/160x600/c92071fbfb26b9e0a50f3f206f943c2d6095e300.png""
                },
                {
                "size": "320x240",
                "value": "images/300x250/13d76d7e90c559fabf9b43d9ebbaa96ef2000dbe.png""
                },
                {
                "size": "336x280",
                "value": "images/160x600/c92071fbfb26b9e0a50f3f206f943c2d6095e300.png""
                },
                {
                "size": "320x400",
                "value": "images/336x280/e96703ed303944cc31eb22209a5e47a6ff691acb.png""
                },
                {
                "size": "320x480",
                "value": "images/320x400/8f3b2c8026adffe612228c487ad0a1f0a98ff19d.png""
                },
                {
                "size": "970x250",
                "value": "images/320x480/bfdc19387fe298e5b5169e59fe16e000092248f6.png""
                }
            ]
        },
        {
            "id": "s0_usp2",
            "name": "USP2",
            "type": "image",
            "hidden": true, // we don't want to show this
            "value": [
                {
                "size": "300x600",
                "value": "images/300x600/87baba22fce0c671a1faa68d859ed0cd8ebd0b83.png""
                },
                {
                "size": "120x600",
                "value": "images/300x600/99116344bbc2d4c75b5bd49803582810d01784ad.png""
                 },
                {
                "size": "160x600",
                "value": "images/120x600/407479b3e3493f5227af87e163007c0bfdbb51fa.png""
                },
                {
                "size": "300x250",
                "value": "images/160x600/fc9a350069efa7c29f3a867d909b767295c4eb5e.png""
                },
                {
                "size": "320x240",
                "value": "images/300x250/989dd17e74f7847ad1a6e9fde11c03462214985a.png""
                },
                {
                "size": "336x280",
                "value": "images/160x600/fc9a350069efa7c29f3a867d909b767295c4eb5e.png""
                },
                {
                "size": "320x400",
                "value": "images/336x280/00347fc998a158c6eccd85f3838ee7ccd43d7a09.png""
                },
                {
                "size": "320x480",
                "value": "images/320x400/d0c56b4c560029574b5638e4ce7e7ebabcc3f965.png""
                },
                {
                "size": "970x250",
                "value": "images/320x480/977373c4075dd8275f1d3e466b987c89e3edae4d.png""
                }
            ]
        },
        {
            "id": "s0_usp3",
            "name": "USP3",
            "type": "image",
            "hidden": true, // we don't want to show this
            "value": [
                {
                "size": "300x600",
                "value": "images/300x600/440b7819c77baa66d6c12d5179b7dd73cc958cd7.png""
                },
                {
                "size": "120x600",
                "value": "images/300x600/8c7f8a7d2231dcb920fa3ada494f0fd51a347f05.png""
                 },
                {
                "size": "160x600",
                "value": "images/120x600/02b47c3c62005eb47e3a53100033cc3d24851da1.png""
                },
                {
                "size": "300x250",
                "value": "images/160x600/2f8fb6ac30f47ec354b350dc1e8e3c94372ca48c.png""
                },
                {
                "size": "320x240",
                "value": "images/300x250/aeda1d99e04efbdc24ddd640454e172f6cbc1572.png""
                },
                {
                "size": "336x280",
                "value": "images/160x600/2f8fb6ac30f47ec354b350dc1e8e3c94372ca48c.png""
                },
                {
                "size": "320x400",
                "value": "images/336x280/ce54f29b358e2cae3670da8f1ad13dc6cb74eba9.png""
                },
                {
                "size": "320x480",
                "value": "images/320x400/c30cdab0250d1ebbcb3b03c647ba71053f64433f.png""
                },
                {
                "size": "970x250",
                "value": "images/320x480/115a3a1f9bda756d459cefd6774263ca16d7fb14.png""
                }
            ]
        },
        {
            "id": "s0_mainVar",
            "name": "MAINVAR",
            "type": "text",
            "value": "COPY-2-5|BTN-6-1|STICKER-7-9"
        },
        {
            "id": "s0_sticker1",
            "name": "STICKER1",
            "type": "image",
            "hidden": true, // we don't want to show this
            "value": "images/misc/062826f3c271d1278d95ff81d60d0bfc6a16655d.png""
        },
        {
            "id": "s0_sticker2",
            "name": "STICKER2",
            "type": "image",
            "hidden": true, // we don't want to show this
            "value": "images/misc/a6f911a09d7ac59d5967ba00f1bb32857cd894f1.png"" //no.png
        }
    ]
}