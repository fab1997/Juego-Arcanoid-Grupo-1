import Phaser from "phaser";

class Escene extends Phaser.Scene {
    constructor() {
        super({ key: 'Inicio' });
    }

    //Init(){
    // this.puntos = 0;   
    //}

    //Se emplean variables globales
    plataforms = null;
    cursors = null;
    puntaje = 0;
    puntos = 10;
    sonido1 = null;

    preload() {
        this.load.image("fondo", "imagen/fondo.jpg");
        this.load.image("base", "imagen/paddle1.png");
        this.load.image("bloqueAzul", "imagen/blue1.png");
        this.load.image("bloqueRojo", "imagen/red1.png");
        this.load.image("bloqueAmarillo", "imagen/yellow1.png");
        this.load.image("ball", "imagen/ball1.png");
        this.load.audio('nivel1', 'sonido/level1.mp3');

    }
    create() {
        //creando el fondo
        this.add.image(400, 300, "fondo");

        this.sonido1 = this.sound.add('nivel1');
        const soundConfig = {
            loop: true
        }

        this.sonido1.play(soundConfig)

        this.puntajeEnTexto = this.add.text(10, 10, 'Puntos: 0', {
            fontSize: '20px',
            fill: 'red',
            fontFamily: 'arial'
        });



        //se crea los bloques
        this.bloques = this.physics.add.staticGroup({
            key: ['bloqueAzul', 'bloqueRojo', 'bloqueAmarillo'],
            frameQuantity: 10,
            gridAlign: { width: 10, height: 10, cellWidth: 64, cellHeight: 32, x: 112, y: 50 }
        });

        // se crea la pelota con sus fisicas
        this.ball = this.physics.add.image(400, 480, "ball").setCollideWorldBounds(true).setBounce(1);
        this.ball.setData('apagada', true);

        const keyCodes = Phaser.Input.Keyboard.KeyCodes;
        this.teclaA = this.input.keyboard.addKey(keyCodes.A);

        // se crea la platafomra
        this.plataforms = this.physics.add.image(400, 500, "base").setImmovable();
        // se cancela la gravedad
        this.plataforms.body.allowGravity = false;
        this.plataforms.setCollideWorldBounds(true);
        // se agrega un objeto para mover la plataforma
        this.cursors = this.input.keyboard.createCursorKeys();




        this.physics.add.collider(this.ball, this.plataforms, this.contarColision, null, this);
        this.physics.add.collider(this.ball, this.bloques, this.colisionPelotaBloque, null, this);

        this.physics.world.setBoundsCollision(true, true, true, false);


    }

    //Método que detecta colisión entre la pelota y los bloques
    colisionPelotaBloque(ball, bloques) {
        bloques.disableBody(true, true);
        this.aumentarPuntaje();
        if(this.bloques.countActive()===0){
            this.felicitar();
        }
       }
    felicitar(){
       this.sonido1.stop();
       this.puntaje=0;
       this.scene.start("Win");     
   }

    //Método que permite aumentar el puntaje
    aumentarPuntaje() {
        this.puntaje = this.puntaje + this.puntos;
        this.puntajeEnTexto.setText('Puntos: ' + this.puntaje);
        console.log(this.puntaje);
    }

    //Método que detecta colisión entre la pelota y la plataforma
    contarColision(ball, plataforms) {
        let lugarDeImpacto = ball.x - plataforms.x
        if (lugarDeImpacto > 0) {
            ball.setVelocityX(2 * lugarDeImpacto);
        } else if (lugarDeImpacto < 0) {
            ball.setVelocityX(2 * lugarDeImpacto);
        } else {
            ball.setVelocityX(Phaser.Math.Between(-10, 10))
        }
    }
    update() {
        //Movimientos laterales de la plataforma
        if (this.cursors.left.isDown) {
            this.plataforms.setVelocityX(-300);

        }
        else if (this.cursors.right.isDown) {
            this.plataforms.setVelocityX(300);

        }
        else {
            this.plataforms.setVelocityX(0);

        }
        if (this.ball.getData('apagada')) {
            this.ball.x = this.plataforms.x;

        }
        if (this.cursors.space.isDown && this.ball.getData('apagada', true)) {
            this.ball.setVelocity(50, -450);
            this.ball.setData('apagada', false);
        }
        if (this.ball.y > 600) {
            this.sonido1.stop();
            this.puntaje=0;
            this.mostrarGameover();
        }
    }

    mostrarGameover() {
        this.scene.start('GameOver')
    }
}

export default Escene;