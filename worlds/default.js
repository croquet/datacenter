// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io

export function init(Constants) {
    Constants.AvatarNames = ["newwhite"];

    /* Alternatively, you can specify a card spec for an avatar,
       instead of a string for the partical file name, to create your own avatar.
       You can add behaviorModules here. Also, if the system detects a behavior module
       named AvatarEventHandler, that is automatically installed to the avatar.
        {
            type: "3d",
            modelType: "glb",
            name: "rabbit",
            dataLocation: "./assets/avatars/newwhite.zip",
            dataRotation: [0, Math.PI, 0],
            dataScale: [0.3, 0.3, 0.3],
        }
    */

    Constants.UserBehaviorDirectory = "behaviors/datacenter";
    Constants.UserBehaviorModules = [
        "lights.js",
        "names.js",
        "blinkin.js",
        "urlLink.js",
        "hinge.js",
        "cabinet.js",
        "graphing.js",
        "slide.js",
    ];

    const avatarModels = [
        "3QwxZSadrDaipHOmMNlb3meCdsvAinaWkoz-frFjuYvoOSUlISJrfn43OD00Inw0PzA8fzwkPSU4Iig_IH84Pn4kfgU5NAY5OCU0AzAzMzglfjg-fzwkPSU4Iig_IH81MCUwOTA_NT00fDI-ITg0I35iCTlhEw5jMwc7fB8GCxZ8PSMZKyY0aRcFKQkcNzYOOQQfFD0OEmNlPiUQfjUwJTB-MjIcIT42BwNnMBwZPmkXEhw9MCUGPxwEGQEUG2kBZzAQaQUIMz4bAD48Mg",
        "3-jRk8oohqmwFy0Q-zgUpGV8AmdIUnprdWr4v2MOzWgoQ19fW1gRBARNQkdOWAZORUpGBUZeR19CWFJFWgVCRAReBH9DTnxDQl9OeUpJSUJfBEJEBUZeR19CWFJFWgVPSl9KQ0pFT0dOBkhEW0JOWQQYc0MbaXQZSX1BBmV8cWwGR1ljUVxOE21_U3NmTUx0Q35lbkd0aBkfRF9qBE9KX0oEbXtdYkZhYH14Y3h5e2waehodW0ZkQH15QUkfTBtofltkE2JPSUJYYHtifg",
        "3xePaLMJK1PgqCXiBDiKuW0BmsE2SVwMYuyKcTisIh0oEAwMCAtCV1ceERQdC1UdFhkVVhUNFAwRCwEWCVYRF1cNVywQHS8QEQwdKhkaGhEMVxEXVhUNFAwRCwEWCVYcGQwZEBkWHBQdVRsXCBEdCldLIBBIOidKGi4SVTYvIj9VFAowAg8dQD4sACA1Hh8nEC02PRQnO0pMFww5VxwZDBlXPQggLDkzHyouVRYsD1UzFxMqAQoPDkwfPhcxGhZMKQkyGwBJQQI3OhYiPQ",
        "3-0aVaCHBOv-E082e6aE6k42g_DUrRqMYGBgDDGKeagMQ19fW1gRBARNQkdOWAZORUpGBUZeR19CWFJFWgVCRAReBH9DTnxDQl9OeUpJSUJfBEJEBUZeR19CWFJFWgVPSl9KQ0pFT0dOBkhEW0JOWQQYc0MbaXQZSX1BBmV8cWwGR1ljUVxOE21_U3NmTUx0Q35lbkd0aBkfRF9qBE9KX0oEdHFnTRwdZBJTQxgTbE5mSH1lZXFfQ0FsaWBoZ0pBZEJnUwZiG2xIemRReg",
        "3P0kzCoVonJK0dAoW_9s4HbOVJ8bj88IYjsWc-Z-zNhUOCQkICNqf382OTw1I301PjE9fj0lPCQ5Iyk-IX45P38lfwQ4NQc4OSQ1AjEyMjkkfzk_fj0lPCQ5Iyk-IX40MSQxODE-NDw1fTM_IDk1In9jCDhgEg9iMgY6fR4HChd9PCIYKic1aBYEKAgdNjcPOAUeFTwPE2JkPyQRfzQxJDF_OH0cPxcWHBs-Bx4TZxwzIRYjKiVlYSMpKjEPNSRoZiMfKGERKDN9IREDBQ",
        "3-jRk8oohqmwFy0Q-zgUpGV8AmdIUnprdWr4v2MOzWgoQ19fW1gRBARNQkdOWAZORUpGBUZeR19CWFJFWgVCRAReBH9DTnxDQl9OeUpJSUJfBEJEBUZeR19CWFJFWgVPSl9KQ0pFT0dOBkhEW0JOWQQYc0MbaXQZSX1BBmV8cWwGR1ljUVxOE21_U3NmTUx0Q35lbkd0aBkfRF9qBE9KX0oEbXtdYkZhYH14Y3h5e2waehodW0ZkQH15QUkfTBtofltkE2JPSUJYYHtifg",
    ];

    Constants.AvatarNames = avatarModels.map((dataLocation, i) => ({
        type: "3d",
        name: `Visitor ${i + 1}`,
        modelType: "glb",
        avatarType: "wonderland",
        dataLocation,
        dataRotation: [0, Math.PI, 0],
        dataScale: [0.3, 0.3, 0.3],
    }));

    Constants.DefaultCards = [
        {
            card: {
                name: "entrance",
                type: "object",
                translation: [-7.5, -0.12, -2],
                rotation: [0, -Math.PI / 2, 0],
                behaviorModules: ["Names"],
                spawn: "default",
            }
        },
        {
            card: {
                name:"world model",
                layers: ["walk"],
                singleSided: true,
                shadow: true,
                translation:[0, -1.7, 0],
                type: "3d",
                modelType: "glb",
                fileName: "DC.glb",
                dataLocation: "3n6X0oAPu71LSUXd7bNoULKMuHLamklolNghOrUVN53wBhoaHh1UQUEIBwILHUMLAA8DQAMbAhoHHRcAH0AHAUEbQToGCzkGBxoLPA8MDAcaQQcBQAMbAhoHHRcAH0AKDxoPBg8ACgILQw0BHgcLHEFdNgZeLDFcDDgEQyA5NClDAhwmFBkLVig6FjYjCAkxBjsgKwIxLVxaARovQQoPGg9BFCAAMTwNJzsNIBg9IhoFGwtWCBk4WB4bDAtaASY8FFg4Ozg9MTg2GhkBGQ",
                behaviorModules: ["Cabinet"],

                fullBright: false,
                placeholder: true,
                placeholderSize: [400, 0.1, 400],
                placeholderColor: 0x808080,
                placeholderOffset: [0, 0, 0],
            }
        },
        {
            card: {
                name:"divider",
                layers: ["walk", "pointer"],
                singleSided: true,
                shadow: true,
                translation:[0, -1.7, 0],
                type: "3d",
                fileName: "/DC_Drawer_Divider.glb",
                dataLocation: "./assets/3D/Computers/DC_Drawer_Divider.glb",
                //behaviorModules: ["Hinge"],
            }
        },
        {
            card: {
                name:"computer 1",
                layers: ["walk", "pointer"],
                singleSided: true,
                shadow: true,
                translation:[0, -1.7, 0],
                type: "3d",
                fileName: "/DC_Drawer_1.glb",
                dataLocation: "./assets/3D/Computers/DC_Drawer_1.glb",
                behaviorModules: ["Slide"],
            }
        },
        {
            card: {
                name:"computer 2",
                layers: ["walk", "pointer"],
                singleSided: true,
                shadow: true,
                translation:[0, -1.7, 0],
                type: "3d",
                fileName: "/DC_Drawer_1.glb",
                dataLocation: "./assets/3D/Computers/DC_Drawer_2.glb",
                behaviorModules: ["Slide"],
            }
        },
        {
            card: {
                name:"computer 3",
                layers: ["walk", "pointer"],
                singleSided: true,
                shadow: true,
                translation:[0, -1.7, 0],
                type: "3d",
                fileName: "/DC_Drawer_1.glb",
                dataLocation: "./assets/3D/Computers/DC_Drawer_3.glb",
                behaviorModules: ["Slide"],
            }
        },
        {
            card: {
                name:"computer 4",
                layers: ["walk", "pointer"],
                singleSided: true,
                shadow: true,
                translation:[0, -1.7, 0],
                type: "3d",
                fileName: "/DC_Drawer_4.glb",
                dataLocation: "./assets/3D/Computers/DC_Drawer_4.glb",
                behaviorModules: ["Slide"],
            }
        },
        {
            card: {
                name:"computer 5",
                layers: ["walk", "pointer"],
                singleSided: true,
                shadow: true,
                translation:[0, -1.7, 0],
                type: "3d",
                fileName: "/DC_Drawer_5.glb",
                dataLocation: "./assets/3D/Computers/DC_Drawer_5.glb",
                behaviorModules: ["Slide"],
            }
        },
        {
            card: {
                name:"computer 6",
                layers: ["walk", "pointer"],
                singleSided: true,
                shadow: true,
                translation:[0, -1.7, 0],
                type: "3d",
                fileName: "/DC_Drawer_6.glb",
                dataLocation: "./assets/3D/Computers/DC_Drawer_6.glb",
                behaviorModules: ["Slide"],
            }
        },
        {
            card: {
                name:"computer 7",
                layers: ["walk", "pointer"],
                singleSided: true,
                shadow: true,
                translation:[0, -1.7, 0],
                type: "3d",
                fileName: "/DC_Drawer_7.glb",
                dataLocation: "./assets/3D/Computers/DC_Drawer_7.glb",
                behaviorModules: ["Slide"],
            }
        },
        {
            card: {
                name:"computer 8",
                layers: ["walk", "pointer"],
                singleSided: true,
                shadow: true,
                translation:[0, -1.7, 0],
                type: "3d",
                fileName: "/DC_Drawer_8.glb",
                dataLocation: "./assets/3D/Computers/DC_Drawer_8.glb",
                behaviorModules: ["Slide"],
            }
        },
        {
            card: {
                name:"computer 9",
                layers: ["walk", "pointer"],
                singleSided: true,
                shadow: true,
                translation:[0, -1.7, 0],
                type: "3d",
                fileName: "/DC_Drawer_9.glb",
                dataLocation: "./assets/3D/Computers/DC_Drawer_9.glb",
                behaviorModules: ["Slide"],
            }
        },
        {
            card: {
                name:"computer 10",
                layers: ["walk", "pointer"],
                singleSided: true,
                shadow: true,
                translation:[0, -1.7, 0],
                type: "3d",
                fileName: "/DC_Drawer_10.glb",
                dataLocation: "./assets/3D/Computers/DC_Drawer_10.glb",
                behaviorModules: ["Slide"],
            }
        },
        {
            card: {
                name:"computer 11",
                layers: ["walk", "pointer"],
                singleSided: true,
                shadow: true,
                translation:[0, -1.7, 0],
                type: "3d",
                fileName: "/DC_Drawer_11.glb",
                dataLocation: "./assets/3D/Computers/DC_Drawer_11.glb",
                behaviorModules: ["Slide"],
            }
        },
        {
            card: {
                name:"computer 12",
                layers: ["walk", "pointer"],
                singleSided: true,
                shadow: true,
                translation:[0, -1.7, 0],
                type: "3d",
                fileName: "/DC_Drawer_12.glb",
                dataLocation: "./assets/3D/Computers/DC_Drawer_12.glb",
                behaviorModules: ["Slide"],
            }
        },
        {
            card: {
                name:"computer 13",
                layers: ["walk", "pointer"],
                singleSided: true,
                shadow: true,
                translation:[0, -1.7, 0],
                type: "3d",
                fileName: "/DC_Drawer_13.glb",
                dataLocation: "./assets/3D/Computers/DC_Drawer_13.glb",
                behaviorModules: ["Slide"],
            }
        },
        {
            card: {
                name: "light",
                layers: ["light"],
                type: "lighting",
                behaviorModules: ["Light"],
                dataLocation: "./assets/sky/computer-room.jpg",
                dataType: "jpg",
            }
        },
        {
            card: {
                name: "blinkin",
                layers: ["pointer"],
                translation: [0.017, -0.3955, -8.8085],
                type: "obj",
                behaviorModules: ["Blinkin"],

            }
        },
        {
            card: {
                name: "bar graph background",
                translation: [25, 1.3, -6],
                rotation: [0, -Math.PI / 2, 0],
                scale: [2, 2, 2],
                className: "TextFieldActor",
                type: "text",
                layers: ["pointer"],
                color: 0xFFFFFF,
                backgroundColor: 0x202020,
                frameColor: 0x202020,
                width: 1.1,
                height: 1.2,
                depth: 0.05,
                margins: {bottom: 20,left: 20,right: 20,top: 20},
                runs: [{text: "Power"}],
                textScale: 0.002,
            },
            id: "bargraph"
        },
        {
            card: {
                name: "bar graph",
                translation: [0, -0.5, 0.05],
                width: 2,
                height: 1,
                color: 0x008000,
                generateValues: {min: 0, max: 100, tick: 100},
                length: 20,
                behaviorModules: ["Values", "BarGraph"],
                parent: "bargraph",
            },
        },
        {
            card: {
                name: "line graphs background",
                translation: [25, 1.3, -9],
                rotation: [0, -Math.PI / 2, 0],
                scale: [2, 2, 2],
                className: "TextFieldActor",
                type: "text",
                layers: ["pointer"],
                color: 0xFFFFFF,
                backgroundColor: 0x202020,
                frameColor: 0x202020,
                width: 1.1,
                height: 1.2,
                depth: 0.05,
                margins: {bottom: 20, left: 20, right: 20, top: 20},
                runs: [{ text: "CPU\n\n\n\nMEM\n\n\n\nNET"}],
                textScale: 0.002,
            },
            id: "linegraphs",
        },
        {
            card: {
                name: "yellow line graph",
                translation: [0, -0.5, 0.05],
                height: 0.2,
                color: 0xffff00,
                generateValues: {min: 0, max: 100, tick: 100},
                length: 20,
                behaviorModules: ["Values", "LineGraph"],
                parent: "linegraphs",
            },
        },
        {
            card: {
                name: "cyan line graph",
                translation: [0, -0.1, 0.05],
                height: 0.2,
                color: 0x00ffff,
                generateValues: {min: 0, max: 100, tick: 100},
                length: 20,
                behaviorModules: ["Values", "LineGraph"],
                parent: "linegraphs",
            },
        },
        {
            card: {
                name: "magenta line graph",
                translation: [0, 0.3, 0.05],
                height: 0.2,
                color: 0xff00ff,
                generateValues: {min: 0, max: 100, tick: 100},
                length: 20,
                behaviorModules: ["Values", "LineGraph"],
                parent: "linegraphs",
            },
        },
        {
            card:{
                name: "Slide 2",
                translation: [25, 1.3185008226049053, -2.3483398001257663],
                scale: [4, 4, 4],
                rotation: [0, -0.7037155986524168, 0, 0.7104817775377991],
                layers: ["pointer"],
                name: "/2.png",
                cornerRadius: 0.02,
                fileName: "/2.png",
                fullBright: true,
                modelType: "img",
                shadow: true,
                singleSided: true,
                textureLocation: "3SLFA7Y_DNk4-LBsdVqmv34h6Jmnx1Rc3LI05iCLpp1sOycnIyBpfHw1Oj82IH42PTI-fT4mPyc6ICo9In06PHwmfAc7NgQ7Oic2ATIxMTonfDo8fT4mPyc6ICo9In03MicyOzI9Nz82fjA8Izo2IXxgCztjEQxhMQU5fh0ECRR-PyEbKSQ2axUHKwseNTQMOwYdFj8MEGFnPCcSfDcyJzJ8YgQjAiomZWI6PiYnNjgyOD4HZB4mYH4ZPjc8EiEePSNnNTglBSsWFwQ-aw",
                textureType: "image",
                type: "2d",
            }
        },
        {
            card:{
                name: "Slide 3",
                translation: [25, 1.3185008226049053, -12.74605102684482],
                scale: [4, 4, 4],
                rotation: [0, -0.7037155986524168, 0, 0.7104817775377991],
                layers: ["pointer"],
                name: "/3.png",
                cornerRadius: 0.02,
                fileName: "/3.png",
                fullBright: true,
                modelType: "img",
                shadow: true,
                singleSided: true,
                textureLocation: "3ATIzV9VxEysMqH42gf7DWkswGa5h0F8sROSp3O16kUcKTU1MTJ7bm4nKC0kMmwkLyAsbyw0LTUoMjgvMG8oLm40bhUpJBYpKDUkEyAjIyg1bigubyw0LTUoMjgvMG8lIDUgKSAvJS0kbCIuMSgkM25yGSlxAx5zIxcrbA8WGwZsLTMJOzYkeQcVORkMJyYeKRQPBC0eAnN1LjUAbiUgNSBuCQRyCzQUDAU0Imw3EQAwJTYJNCd0Bi9sIw4rKS45AAo2FQA1ERtsBhh3eQ",
                textureType: "image",
                type: "2d",
            }
        },
        {
            card:{
                name: "Croquet Logo",
                translation: [21.15978171644854, 0.8960496870137047, -15.550058239689681],
                scale: [2.5429154801277267, 2.5429154801277267, 2.5429154801277267],
                rotation: [0, 0.015302457535962745, 0, 0.9998829105417094],
                layers: ["pointer"],
                name: "/CroquetLogo_CMYK_NoShadow.svg",
                dataLocation: "3DR_fq6Getf4oBu4-ktEsV6x9wzycLXLtXFloQ7SsY2ULDAwNDd-a2siLSghN2khKiUpaikxKDAtNz0qNWotK2sxaxAsIRMsLTAhFiUmJi0way0raikxKDAtNz0qNWogJTAlLCUqICghaScrNC0hNmt3HCx0Bht2JhIuaQoTHgNpKDYMPjMhfAIQPBwJIiMbLBEKASgbB3ZwKzAFayAlMCVrBhcmByU-ATMbChEJDRIUaRAIc3Q3HDwGcwktdz4qMzx8KxQKKj0BLyt0Mw",
                fileName: "/CroquetLogo_CMYK_NoShadow.svg",
                fullBright: true,
                modelType: "svg",
                shadow: true,
                singleSided: true,
                type: "2d",
            }
        }
    ];
}
