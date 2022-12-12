class CabinetActor {
    setup(){
        this.dynamicCards = [];
        this.listen("createCard", this.doCreateCard);
    }

    doCreateCard(cardData){
        if(this.dynamicCards.indexOf(cardData.name) === -1){
            this.dynamicCards.push(cardData.name); // add it here
            //cardData.parent = this; // set the parent (?)
            //console.log(cardData);
            this.createCard(cardData);
        }
    }
}

class CabinetPawn {
    setup() {
        // the 3D object will likely not be loaded yet. 
        this.subscribe(this.id, "3dModelLoaded", "modelLoaded");
    }

    modelLoaded(){
        this.object = this.shape.children[0];
        console.log("Cabinet", this.object)
        this.object.traverse((obj) => {
            if(typeof obj.name === 'string'){
                if(obj.name.search("Red")>=0){
                } else if(obj.name.search("Green")>=0){
                    if(obj.name.search("Blue")>=0){
                        this.addLights(obj, [0x00ff00, 0x0000ff, 0x00ff00, 0x00ff00, 0x0000ff, 0x00ff00, 0x0000ff, 0x00ff00]);
                    }else{
                        this.addLights(obj, [0x00ff00]);
                    }
                } else if (obj.name.search("Blue")>=0){
                    this.addLights(obj, 0x0000ff);

                } else if(obj.name.search("rackhinge")>=0){
                    this.addDoor(obj);

                }
            }
        });
       // this.listen("updateWorld", this.update);
    }

    addLights( obj, colors ){
        //console.log(obj.name, colors);
    }

    addDoor(obj){
        console.log("addDoor", obj.name);
        let m4 = obj.matrixWorld.toArray();
        console.log(m4);
        if(this.actor.dynamicCards.indexOf(obj.name) === -1){
            this.createCard({
                name: obj.name,
                layers: ["walk", "pointer"],
                singleSided: true,
                shadow: true,
                translation: Microverse.m4_getTranslation(m4),
                rotation: Microverse.m4_getRotation(m4),
                type: "3d",
                modelType: "glb",
                fileName: "/DC_cabinet.glb",
                // dataLocation: "./assets/3D/DC_door.glb",
                dataLocation: "3Ks-4pO_rrlWHLNZiBsFaSvBylHoq2zapqg4Ug8bppXAIz8_OzhxZGQtIicuOGU-OGUoOSQ6Pi4_ZSIkZD5kMR4_PBsEMQ0-BBh6ACIsBhEifnhyMw0PDHN7eWQiJGUoOSQ6Pi4_ZSYiKDkkPS45OC5lJyQoKicvLj0vLi0qPic_ZA4gfjobBSkjJCoIeh4vOBQ6Ciomf3J4MzM-Mhx8BQYtPjJ5DhQYfAEUIQJkLyo_KmQYHwQYBHw6LTs-DXwfPX45HgIZACN5E2YhAhIlBjg8Big5Jzk_OikPPzwe",
                behaviorModules: ["Hinge"],
            });
        }
    }

    createCard(cardDef){
        this.say("createCard", cardDef);
    }

}

export default {
    modules: [
        {
            name: "Cabinet",
            actorBehaviors: [CabinetActor],
            pawnBehaviors: [CabinetPawn],
        }
    ]
}
    