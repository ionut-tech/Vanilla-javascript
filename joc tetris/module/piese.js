import { w, h, l} from './constanta.js';
import Patrat from './patrat.js';

class Piesa {
    patrate = [];
    constructor (ctx, x, culoare){
        this.ctx = ctx;
        this.x = x;
        this.culoare = culoare;
    }
    init(points){
        for(let i=0; i<=points.length; i++){
            let p = new Patrat(points[i].x, points[i].y,
                this.culoare);
                p.ctx = this.ctx;
                this.patrate.push(p);
        }
    }
    animeaza(){
        this.ctx.fillStyle = this.culoare;
        this.patrate.forEach(p=>{
        p.y+=l;
        });
    }
    aterizeaza(patrate){
        let res = false;
        this.patrate.forEach(p=>{
            let sub = patrate.filter(pl=>pl.x==p.x && pl.y==p.y+1)
            if(sub.length!=0){
                res = true;
            }
        });
        return this.patrate.somr(p=>p.y+1==h) || res;    }
}

class PiesaL extends Piesa {
    constructor(ctx, x, culoare){
        super(ctx, x, culoare);
        this.init([{x:x, y:0}, {x:x+1, y:0},
        { x: x + 2, y: 0 }, {x: x + 2, y: -1 }]);
    }
}
class PiesaL2 extends Piesa {
    constructor(ctx, x, culoare){
        super(ctx, x, culoare);
        this.init([{x: x, y: 0}, {x: x + 1, y : 0 },
        { x: x + 2, y: 0 }, {x: x, y: -1 }]);
    }
}
class PiesaT extends Piesa {
    constructor(ctx, x, culoare){
        super(ctx, x, culoare);
        this.init([{x: x, y: 0}, {x: x + 1, y: 0},
        { x: x + 2, y: 0 }, {x: x + 1, y: -1 }]);
    }
}
class PiesaI extends Piesa {
    constructor(ctx, x, culoare){
        super(ctx, x, culoare);
        this.init([{x:x, y:0}, {x: x +1, y: 0},
        { x: x + 2, y: 0 }, {x: x + 3, y: 0 }]);
    }
}
class PiesaS extends Piesa {
    constructor(ctx, x, culoare){
        super(ctx, x, culoare);
        this.init([{x: x, y:0}, {x: x + 1, y: 0},
        { x: x + 1, y: 1 }, {x: x + 1, y: 2 }]);
    }
}
class PiesaS2 extends Piesa {
    constructor(ctx, x, culoare){
        super(ctx, x, culoare);
        this.init([{x: x+1, y:0}, {x: x, y: 1},
        { x: x + 1, y: 1 }, {x: x, y: 2 }]);
    }
}
class PiesaP extends Piesa {
    constructor(ctx, x, culoare){
        super(ctx, x, culoare);
        this.init([{x: x, y:0}, {x: x, y: 1},
        { x: x + 1, y: 0 }, {x: x + 1, y: 1 }]);
    }
}
export default class FabricaDePiese {
    static culori = ['red', 'green', 'orange', 'steelblue', 'yellow', 'brown', 'purple'];
    static genereazaPiesa(ctx) {
        let rnd = this.#random(0,7);
        let culoare = FabricaDePiese.culori(rnd-1);
        let x = Math.ceil(w / 2);
        let p;
        switch(rnd){
            case 1:
            p = new PiesaP(ctx, x, culoare);
            break;
            case 2:
                p = new PiesaT(ctx, x, culoare);
                break;
                case 3:
                    p = new PiesaS(ctx, x, culoare);
                    break;
                    case 4:
                        p = new PiesaI(ctx, x, culoare);
                        break;
                        case 5:
                            p = new PiesaL(ctx, x, culoare);
                            break;
                            case 6:
                                p = new PiesaL2(ctx, x, culoare);
                                break;
                                case 7:
                                    p = new PiesaS2(ctx, x, culoare);
        }
        return p;
    }
    static #random(min, max){
        return Math.ceil(min + Math.random()*(max-min));
    }
}