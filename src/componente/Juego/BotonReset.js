export class BotonReset{
    constructor(escene){
        this.escenaRelacionada = escene;
    }

    precargar(){
        this.escenaRelacionada.load.imagen("boton","imagen/BotonReinicio.jpg");

    }
    crear(){
        this.botoninicio = this.escenaRelacionada.add.imagen(400,500,'boton').setInteractive();

        this.botoninicio.on('pointerdown', () => {
            this.escenaRelacionada.scene.start('Inicio')

        });

    }


}