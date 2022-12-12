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
        "blinkin.js",
        "urlLink.js",
        "hinge.js",
        "cabinet.js",
        "graphing.js",
    ];

    Constants.DefaultCards = [
        {
            card: {
                name: "entrance",
                type: "object",
                translation: [-7.5, -0.12, -2],
                rotation: [0, -Math.PI / 2, 0],
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
                fileName: "/DC.glb",
                dataLocation: "./assets/3D/DC.glb",
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
                name:"cabinet door",
                layers: ["walk", "pointer"],
                singleSided: false,
                shadow: true,
                translation:[0, -1.7, 0],
                type: "3d",
                fileName: "/DC_cabinet.glb",
                dataLocation: "./assets/3D/DC_cabinet.glb",
                behaviorModules: ["Hinge"],
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
                translation: [17.8, -0.7, -2],
                rotation: [0, -Math.PI / 2, 0],
                width: 2,
                height: 1,
                color: 0x00ff00,
                generateValues: {min: 0, max: 100, tick: 100},
                length: 20,
                behaviorModules: ["Values", "BarGraph"],
            }
        },
    ];
}
