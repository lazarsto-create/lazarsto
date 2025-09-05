export const project = {
    id: 1,
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
                "value": "https://app.grid8.com/images/no.png"
                },
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
                "size": "320x240",
                "value": "https://app.grid8.com/images/no.png"
                },
                {
                "size": "336x280",
                "value": "https://app.grid8.com/images/no.png"
                },
                {
                "size": "320x400",
                "value": "https://app.grid8.com/images/no.png"
                },
                {
                "size": "320x480",
                "value": "https://app.grid8.com/images/no.png"
                },
                {
                "size": "970x250",
                "value": "https://app.grid8.com/images/no.png"
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
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/0db6e0c8bac4a175fec725732bb9f557c9f79e0e.jpg"
                },
                {
                "size": "120x600",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/d4379ee560a4fae5d7ab6fb504b2cfc1324bc847.jpg"
                 },
                {
                "size": "160x600",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/5476a2f512d516485df97d9f02ee3a21542f7b25.jpg"
                },
                {
                "size": "300x250",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/81ca0d12218bb76f3c471360e05cf05dc28b5457.jpg"
                },
                {
                "size": "320x240",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/ac4a702ce90b95fa68192d9b2d78914f6e39260b.jpg"
                },
                {
                "size": "336x280",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/bbc5c9978d821cf1bd4554fd4da70b22aa7f14c5.jpg"
                },
                {
                "size": "320x400",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/91556abfefe090d49c026dd759b15e7f5dc6d829.jpg"
                },
                {
                "size": "320x480",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/2b643cdb20494fd32ee5e5a9216825a2aed17bc7.jpg"
                },
                {
                "size": "970x250",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/ce007cdf0c448481195293c4c87c7bf02f9663a2.jpg"
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
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/0782f5a2f917210375eea33b416976c2357fb4dc.jpg"
                },
                {
                "size": "120x600",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/a1004304870accea5e435e22d837984e1edcac9a.jpg"
                 },
                {
                "size": "160x600",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/4b78d45a2754e4864810feb53ff97cdf77f11584.jpg"
                },
                {
                "size": "300x250",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/a0dec559cc2794ec1b0ad6a6d7703f44a4362f91.jpg"
                },
                {
                "size": "320x240",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/13dd88411c2585213c1301dc60ce6b7016ac71fe.jpg"
                },
                {
                "size": "336x280",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/50019909ea00554b54f794a4066822b2eb70dd39.jpg"
                },
                {
                "size": "320x400",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/494fc2b24b9640d5b1bedfefd9b4b8a3fb15fcec.jpg"
                },
                {
                "size": "320x480",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/afd2ffa18478f406f18ca3cfa05fbb9496ab340f.jpg"
                },
                {
                "size": "970x250",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/587f59985f486cde00c8719bc3bc680b7970f88f.jpg"
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
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/bc4b47d587518f23131dea5be946cfd49cc802d6.jpg"
                },
                {
                "size": "120x600",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/4908199eeec39b80c300aadf33ebfd4948cc3a23.jpg"
                 },
                {
                "size": "160x600",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/3f44978a5a471446bfec3184981a4f13b8e322f7.jpg"
                },
                {
                "size": "300x250",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/0721584a4adb9885b97d01f4222a9f2bb4bbe07f.jpg"
                },
                {
                "size": "320x240",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/15eeb74fa71dacbe8961f7e55386e565d5fb0adf.jpg"
                },
                {
                "size": "336x280",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/7280a5a33a7a17c90d66337ef3c2264cd2243382.jpg"
                },
                {
                "size": "320x400",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/cafdd7327c95cc6f8ea028926ab864f164651297.jpg"
                },
                {
                "size": "320x480",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/eab0cf75fe748058c11111adbd93d04d55f37653.jpg"
                },
                {
                "size": "970x250",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/7a518905cbe9bfb5f9f8fbeec93a771d508295f2.jpg"
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
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/ec09e5885c33c736215ccd957c8f63f2288c7655.jpg"
                },
                {
                "size": "120x600",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/5c3a77c5cc94214008e924f7e150eb329515ca0c.jpg"
                 },
                {
                "size": "160x600",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/976d3e72c44437631411ac8f6537217f93cd6be1.jpg"
                },
                {
                "size": "300x250",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/5632d4ae7f5a9a27c1ca75d3811b64803c94d535.jpg"
                },
                {
                "size": "320x240",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/638fd33bcad4b31f3670c4ec49ddd0a89cc2f5c0.jpg"
                },
                {
                "size": "336x280",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/29945615f89a3af0fe22e68f721e0d09fab49491.jpg"
                },
                {
                "size": "320x400",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/2c8c1c2fbf55c9d94d3406135d4e318cb2b0467b.jpg"
                },
                {
                "size": "320x480",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/f17d547827c9279ef126af80d5da46278a07748a.jpg"
                },
                {
                "size": "970x250",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/5b8c6044ffdd20128498206a85183cb09eed8f77.jpg"
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
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/b7bb28d7f589b3460781b7771d3153c92345cf98.png"
                },
                {
                "size": "120x600",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/cb0b5f637c7e992fe4903a48a1fa90b1a6cade90.png"
                 },
                {
                "size": "160x600",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/f1083ed381c1a9e1b8ef5aec1a4ffe785d4d8d05.png"
                },
                {
                "size": "300x250",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/70cb3069e769fae98d10937b28e3827e159c92a1.png"
                },
                {
                "size": "320x240",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/373d9391eb4f3478a5a0d4131aa42a7d78ad388c.png"
                },
                {
                "size": "336x280",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/70cb3069e769fae98d10937b28e3827e159c92a1.png"
                },
                {
                "size": "320x400",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/904d4d0fda893b4818fe64ca3bd05623015716ef.png"
                },
                {
                "size": "320x480",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/ef3e06554a32011128da3bee55104bd9f661b132.png"
                },
                {
                "size": "970x250",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/6534602098dd3ce6aa4972f702a23cccc86a18c4.png"
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
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/f6a67a7494c45a2b6541c84aeeb9e0defd1ef42f.png"
                },
                {
                "size": "120x600",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/3fa552d239165576a2591afdfa08ac18ae34e9e6.png"
                 },
                {
                "size": "160x600",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/6b5522f488eded9d1333a01be436e6447a1b5bd6.png"
                },
                {
                "size": "300x250",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/e5830c0380e3134a321876d79aaf9517f84ca64f.png"
                },
                {
                "size": "320x240",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/b86b5fb7e9be417f5b9a26aae01c490098c27ed7.png"
                },
                {
                "size": "336x280",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/e5830c0380e3134a321876d79aaf9517f84ca64f.png"
                },
                {
                "size": "320x400",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/a21562a4712d2ddb200588bb16bb814ae3ea1268.png"
                },
                {
                "size": "320x480",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/402322934625f3fea110133e407e2eec1cba8f2a.png"
                },
                {
                "size": "970x250",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/f87acace31b4030ce844b554d09021cc839e5e24.png"
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
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/941921d40c278d32ca617305df8ba24fd05c9fb7.png"
                },
                {
                "size": "120x600",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/0fa93c9bf52e2cda3d357fa7fd3b301877ff3c9b.png"
                 },
                {
                "size": "160x600",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/7cd0fac44bffd5b6667443a2fa4d5e24af939849.png"
                },
                {
                "size": "300x250",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/ef3d48ce3dc577ddc091d08b04a4281e1f91f8b4.png"
                },
                {
                "size": "320x240",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/b4be72064456aefbbd97a7a381d7dd36193cc733.png"
                },
                {
                "size": "336x280",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/ef3d48ce3dc577ddc091d08b04a4281e1f91f8b4.png"
                },
                {
                "size": "320x400",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/99c1f544e8b8b52ca1545bb4fd3d6266fdb9fae8.png"
                },
                {
                "size": "320x480",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/a2fd1b563c592f55142b23a7c747b220e9498ece.png"
                },
                {
                "size": "970x250",
                "value": "https://dco3.s3.eu-central-1.amazonaws.com/a88227e8d0411ed0191e420e54bd4f91dcddeda9.png"
                }
            ]
        },
        {
            "id": "s0_usp4",
            "name": "USP4",
            "type": "image",
            "hidden": true, // we don't want to show this
            "value": [
                {
                "size": "300x600",
                "value": "https://app.grid8.com/images/no.png"
                },
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
                "size": "320x240",
                "value": "https://app.grid8.com/images/no.png"
                },
                {
                "size": "336x280",
                "value": "https://app.grid8.com/images/no.png"
                },
                {
                "size": "320x400",
                "value": "https://app.grid8.com/images/no.png"
                },
                {
                "size": "320x480",
                "value": "https://app.grid8.com/images/no.png"
                },
                {
                "size": "970x250",
                "value": "https://app.grid8.com/images/no.png"
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
            "value": "https://dco3.s3.eu-central-1.amazonaws.com/e02857ea40102ed5026187367922ec0a82361faa.png"
        },
        {
            "id": "s0_sticker2",
            "name": "STICKER2",
            "type": "image",
            "hidden": true, // we don't want to show this
            "value": "https://dco3.s3.eu-central-1.amazonaws.com/be403bc75affc71676143e90f1e54106955c4762.png"
        }
    ]
}