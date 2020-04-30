"use strict"

class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }

    rgb() {
        const {
            r,
            g,
            b
        } = this;
        return `rgb(${r}, ${g}, ${b})`
    }
}

const red = new Color(255, 0, 0, red);