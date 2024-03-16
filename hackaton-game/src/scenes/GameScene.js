class GameScene extends Phaser.Scene {
    constructor() {
        super("GameScene");
    }
    
    preload() {
        this.load.image("bg", "assets/bg.png", { frameWidth: 800, frameHeight: 600 });
        this.load.spritesheet('character', 'assets/bulb.png', {
            frameWidth: 45,
            frameHeight: 48,
        });
    }
    create() {
        this.bg = this.add.image(0, 0, "bg").setOrigin(0, 0);
        this.bg.displayWidth = this.sys.game.config.width;
        this.bg.displayHeight = this.sys.game.config.height;
        // this.bg.setDepth(-2);

        this.character = this.physics.add.sprite(100, 200, "character");
        this.character.setScale(1.2);

        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('character', { start: 0, end: 4 }),
            frameRate: 10,
            repeat: -1
          });

        this.floor = this.physics.add.staticSprite(300, 750, 'floor');

        this.keys = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            right: Phaser.Input.Keyboard.KeyCodes.D,
          });

        this.floor.displayWidth = this.sys.game.config.width;
        this.floor.refreshBody(); 
        this.physics.add.collider(this.character, this.floor);
        this.character.setCollideWorldBounds(true);
    }   

    update() {
        const speed = 160;
  
        if (this.keys.left.isDown) {
          this.character.setVelocityX(-speed);
          this.character.play('walk', true);
        } else if (this.keys.right.isDown) {
          this.character.setVelocityX(speed);
          this.character.play('walk', true);
        } else {
          this.character.setVelocityX(0);
          this.character.play('idle', true);
        }
        
        if (this.keys.up.isDown && this.character.body.touching.down) {
          this.character.setVelocityY(-330);
        }

        this.bg.tilePositionX -= 0.5;
    }
}

export default GameScene;
