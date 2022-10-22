import Phaser from "phaser";

class Escene extends Phaser.Scene{
   
    plataforms = null;
    cursors = null;

    preload(){
        this.load.image("fondo", "imagen/fondo.jpg");
        this.load.image("base", "imagen/plataforma.png");
    }
    create(){
        //creando el fondo
        this.add.image(400,300,"fondo");
        // se crea la platafomra
        this.plataforms = this.physics.add.image(400,500,"base");
        // se cancela la gravedad
        this.plataforms.body.allowGravity = false;
        // se agrega un objeto para mover la plataforma
        this.cursors   = this.input.keyboard.createCursorKeys();
    }

    update(){
        //Movimientos laterales de la plataforma
        if(this.cursors.left.isDown){
            this.plataforms.setVelocityX (-100)
        }
        else if(this.cursors.right.isDown) {
            this.plataforms.setVelocityX (100)
        }
        else{
            this.plataforms.setVelocityX(0);

        }
    }
       
    }



export default Escene;