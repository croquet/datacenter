class HingeActor {
    setup(){
        if (!("doorYaw" in this)) this.doorYaw = Microverse.q_yaw(this.rotation);
        this.doorState = 0;
        this.doorDelta = 0;
        this.addEventListener("pointerDown", "toggle");
    }

    toggle(){
        if (this.doorDelta !== 0)  {
            this.doorDelta *= -1;
        } else {
            const speed = 0.1;
            this.doorDelta = this.doorState === 0 ? speed : -speed;
            this.tick();
        }
    }

    tick() {
        if (this.doorDelta !== 0){
            this.doorState += this.doorDelta;
            if (this.doorState < 0) { this.doorState = 0; this.doorDelta = 0; }
            if (this.doorState > 1) { this.doorState = 1; this.doorDelta = 0; }

            const rotation = this.doorYaw - this.doorState * Math.PI / 2;
            const q = Microverse.q_euler(0, rotation, 0);
            this.rotateTo(q);

            if (this.doorDelta !== 0) this.future(100).tick();
        }
    }
}


export default {
    modules: [
        {
            name: "Hinge",
            actorBehaviors: [HingeActor],
        }
    ]
}
