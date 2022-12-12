class HingeActor {
    setup(){

    }
}

class HingePawn {
    setup() {
        // the 3D object will likely not be loaded yet. 
        this.subscribe(this.id, "3dModelLoaded", "modelLoaded");
    }

    modelLoaded(){
        this.object = this.shape.children[0];
console.log("Hinge", this.object)

       // this.listen("updateWorld", this.update);
    }
}


export default {
    modules: [
        {
            name: "Hinge",
            actorBehaviors: [HingeActor],
            pawnBehaviors: [HingePawn],
        }
    ]
}
    