import { l } from './constanta.js'
export default class Patrat {
    #x; #y;
    get x() {
        return this.#x;
    }
    set x(value) {
        this.#x = value;
        this.deseneaza(); 
    }
    get y() {
        return this.y;
    }
    set y(value) {
        this.#y=value;
        this.deseneaza();
    }
    constructor(x, y, culoare){
        this.#x = x;
        this.#y = y;
        this.culoare = culoare;
    }
    deseneaza(){
        this.ctx.fillStyle = this.culoare;
        this.ctx.fillRect(this.#x*l, this.#y*l, l, l);
        this.ctx.strokeRect(this.#x*l, this.#y*l, l, l);
    }
}