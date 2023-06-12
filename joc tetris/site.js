import Patrat from './module/patrat.js';
import {w, h, l} from './module/constanta.js';
import FabricaDePiese from './module/piese.js'; 
let ctx;
let timer;
let y = 0;

document.addEventListener('DOMContentLoaded', onLoad);

function onLoad(){
    let tabla = document.getElementById('game');
    tabla.width = w * l;
    tabla.height = h * l;
    ctx = tabla.getContext('2d');
    p = FabricaDePiese.genereazaPiesa(ctx);
    timer = setInterval(loop, 300);
}
let p;
let patrate = []
function loop() {
    ctx.clearRect(0, 0, w * l, h * l);
    if (p.aterizeaza(patrate)) {
        patrate.push(...p.patrate);
        p = FabricaDePiese.genereazaPiesa(ctx);
    }
    p.animeaza();
    deseneazaPatrate(patrate);
}
function deseneaza(){
    patrate.forEach(p=>p.deseneaza());
}