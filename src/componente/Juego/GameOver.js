import Phaser from "phaser";
import {BotonReset} from "./BotonReset.js";

class Gameover extends Phaser.Scene{
    constructor(){
        super({key:"GameOver"});
        this.reset = new BotonReset(this);
    }
    preload(){
        this.load.image('Perder' ,"imagen/game over.jpg");
        this.reset.precargar();
    }
    create(){
        this.imagenWin = this.add.image(400,300,'Perder');
        this.reset.crear();
    }
}
export default Gameover;