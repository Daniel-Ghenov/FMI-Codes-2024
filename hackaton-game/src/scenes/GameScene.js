class GameScene extends Phaser.Scene {
    constructor() {
        super("GameScene");
    }
    
    preload() {
        this.load.image("bg", "assets/bg.png");
        this.load.image("chair", "assets/chair.png")
        this.load.image('drawers', 'assets/drawers.png')
this.load.image('remote', 'assets/remote.png')
        this.load.spritesheet('bulb', 'assets/bulb.png', {
            frameWidth: 53.6,
            frameHeight: 100,
        });
        this.load.spritesheet('battery', 'assets/battery.png', {
            frameWidth: 47.1,
            frameHeight: 100,
        });
        this.load.spritesheet('fan', 'assets/fan.png', {
            frameWidth: 46,
            frameHeight: 50,
        });
        this.load.image('table', 'assets/table.png');
        this.load.image('waterbowl', 'assets/waterbowl.png');
        this.load.image('bookshelf', 'assets/bookshelf.png');
    }
    create() {
        
        this.bg = this.add.tileSprite(0, 0, this.sys.game.config.width, this.sys.game.config.height, "bg").setOrigin(0, 0);
        this.bg.setDepth(-100);
        this.bg.setScrollFactor(0);
        
        this.physics.world.setBounds(0, -100, 3000, 1000);

        this.createFloor();

        this.createBulb();
        this.createBattery();

        this.createChair();
        this.createDrawers();

        this.createWaterBowl();
        this.createBookshelf();
this.createRemote();

        this.createFan();
        this.createTable();

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

    createFloor() {
        this.floor = this.physics.add.staticSprite(500, 770, 'floor');
        this.floor.setScale(1000, 1);
        this.floor.setDepth(-1000);
        this.floor.refreshBody(); 
    }

    createChair() {
        this.chair = this.physics.add.staticSprite(700, 560, 'chair');
        this.chair.setDepth(-1);
        this.chair.setScale(3.4);

        this.chairCussion = this.physics.add.staticSprite(700, 600);
        this.chairCussion.setDepth(-1000);
        this.chairCussion.setScale(12, 3);
        this.chairCussion.refreshBody();

        this.physics.add.collider(this.bulb, this.chairCussion);
        this.physics.add.collider(this.battery, this.chairCussion)
    }

    createDrawers() {
        this.drawers = this.physics.add.staticSprite(1250, 520, 'drawers');
        this.drawers.setDepth(-1);
        this.drawers.setScale(3.5);

        this.drawersBody = this.physics.add.staticSprite(1225, 470);
        this.drawersBody.setDepth(-1000);
        this.drawersBody.setScale(18.6, 11);
        this.drawersBody.refreshBody();

        this.physics.add.collider(this.bulb, this.drawersBody);
        this.physics.add.collider(this.battery, this.drawersBody)
    }

    createRemote() {
        this.remote = this.physics.add.staticSprite(1000, 210, 'remote');
        this.remote.setDepth(10);
        this.remote.setScale(2);
    }

    createFan() {
        this.fan = this.physics.add.staticSprite(1640, 700, 'fan');
        this.fan.setDepth(-1);
        this.fan.setScale(3.5);

        this.fanBody = this.physics.add.staticSprite(1640, 740);
        this.fanBody.setDepth(-1000);
        this.fanBody.setScale(4, 1.2);
        this.fanBody.refreshBody();

        this.fanStream = this.physics.add.staticSprite(1640, 540);
        this.fanStream.setDepth(-1000);
        this.fanStream.setScale(4, 25);
        this.fanStream.refreshBody();

        this.physics.add.collider(this.bulb, this.fanBody);
        this.physics.add.collider(this.battery, this.fanBody)

    }

    createTable() {
        this.table = this.physics.add.staticSprite(2200, 700, 'table');
        this.table.setDepth(-1);
        this.table.setScale(5, 5);

        this.tableBody = this.physics.add.staticSprite(2200, 700);
        this.tableBody.setDepth(-1000);
        this.tableBody.setScale(27, 21);
        this.tableBody.refreshBody();

        this.physics.add.collider(this.bulb, this.tableBody);
        this.physics.add.collider(this.battery, this.tableBody)
    }

    createWaterBowl() {
        this.waterbowl = this.physics.add.staticSprite(2250, 325, 'waterbowl');
        this.waterbowl.setDepth(-1);
        this.waterbowl.setScale(2);

        this.waterbowlBody = this.physics.add.staticSprite(2245, 325);
        this.waterbowlBody.setDepth(-1000);
        this.waterbowlBody.setScale(0.5);
        this.waterbowlBody.refreshBody();

        this.physics.add.collider(this.bulb, this.waterbowlBody);
        this.physics.add.collider(this.battery, this.waterbowlBody)
    }

    createBookshelf() {
        this.bookshelf = this.physics.add.staticSprite(2015, 260, 'bookshelf');
        this.bookshelf.setDepth(-1);
        this.bookshelf.setScale(3);

        this.bookshelfBody = this.physics.add.staticSprite(2015, 230);
        this.bookshelfBody.setDepth(-1000);
        this.bookshelfBody.setScale(6, 2);
        this.bookshelfBody.refreshBody();

        this.physics.add.collider(this.bulb, this.bookshelfBody);
        this.physics.add.collider(this.battery, this.bookshelfBody)
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
            frames: this.anims.generateFrameNumbers('battery', { start: 0, end: 5 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'batteryJump',
            frames: this.anims.generateFrameNumbers('battery', { start: 6, end: 6 }),
            frameRate: 10,
            repeat: -1
        });

        this.physics.add.collider(this.battery, this.floor);
        this.battery.setCollideWorldBounds(true);
    }

   

    update() {
        this.updateBulb();
        this.updateBattery();

        let midpointX = (this.bulb.x + this.battery.x) / 2;
        this.cameras.main.scrollX = midpointX - this.cameras.main.width / 2;
        
        var isRemoteOn = this.physics.overlap(this.battery, this.remote);
        this.fan.isOn = isRemoteOn;

        this.updateFanBulbCollision();

        //TODO add dying logic from the water bowl
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
    }

    updateBattery() {
        const speed = 160;

        if (this.keys.p2left.isDown) {
            this.battery.setVelocityX(-speed);
            if (!this.battery.body.touching.down){
                this.battery.play('batteryJump', true);
            }  else {
                this.battery.play('batteryWalk', true);
            }

        } else if (this.keys.p2right.isDown) {
            this.battery.setVelocityX(speed);
            if (!this.battery.body.touching.down){
                this.battery.play('batteryJump', true);
            }  else {
                this.battery.play('batteryWalk', true);
            }
        } else {
            this.battery.setVelocityX(0);
            if (!this.battery.body.touching.down){
                this.battery.play('batteryJump', true);
            }  else {
                this.battery.play('batteryWalk', true);
            }
        }
        
        if (this.keys.p2up.isDown && this.battery.body.touching.down) {
            this.battery.setVelocityY(-450);
        }    

    }

    updateCamera() {
        let midpointX = (this.bulb.x + this.battery.x) / 2;
        this.cameras.main.scrollX = midpointX - this.cameras.main.width / 2;
        
        let worldBounds = this.physics.world.bounds;
        this.cameras.main.scrollX = Phaser.Math.Clamp(this.cameras.main.scrollX, 0, worldBounds.width - this.cameras.main.width);
    }

    updateFanBulbCollision() {
        if (!this.fan.isOn) {
            return;
        }

        if (this.physics.overlap(this.bulb, this.fanStream)) {
            this.bulb.setVelocityY(-300);
        }
    }


}

export default GameScene;
