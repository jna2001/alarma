
import { alarm, digitalClock } from "./dom/reloj.js";

const d=document;




d.addEventListener("DOMContentLoaded",(e)=>{
    //reloj y alarma
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("assets/alarma.mp3","#activar-alarma","#desactivar-alarma");

});