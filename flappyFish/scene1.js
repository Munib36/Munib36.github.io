class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame")
    }

    preload(){
        this.load.image("background", "./assets/background.png")

        this.load.image("ship", "./assets/ship.png")
        this.load.image("ship2", "./assets/ship2.png")
        this.load.image("ship3", "./assets/ship3.png")
    }

    create(){
        this.add.text(20, 20, "loading game...")
        this.scene.start("playGame")
    }
}