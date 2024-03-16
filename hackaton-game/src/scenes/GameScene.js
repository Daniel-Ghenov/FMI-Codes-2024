class GameScene extends Phaser.Scene {
    constructor() {
        super("GameScene");
    }

    preload() {
        this.load.image("bg", "assets/bg.png");
        this.load.image("character", "assets/player1.png")
    }

    create() {
        let bg = this.add.image(0, 0, "bg").setOrigin(0, 0);
        bg.setDepth(-2);

        this.character = this.physics.add.sprite(100, 200, "character");
        this.character.setScale(0.8);
        this.floor = this.physics.add.staticSprite(300, 750, 'floor');

        this.floor.displayWidth = this.sys.game.config.width;
        this.floor.refreshBody(); 
        this.physics.add.collider(this.character, this.floor);
    }   

    update() {

    }


}

export default GameScene;
