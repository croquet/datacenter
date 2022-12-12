// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io


class Values {
    setup() {
        if (!this._cardData.values) this._cardData.values = [];
        if (!this._cardData.length) this._cardData.length = 20;
        if (!this._cardData.height) this._cardData.height = 0.5;

        if (this._cardData.generateValues) {
            this.generateValues();
        }
    }

    teardown() {
        this.ticker = 0;
        console.log("teardown ticker:", this.ticker);
    }

    length() {
        return this._cardData.length;
    }

    height() {
        return this._cardData.height;
    }

    values() {
        return this._cardData.values;
    }

    addValue(value, notSay) {
        let values = this._cardData.values;
        values.push(value);
        if (values.length > this.length()) {
            values.shift();
        }

        if (!notSay) {
            this.say("updateGraph");
        }
    }

    addValues(values) {
        values.forEach((value) => this.addValue(value, true));
        this.say("updateGraph");
    }

    generateValues(ticker = 0) {
        if (ticker === 0) {
            this.ticker = (this.ticker || 0) + 1; // new ticker
            console.log("new ticker:", this.ticker);
        }
        else if (ticker !== this.ticker) {
            console.log("stopping old ticker:", ticker, "new ticker:", this.ticker);
            return; // old ticker
        }
        let {min, max, tick} = this._cardData.generateValues;
        let value = Math.random() * (max - min) + min;
        this.addValue(value);
        if (tick > 0) this.future(tick).generateValues(this.ticker);
    }
}

class BarGraphPawn {
    setup() {
        this.constructBars();
        this.listen("updateGraph", "updateGraph");
        this.updateGraph();
    }

    constructBars() {
        [...this.shape.children].forEach((c) => {
            c.material.dispose();
            this.shape.remove(c);
        });
        this.bars = [];
        let len = this.actor._cardData.length;
        let size = 1 / len;
        let THREE = Microverse.THREE;
        let color = this.actor._cardData.color;
        this.base = new THREE.Mesh(
            new THREE.BoxGeometry(1, size / 4, size, 2, 4, 2 ),
            new THREE.MeshStandardMaterial());
        this.base.position.set(0, -size / 4, 0);
        this.shape.add(this.base);
        this.bar = new THREE.Mesh(
            new THREE.BoxGeometry(size * 1.0, 1, size * 1.0, 2, 2, 2 ),
            new THREE.MeshStandardMaterial({color: color, emissive: color}));
        for(let i = 0; i < len; i++) {
            let bar = this.bar.clone();
            bar.material = bar.material.clone();
            bar.position.set((0.5 + i - len / 2) * size, 0,0);
            this.shape.add(bar);
            this.bars.push(bar);
        }
    }

    updateGraph(){
        let values = this.actor._cardData.values;
        let height = this.actor._cardData.height;
        let mn = Math.min(...values);
        let mx = Math.max(...values);
        let range = mx - mn;
        mn = Math.max(mn - range / 10,0);
        range = mx - mn; //update this with the additional bit


        this.bars.forEach((b, i) => {
            let d = height * (values[i] - mn) / range;
            b.scale.set(1,d,1);
            b.position.y = d / 2;
        });
    }
}

export default {
    modules: [
        {
            name: "Values",
            actorBehaviors: [Values],
        },
        {
            name: "BarGraph",
            pawnBehaviors: [BarGraphPawn],
        },
    ]
}

/* globals Microverse */
