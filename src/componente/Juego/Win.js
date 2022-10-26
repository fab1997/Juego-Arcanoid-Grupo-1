import Phaser from "phaser";
import {BotonReset} from "./BotonReset.js";

class Win extends Phaser.Scene{
    constructor(){
        super({key:"Win"});
        this.reset = new BotonReset(this);
    }
    preload(){
        this.load.image("Win" ,"imagen/win.webp");
      //  this.reset.precargar();
    }
    create(){
        this.add.image(400, 300, "fondo");
      //  this.BotonReset.crear();
        this.imagenWin = this.add.image(400,300,'Win');
    }
}
export default Win;