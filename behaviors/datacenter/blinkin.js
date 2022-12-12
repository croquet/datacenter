// blinken.js
// Croquet Microverse
// Blinking Lights

class BlinkinActor {
    setup(){

        // set in card definition
        this.rows = 8;
        this.rowColors = [0x00ff00, 0x0000ff, 0x00ff00, 0x0000ff, 0x00ff00, 0x00ff00, 0x0000ff, 0x00ff00];
        this.columns = 4;
        this.dx = 0.1;
        this.dy = 0.12;
        this.speed = 5; // blink speed is speed*Math.random()+speed; 
        this.lightSize = 0.1;

        // uses card definition
        this.red = [];
        this.green = [];
        this.blue = [];
        for(let i=0; i<this.rows; i++){
            this.red.push(this.rowColors[i] >> 16 & 0x00ff);
            this.green.push(this.rowColors[i] >> 8 & 0x00ff);
            this.blue.push(this.rowColors[i] & 0x00ff);
        }
        this.centerX = (this.columns-1)*this.dx/2;
        this.centerY = (this.rows-1)*this.dy/2;
        this.totalLights = this.rows*this.columns;
        this.blinkSpeed = [];

        for(let i = 0; i< this.totalLights; i++)
            this.blinkSpeed.push(Math.random() * this.speed + this.speed);
        this.future(50).blink();
    }

    blink(){
        this.say("updateBlink");
        this.future(50).blink();
    }
}

class BlinkinPawn {
    setup() {
        if(this.instanceLights)this.instanceLights.dispose();
        this.constructLights();
        this.listen("updateBlink", this.setBlink);
    }

    constructLights(){
        const THREE = Microverse.THREE;
        let blink = this.loadTextureAsset("./assets/images/blinkin2.jpeg");
        const geometry = new THREE.PlaneGeometry( this.actor.lightSize, this.actor.lightSize );
        this.material = new THREE.MeshBasicMaterial( {map: blink, transparent: true, blending: THREE.AdditiveBlending} );
        this.instanceLights = new THREE.InstancedMesh(geometry, this.material, this.actor.totalLights);
        let index = 0;
        let dx = 0.15; // this.actor.dx;
        let dy = 0.19; // this.actor.dy;
        let m4 = new THREE.Matrix4();
        for(let i= 0; i< this.actor.columns; i++)
            for(let j=0; j<this.actor.rows; j++){
                let x = i*dx - this.actor.centerX;
                let y = j*dy - this.actor.centerY;
                m4.setPosition(x,y,0);
                this.instanceLights.setMatrixAt(index, m4);
                index++;
            }
        this.shape.add(this.instanceLights);
        this.instanceLights.instanceMatrix.needsUpdate = true;
    }

    loadTextureAsset(URL){
        let assetManager = this.service("AssetManager").assetManager;
        return assetManager.fillCacheIfAbsent(URL, () => {
            let tex = new Microverse.THREE.TextureLoader().load(URL);
            tex.wrapS = tex.wrapT = Microverse.THREE.RepeatWrapping;
            tex.repeat.set(1,1);
            return tex;
        }, this.id);
    }

    setBlink(){
        let speed = this.actor.blinkSpeed;
        let r = this.actor.red;
        let g = this.actor.green;
        let b = this.actor.blue;
        for(let i = 0; i<this.actor.columns; i++){
            for(let j = 0; j<this.actor.rows; j++){
                let index = i*this.actor.rows+j;
                let brightness = 0.6 + 0.4 * Math.sin( this.now() * speed[index]);
                this.instanceLights.setColorAt(index, new THREE.Color(        
                    Math.floor(r[j] * brightness) * 0x10000 +
                    Math.floor(g[j] * brightness) * 0x100 +
                    Math.floor(b[j] * brightness)));
            }
        }
        this.instanceLights.instanceColor.needsUpdate = true;

    }
}

export default {
    modules: [
        {
            name: "Blinkin",
            actorBehaviors: [BlinkinActor],
            pawnBehaviors: [BlinkinPawn],
        }
    ]
}