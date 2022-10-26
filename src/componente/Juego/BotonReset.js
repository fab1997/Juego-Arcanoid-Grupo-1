 export class BotonReset{
    constructor(escena){
        this.escenaR = escena;
    }

    precargar(){
        this.escenaR.load.imagen("boton","imagen/BotonReinicio.jpg");

    }
    crear(){
        this.botoninicio = this.escenaR.add.imagen(400,500,'boton').setInteractive();

        this.botoninicio.on('pointerdown', () => {
            this.escenaR.scene.start('Inicio')

        });

    }


}
