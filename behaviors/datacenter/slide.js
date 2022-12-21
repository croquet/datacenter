class SlideActor {
    setup(){
        this.isSliding = false;
        this.isOpen = false;
        this.doorDelta = 0;
        this.addEventListener("pointerDown", "toggle");
    }

    toggle(){
        if (!this.isSliding) {
            this.isSliding = true;
            this.doSliding(this.isOpen ? 0.07 : -0.07, 10);
        }
    }

    doSliding(delta, count){
        this.translateBy(delta);
        if (count > 0) this.future(50).doSliding(delta, count - 1);
        else {
            this.isSliding = false;
            this.isOpen = !this.isOpen;
        }
    }
}

class SlidePawn {
    setup() {
        // the 3D object will likely not be loaded yet.
        this.subscribe(this.id, "3dModelLoaded", "modelLoaded");
    }

    modelLoaded(){
        /*
        this.object = this.shape.children[0];
        this.object.traverse((obj) => {
            if(obj.material && obj.material.transparent){ obj.renderOrder = 1001;}
        });
        */
        //}
//console.log("Hinge", this.object)

       // this.listen("updateWorld", this.update);
    }
}


export default {
    modules: [
        {
            name: "Slide",
            actorBehaviors: [SlideActor],
            pawnBehaviors: [SlidePawn],
        }
    ]
}
