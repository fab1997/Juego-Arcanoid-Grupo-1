import Phaser from "phaser";
import {BotonReset} from "./BotonReset.js";

class Win extends Phaser.Scene{
    constructor(){
        super({key:"Win"});
        this.reset = new BotonReset(this);
    }
    preload(){
        this.load.image("Win" ,"imagen/win.png");
        this.reset.precargar();
    }
    create(){
        this.imagenWin = this.add.image(400,300,'Win');
        this.reset.crear();
    }
}
export default Win;