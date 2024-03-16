class GameScene extends Phaser.Scene {
    constructor() {
        super("GameScene");
    }
    
    preload() {
        this.load.image("bg", "assets/bg.png");
        this.load.image("chair", "assets/chair.png")
        this.load.image('drawers', 'assets/drawers.png')
        this.load.spritesheet('bulb', 'assets/bulb.png', {
            frameWidth: 53.6,
            frameHeight: 100,
        });
        this.load.spritesheet('battery', 'assets/battery.png', {
            frameWidth: 47.1,
            frameHeight: 100,
        });
    }
    create() {
        this.bg = this.add.image(0, 0, "bg").setOrigin(0, 0);
        this.bg.setDepth(-100);

        let viewportWidth = this.sys.game.config.width;
        let viewportHeight = this.sys.game.config.height;

        let scaleX = viewportWidth / this.bg.width;
        let scaleY = viewportHeight / this.bg.height;

        this.bg.setScale(scaleX, scaleY);


        this.floor = this.physics.add.staticSprite(500, 770, 'floor');
        this.floor.displayWidth = this.sys.game.config.width;
        this.floor.setDepth(-1000);
        this.floor.refreshBody(); 

        this.createBulb();
        this.createBattery();

        // this.createChair();
        this.createDrawers();

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

    createChair() {
        this.chair = this.physics.add.staticSprite(700, 535, 'chair');
        this.chair.setDepth(-1);
        this.chair.setScale(3.4);

        this.chairCussion = this.physics.add.staticSprite(700, 620);
        this.chairCussion.setDepth(-1000);
        this.chairCussion.setScale(12, 3);
        this.chairCussion.refreshBody();

        this.physics.add.collider(this.bulb, this.chairCussion);
        this.physics.add.collider(this.battery, this.chairCussion)
    }

    createDrawers() {
        this.drawers = this.physics.add.staticSprite(1000, 550, 'drawers');
        this.drawers.setDepth(-1);
        this.drawers.setScale(3.5);

        this.drawersBody = this.physics.add.staticSprite(1000, 620);
        this.drawersBody.setDepth(-1000);
        this.drawersBody.setScale(12, 3);
        this.drawersBody.refreshBody();

        this.physics.add.collider(this.bulb, this.drawersBody);
        this.physics.add.collider(this.battery, this.drawersBody)
    }

    createBulb() {
        this.bulb = this.physics.add.sprite(100, 200, 'bulb');

        this.anims.create({
            key: 'bulbWalk',
            frames: this.anims.generateFrameNumbers('bulb', { start: 0, end: 7 }),
            frameRate: 10,
            repeat: -1
        });

        this.physics.add.collider(this.bulb, this.floor);
        this.bulb.setCollideWorldBounds(true);
    }

    createBattery() {

        this.battery = this.physics.add.sprite(100, 200, 'battery');

        this.anims.create({
            key: 'batteryWalk',
            frames: this.anims.generateFrameNumbers('battery', { start: 0, end: 6 }),
            frameRate: 10,
            repeat: -1
        });

        this.physics.add.collider(this.battery, this.floor);
        this.battery.setCollideWorldBounds(true);
    }

    update() {
        this.updateBulb();
        this.updateBattery();
    }

    updateBulb() {
        const speed = 160;
        this.bulb.play('bulbWalk', true);
  
        if (this.keys.left.isDown) {
            this.bulb.setVelocityX(-speed);
            if (!this.bulb.body.touching.down){
                this.bulb.anims.stop();
            } else {
                this.bulb.play('bulbWalk', true);
            }
        } else if (this.keys.right.isDown) {
            this.bulb.setVelocityX(speed);
            if (!this.bulb.body.touching.down){
                this.bulb.anims.stop();
            } else {
                this.bulb.play('bulbWalk', true);
            }
        } else {
            this.bulb.setVelocityX(0);
            if (!this.bulb.body.touching.down){
                this.bulb.anims.stop();
            }  else {
                this.bulb.play('bulbWalk', true);
            }
        }
        
        if (this.keys.up.isDown && this.bulb.body.touching.down) {
            this.bulb.setVelocityY(-200);
        }

        // this.bg.tilePositionX += 1;

        if (this.bulb.x >= this.sys.game.config.width) {
            this.bulb.x = 0;
        }
    }

    updateBattery() {
        const speed = 160;

        if (this.keys.p2left.isDown) {
            this.battery.setVelocityX(-speed);
            if (!this.battery.body.touching.down){
                this.battery.anims.stop();
            }  else {
                this.battery.play('batteryWalk', true);
            }

        } else if (this.keys.p2right.isDown) {
            this.battery.setVelocityX(speed);
            if (!this.battery.body.touching.down){
                this.battery.anims.stop();
            }  else {
                this.battery.play('batteryWalk', true);
            }
        } else {
            this.battery.setVelocityX(0);
            this.battery.anims.stop();
        }
        
        if (this.keys.p2up.isDown && this.battery.body.touching.down) {
            this.battery.setVelocityY(-400);
        }    

    }


}

export default GameScene;
