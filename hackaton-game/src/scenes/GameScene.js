class GameScene extends Phaser.Scene {
    constructor() {
        super("GameScene");
    }

    preload() {
        this.load.image("bg", "assets/bg.png");
        this.load.spritesheet('bulb', 'assets/bulb.png', {
            frameWidth: 45,
            frameHeight: 48,
        });
        this.load.spritesheet('battery', 'assets/battery.png', {
            frameWidth: 45,
            frameHeight: 60,
        });
    }

    create() {
        let bg = this.add.image(0, 0, "bg").setOrigin(0, 0);
        bg.setDepth(-2);

        this.floor = this.physics.add.staticSprite(300, 750, 'floor');

        this.floor.displayWidth = this.sys.game.config.width;
        this.floor.refreshBody(); 

        this.createBulb();
        this.createBattery();

        this.keys = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            right: Phaser.Input.Keyboard.KeyCodes.D,

            p2up: Phaser.Input.Keyboard.KeyCodes.UP,
            p2left: Phaser.Input.Keyboard.KeyCodes.LEFT,
            p2down: Phaser.Input.Keyboard.KeyCodes.DOWN,
            p2right: Phaser.Input.Keyboard.KeyCodes.RIGHT,
        });

    }   

    createBulb() {
        this.bulb = this.physics.add.sprite(100, 200, 'bulb');
        this.bulb.setScale(1.2);

        this.anims.create({
            key: 'bulbWalk',
            frames: this.anims.generateFrameNumbers('bulb', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.physics.add.collider(this.bulb, this.floor);
        this.bulb.setCollideWorldBounds(true);
    }

    createBattery() {

        this.battery = this.physics.add.sprite(100, 200, 'battery');
        this.battery.setScale(1.2);

        this.anims.create({
            key: 'batteryWalk',
            frames: this.anims.generateFrameNumbers('battery', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.physics.add.collider(this.battery, this.floor)
        this.battery.setCollideWorldBounds(true);
    }

    update() {
        this.updateBulb();
        this.updateBattery();
    }

    updateBulb() {
        const speed = 160;
  
        if (this.keys.left.isDown) {
            this.bulb.setVelocityX(-speed);
            this.bulb.play('bulbWalk', true);
        } else if (this.keys.right.isDown) {
            this.bulb.setVelocityX(speed);
            this.bulb.play('bulbWalk', true);
        } else {
            this.bulb.setVelocityX(0);
            this.bulb.anims.stop();
        }
        
        if (this.keys.up.isDown && this.bulb.body.touching.down) {
            this.bulb.setVelocityY(-330);
        }
    }

    updateBattery() {
        const speed = 160;

        if (this.keys.p2left.isDown) {
            this.battery.setVelocityX(-speed);
            this.battery.play('batteryWalk', true);

        } else if (this.keys.p2right.isDown) {
            this.battery.setVelocityX(speed);
            this.battery.play('batteryWalk', true);
        } else {
            this.battery.setVelocityX(0);
            this.battery.anims.stop();
        }
        
        if (this.keys.p2up.isDown && this.battery.body.touching.down) {
            this.battery.setVelocityY(-330);
        }    

    }


}

export default GameScene;
