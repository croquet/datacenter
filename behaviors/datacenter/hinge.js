class HingeActor {
    setup(){
        this.doorState = 0;
        this.doorDelta = 0;
        this.addEventListener("pointerDown", "toggle");
    }

    toggle(){

        console.log("Toggle Door")
    }
}

class HingePawn {
    setup() {
        // the 3D object will likely not be loaded yet. 
        this.subscribe(this.id, "3dModelLoaded", "modelLoaded");
    }

    modelLoaded(){
        this.object = this.shape.children[0];
        this.object.traverse((obj) => {
            if(obj.material && obj.material.transparent){ obj.renderOrder = 1001;}
        });
        //}
//console.log("Hinge", this.object)

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
    