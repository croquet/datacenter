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
    ];

    const avatarModels = [
        "3kDNEN2jKhiPYcYAfItpXCcaahDmYM54K-kP6mKb_x8AAx8fGxhRREQNAgcOGEUeGEUIGQQaHg4fRQIERB5ELA89CRIHIhgqADoIKTMPWCwTCh0SHD4gPDIyWUQCBEUIGQQaHg4fRQYCCBkEHQ4ZGA5EEgMHOzsPIC46GCoaMxsfOjwhBCIuWxM8XzwZHjpfND8JIw4cBQ8oXi8lOkQPCh8KRD0aDSQSEjkvICQ5BQM6Xi1GHhk9OglGOAcDBw0CHAEYD1wkKR0PITNGDBg",
        "3qPM9OnJ8B8G-bx-DZtT_uk55iJ-4seqH4D_N7XJcmxMGQUFAQJLXl4XGB0UAl8EAl8SAx4ABBQFXxgeXgReNhUnEwgdOAIwGiASMykVQjYJEAcIBiQ6JigoQ14YHl8SAx4ABBQFXxwYEgMeBxQDAhReCBkdISEVOjQgAjAAKQEFICY7Hjg0QQkmRSYDBCBFLiUTORQGHxUyRDU_IF4VEAUQXjwFBSNHOj4rAgIbNz8COSEnFTUFCD4gJD4gKTIkRQZEGi42CRQAKDk8MAY",
        "3pOqrArMCIRUilNQ5kh5jDQpDI9rMSWBMf3S8zPNUX4gGAQEAANKX18WGRwVA14FA14TAh8BBRUEXhkfXwVfNxQmEgkcOQMxGyETMigUQzcIEQYJByU7JykpQl8ZH14TAh8BBRUEXh0ZEwIfBhUCAxVfCRgcICAUOzUhAzEBKAAEISc6Hzk1QAgnRCcCBSFELyQSOBUHHhQzRTQ-IV8UEQQRXxEIHEcpEkc-IDIKSDRIFgo7RwdJNUM_Ej4-FyhGChwfPD1DM0QIMSAcNjE",
        "3YrnwoVTORoxhAZDdVvJXzOO62FQKMuP7C2JaVRcRhXMMS0tKSpjdnY_MDU8KncsKnc6KzYoLDwtdzA2dix2Hj0POyA1ECoYMgg6GwE9ah4hOC8gLgwSDgAAa3YwNnc6KzYoLDwtdzQwOis2LzwrKjx2IDE1CQk9EhwIKhgoASktCA4TNhAcaSEObQ4rLAhtBg07ETwuNz0abB0XCHY9OC04dhg4FmA1Dho2KBNhGGh0YSg1ETcqDhoDNy07OGgJODMbHD4JHTNoMhFoPDI",
        "3B45okYnR2Z096wkAU7ACqQg7iGeh5lcva8FNB-RZ-sgKjY2MjF4bW0kKy4nMWw3MWwhMC0zNyc2bCstbTdtBSYUIDsuCzEDKRMhABomcQU6IzQ7NRcJFRsbcG0rLWwhMC0zNyc2bC8rITAtNCcwMSdtOyouEhImCQcTMQMzGjI2ExUILQsHcjoVdhUwNxN2HRYgCic1LCYBdwYME20mIzYjbRc1BHcpdQcrIDsWBDs6ehY2Eht2Fxd6cBAxKCUzNnMQHRgUCggKcAUgHQ8",
        "3qPM9OnJ8B8G-bx-DZtT_uk55iJ-4seqH4D_N7XJcmxMGQUFAQJLXl4XGB0UAl8EAl8SAx4ABBQFXxgeXgReNhUnEwgdOAIwGiASMykVQjYJEAcIBiQ6JigoQ14YHl8SAx4ABBQFXxwYEgMeBxQDAhReCBkdISEVOjQgAjAAKQEFICY7Hjg0QQkmRSYDBCBFLiUTORQGHxUyRDU_IF4VEAUQXjwFBSNHOj4rAgIbNz8COSEnFTUFCD4gJD4gKTIkRQZEGi42CRQAKDk8MAY",
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
                fileName: "/DC.glb",
                //dataLocation: "./assets/3D/DC.glb",
                dataLocation: "3QZ4xgBvwYfOm07BCL-Gmx0mr8u5kXh72jZGbKXdAfbUOSUlISJrfn43OD00In8kIn8yIz4gJDQlfzg-fiR-KwQlJgEeKxckHgJgGjg2HAs4ZGJoKRcVFmlhY344Pn8yIz4gJDQlfzw4MiM-JzQjIjR_PT4yMD01NCc1NDcwJD0lfhYhAyMnaSA4CGMiDhVlHSMbZGgAZ2g5MiM4ARkXInw-ZhMWCTdlPyIFHgR-NTAlMH4jKTUmExAVBRcDZBsdYR5kOxo9Nws0PyIcEyIJFQMmZz81NgAiNhATAXwc",
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
                //behaviorModules: ["Hinge"],
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
                //behaviorModules: ["Hinge"],
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
                //behaviorModules: ["Hinge"],
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
                //behaviorModules: ["Hinge"],
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
                //behaviorModules: ["Hinge"],
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
                //behaviorModules: ["Hinge"],
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
                //behaviorModules: ["Hinge"],
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
                //behaviorModules: ["Hinge"],
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
                //behaviorModules: ["Hinge"],
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
                //behaviorModules: ["Hinge"],
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
                //behaviorModules: ["Hinge"],
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
                //behaviorModules: ["Hinge"],
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
                //behaviorModules: ["Hinge"],
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
                name: "bar graph",
                translation: [25, 0.5, -6],
                rotation: [0, -Math.PI / 2, 0],
                scale: [2, 2, 2],
                width: 2,
                height: 1,
                color: 0x00ff00,
                generateValues: {min: 0, max: 100, tick: 100},
                length: 20,
                behaviorModules: ["Values", "BarGraph"],
            }
        },
        {
            card: {
                name: "line graph",
                translation: [25, 0.5, -10],
                rotation: [0, -Math.PI / 2, 0],
                scale: [2, 2, 2],
                height: 0.2,
                color: 0xffff00,
                generateValues: {min: 0, max: 100, tick: 100},
                length: 20,
                behaviorModules: ["Values", "LineGraph"],
            }
        },
        {
            card: {
                name: "line graph",
                translation: [25, 1, -10],
                rotation: [0, -Math.PI / 2, 0],
                scale: [2, 2, 2],
                height: 0.2,
                color: 0x00ffff,
                generateValues: {min: 0, max: 100, tick: 100},
                length: 20,
                behaviorModules: ["Values", "LineGraph"],
            }
        },
        {
            card: {
                name: "line graph",
                translation: [25, 1.5, -10],
                rotation: [0, -Math.PI / 2, 0],
                scale: [2, 2, 2],
                height: 0.2,
                color: 0xff00ff,
                generateValues: {min: 0, max: 100, tick: 100},
                length: 20,
                behaviorModules: ["Values", "LineGraph"],
            }
        },
    ];
}
