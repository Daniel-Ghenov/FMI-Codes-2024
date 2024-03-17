class GameScene extends Phaser.Scene {
  constructor() {
    super("GameScene");
  }

  preload() {
    this.load.image("bg", "assets/bg.png");
    this.load.image("chair", "assets/chair.png");
    this.load.image("drawers", "assets/drawers.png");
    this.load.image("remote", "assets/remote.png");
    this.load.spritesheet("bulb", "assets/bulb.png", {
      frameWidth: 53,
      frameHeight: 100,
    });
    this.load.spritesheet("battery", "assets/battery.png", {
      frameWidth: 47.1,
      frameHeight: 100,
    });
    this.load.spritesheet("fan", "assets/fan.png", {
      frameWidth: 46,
      frameHeight: 50,
    });
    this.load.image("table", "assets/table.png");
    this.load.image("waterbowl", "assets/waterbowl.png");
    this.load.image("bookshelf", "assets/bookshelf.png");
    this.load.image("clock", "assets/clock.png");
    this.load.image("chandelier", "assets/chandelier.png");
    this.load.image("wardrobe", "assets/wardrobe.png");
    this.load.spritesheet("prism", "assets/prism-sprite.png", {
        frameWidth: 800,
        frameHeight: 700,
    });
    this.load.image("prism-lower", "assets/prism.png");
    this.load.image("open-wardrobe", "assets/openWardrobe.png");
    this.load.image("long-shelf", "assets/longShelf.png");
    this.load.spritesheet("train-sprite", "assets/train-sprite.png", {
        frameWidth: 200,
        frameHeight: 32,
    });
    this.load.image("pillow", "assets/pillow.png");
    this.load.spritesheet("finish", "assets/final.png", {
        frameWidth: 100,
        frameHeight: 100,
    });
    this.load.spritesheet("laser", "assets/laser-start.png", {
        frameWidth: 200,
        frameHeight: 75,
    });
    this.load.image("brownFloor", "assets/brownfloor.png");
  }
  create() {
    this.bg = this.add
      .tileSprite(
        0,
        0,
        this.sys.game.config.width,
        this.sys.game.config.height,
        "bg"
      )
      .setOrigin(0, 0);
    this.bg.setDepth(-100);
    this.bg.setScrollFactor(0);

    this.physics.world.setBounds(0, -100, 10000, 1000);

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

    this.createClock();
    this.createChandelier();
    this.createWardrobe();
    this.createPrism();
    this.createOpenWardrobe();
    this.createLongShelf();
    this.createTrain();
    this.createPillow();

    this.createFinish();

    this.createMask();

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
    this.floor = this.physics.add.staticSprite(500, 770, "floor");
    this.floor.setScale(1000, 1);
    this.floor.setDepth(-1000);
    this.floor.refreshBody();
  }

  createChair() {
    this.chair = this.physics.add.staticSprite(700, 560, "chair");
    this.chair.setDepth(-1);
    this.chair.setScale(3.4);

    this.chairCussion = this.physics.add.staticSprite(700, 600);
    this.chairCussion.setDepth(-1000);
    this.chairCussion.setScale(12, 3);
    this.chairCussion.refreshBody();

    this.physics.add.collider(this.bulb, this.chairCussion);
    this.physics.add.collider(this.battery, this.chairCussion);
  }

  createDrawers() {
    this.drawers = this.physics.add.staticSprite(1250, 520, "drawers");
    this.drawers.setDepth(-1);
    this.drawers.setScale(3.5);

    this.drawersBody = this.physics.add.staticSprite(1225, 470);
    this.drawersBody.setDepth(-1000);
    this.drawersBody.setScale(18.6, 11);
    this.drawersBody.refreshBody();

    this.physics.add.collider(this.bulb, this.drawersBody);
    this.physics.add.collider(this.battery, this.drawersBody);
  }

  createRemote() {
    this.remote = this.physics.add.staticSprite(1000, 210, "remote");
    this.remote.setDepth(10);
    this.remote.setScale(2);
  }

  createFan() {
    this.fan = this.physics.add.staticSprite(1640, 700, "fan");
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

    this.anims.create({
      key: "fanOn",
      frames: this.anims.generateFrameNumbers("fan", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "fanOff",
      frames: this.anims.generateFrameNumbers("fan", { start: 4, end: 4 }),
      frameRate: 10,
      repeat: -1,
    });

    this.physics.add.collider(this.bulb, this.fanBody);
    this.physics.add.collider(this.battery, this.fanBody);
  }

  createTable() {
    this.table = this.physics.add.staticSprite(2200, 700, "table");
    this.table.setDepth(-1);
    this.table.setScale(5, 5);

    this.tableBody = this.physics.add.staticSprite(2200, 700);
    this.tableBody.setDepth(-1000);
    this.tableBody.setScale(27, 21);
    this.tableBody.refreshBody();

    this.physics.add.collider(this.bulb, this.tableBody);
    this.physics.add.collider(this.battery, this.tableBody);
  }

  createWaterBowl() {
    this.waterbowl = this.physics.add.staticSprite(2250, 325, "waterbowl");
    this.waterbowl.setDepth(-1);
    this.waterbowl.setScale(2);

    this.waterbowlBody = this.physics.add.staticSprite(2245, 325);
    this.waterbowlBody.setDepth(-1000);
    this.waterbowlBody.setScale(0.5);
    this.waterbowlBody.refreshBody();

    this.physics.add.collider(this.bulb, this.waterbowlBody);
    this.physics.add.collider(this.battery, this.waterbowlBody);
  }

  createClock() {
    this.clock = this.physics.add.staticSprite(2350, 125, "clock");
    this.clock.setDepth(-1);
    this.clock.setScale(1.5);

    this.clockBody = this.physics.add.staticSprite(2350, 125);
    this.clockBody.setDepth(-1000);
    this.clockBody.setScale(3.5);
    this.clockBody.refreshBody();

    this.physics.add.collider(this.bulb, this.clockBody);
    this.physics.add.collider(this.battery, this.clockBody);
  }

    createChandelier() {
        this.chandelier = this.physics.add.staticSprite(2850, 1250, "chandelier");
        this.chandelier.setDepth(-1);
        this.chandelier.setScale(4);

        this.chandelierBody = this.physics.add.staticSprite(2850, 220);
        this.chandelierBody.setDepth(-1000);
        this.chandelierBody.setScale(3.5, 1);
        this.chandelierBody.refreshBody();

        this.physics.add.collider(this.bulb, this.chandelierBody);
        this.physics.add.collider(this.battery, this.chandelierBody);
    }

    createWardrobe() {
        this.wardrobe = this.physics.add.staticSprite(3200, 520, "wardrobe");
        this.wardrobe.setDepth(-1);
        this.wardrobe.setScale(4.7);

        this.wardrobeBody = this.physics.add.staticSprite(3200, 500);
        this.wardrobeBody.setDepth(-1000);
        this.wardrobeBody.setScale(11, 20);
        this.wardrobeBody.refreshBody();

        this.physics.add.collider(this.bulb, this.wardrobeBody);
        this.physics.add.collider(this.battery, this.wardrobeBody);
    
    }

    createPrism() {
        this.prism = this.physics.add.staticSprite(3706, 466, "prism");
        this.prism.setDepth(-1);
        this.prism.setScale(1);

        this.prismBody = this.physics.add.staticSprite(3360, 300);
        this.prismBody.setDepth(-1000);
        this.prismBody.setScale(1, 1);
        this.prismBody.refreshBody();

        this.prismTrigger = this.physics.add.staticSprite(3340, 150);
        this.prismTrigger.setDepth(-1000);
        this.prismTrigger.setScale(5, 5);
        this.prismTrigger.refreshBody();

        this.anims.create({
            key: "prismOff",
            frames: this.anims.generateFrameNumbers("prism", { start: 0, end: 0 }),
            frameRate: 10,
            repeat: -1,
        });

        this.anims.create({
            key: "prismTransition",
            frames: this.anims.generateFrameNumbers("prism", { start: 0, end: 15 }),
            frameRate: 10,
            repeat: 0,
        });


        this.anims.create({
            key: "prismTransitionBack",
            frames: this.anims.generateFrameNumbers("prism", { start: 15, end: 0 }),
            frameRate: 10,
            repeat: 0,
        });

        this.prism.on = false;
        this.prism.play("prismOff", true);

        this.downstairsPrism = this.physics.add.staticSprite(4000, 725, "prism-lower");
        this.downstairsPrism.setDepth(-1);

        this.brownFloor = this.physics.add.staticSprite(4000, 760, "brownFloor");
        this.brownFloor.setDepth(0);
        this.brownFloor.setScale(1);

        this.downstairsRemote = this.physics.add.staticSprite(4300, 660, "remote");
        this.downstairsRemote.setDepth(10);
        this.downstairsRemote.setScale(2);

        this.downstairsRemoteTrigger = this.physics.add.staticSprite(4300, 660);
        this.downstairsRemoteTrigger.setDepth(-1000);
        this.downstairsRemoteTrigger.setScale(2, 2);
        this.downstairsRemoteTrigger.refreshBody();

        this.laser = this.physics.add.staticSprite(4050, 725, "laser");
        this.laser.setDepth(-1);
        this.laser.setScale(1.5);

        this.anims.create({
            key: "laserOff",
            frames: this.anims.generateFrameNumbers("laser", { start: 0, end: 0 }),
            frameRate: 10,
            repeat: -1,
        });

        this.anims.create({
            key: "laserTransition",
            frames: this.anims.generateFrameNumbers("laser", { start: 0, end: 6 }),
            frameRate: 10,
            repeat: 0,
        });

        this.anims.create({
            key: "laserOn",
            frames: this.anims.generateFrameNumbers("laser", { start: 6, end: 6 }),
            frameRate: 10,
            repeat: -1,
        });

        this.laser.on = false;
        this.laser.play("laserOff", true);
            

        this.physics.add.collider(this.bulb, this.prismBody);
        this.physics.add.collider(this.battery, this.prismBody);
    }

    createOpenWardrobe() {
        this.openWardrobe = this.physics.add.staticSprite(4600, 435, "open-wardrobe");
        this.openWardrobe.setDepth(-1);
        this.openWardrobe.setScale(4.7);


        this.secondWardrobe = this.physics.add.staticSprite(5050, 450, "wardrobe");
        this.secondWardrobe.setDepth(-1);
        this.secondWardrobe.setScale(4.7);
        this.secondWardrobe.refreshBody();

        this.secondWardrobeBody = this.physics.add.staticSprite(5050, 425);
        this.secondWardrobeBody.setDepth(-1);
        this.secondWardrobeBody.setScale(11, 20);
        this.secondWardrobeBody.refreshBody();

        this.physics.add.collider(this.bulb, this.openWardrobeBody);
        this.physics.add.collider(this.battery, this.openWardrobeBody);

        this.physics.add.collider(this.bulb, this.secondWardrobeBody);
        this.physics.add.collider(this.battery, this.secondWardrobeBody);
    }

    createLongShelf() {
        this.longShelf = this.physics.add.staticSprite(6300, 140, "long-shelf");
        this.longShelf.setDepth(-1);   
        this.longShelf.setScale(4);

        this.longShelfBody = this.physics.add.staticSprite(6300, 135);
        this.longShelfBody.setDepth(-1000);
        this.longShelfBody.setScale(50, 2);
        this.longShelfBody.refreshBody();

    }

    createTrain() {
        this.train = this.physics.add.sprite(5500, 30, "train-sprite");
        this.train.setScale(4);
        this.train.setOffset(0, -7);

        this.trainTempBody = this.physics.add.staticSprite(5190, 65);
        this.trainTempBody.setDepth(-1000);
        this.trainTempBody.setScale(4, 4);
        this.trainTempBody.refreshBody();

        this.trainTrigger = this.physics.add.staticSprite(5150, 65);
        this.trainTrigger.setDepth(-1000);
        this.trainTrigger.setScale(5, 5);
        this.trainTrigger.refreshBody();

        this.anims.create({
            key: "trainStationary",
            frames: this.anims.generateFrameNumbers("train-sprite", { start: 0, end: 0 }),
            frameRate: 10,
            repeat: 0,
        });

        this.anims.create({
            key: "trainMove",
            frames: this.anims.generateFrameNumbers("train-sprite", { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1,
        });

        this.train.play("trainStationary", true);

        this.physics.add.collider(this.bulb, this.trainTempBody);
        this.physics.add.collider(this.battery, this.trainTempBody);

        this.physics.add.collider(this.train, this.longShelfBody);
        this.physics.add.collider(this.train, this.secondWardrobeBody);
    }

    createPillow() {
        this.pillow = this.physics.add.staticSprite(5500, 720, "pillow");
        this.pillow.setDepth(-1);
        this.pillow.setScale(4);

        this.pillowBody = this.physics.add.staticSprite(5500, 730);
        this.pillowBody.setDepth(-1000);
        this.pillowBody.setScale(6, 3);
        this.pillowBody.refreshBody();

        this.physics.add.collider(this.bulb, this.pillowBody);
        this.physics.add.collider(this.battery, this.pillowBody);
    }

    createFinish() {

        this.finish = this.physics.add.sprite(6000, 700, "finish");
        this.finish.setDepth(120);
        this.finish.setScale(3);

        this.finishBody = this.physics.add.staticSprite(6000, 700);
        this.finishBody.setDepth(-1000);
        this.finishBody.setScale(3, 3);
        this.finishBody.refreshBody();

        this.finishTrigger = this.physics.add.staticSprite(6000, 700);
        this.finishTrigger.setDepth(-1000);
        this.finishTrigger.setScale(3, 3);
        this.finishTrigger.refreshBody();

        this.anims.create({
            key: "finish",
            frames: this.anims.generateFrameNumbers("finish", { start: 0, end: 0 }),
            frameRate: 10,
            repeat: -1,
        });

        this.finish.setVisible(false);

        this.anims.create({
            key: "finishTransition",
            frames: this.anims.generateFrameNumbers("finish", { start: 0, end: 25 }),
            frameRate: 10,
            repeat: 0,
        });

        this.physics.add.collider(this.finish, this.floor);
    }

    createMask() {

        this.overlay = this.add.graphics({
            fillStyle: { color: 0x000000, alpha: 0.8 }
        });
    
        this.overlay.fillRect(0, 0, 8000, 1200);
        this.overlay.setDepth(1000);

        this.light = this.make.graphics({ x: 0, y: 0, add: false });
        this.light.fillStyle(0xffffff);
        this.light.fillCircle(300, 400, 100);
        this.light.generateTexture('maskCircle', 200, 200);

        this.overlay.mask = new Phaser.Display.Masks.BitmapMask(this, this.light)
		this.overlay.mask.invertAlpha = true


    }

  createTable() {
    this.table = this.physics.add.staticSprite(2200, 700, "table");
    this.table.setDepth(-1);
    this.table.setScale(5, 5);

    this.tableBody = this.physics.add.staticSprite(2200, 700);
    this.tableBody.setDepth(-1000);
    this.tableBody.setScale(27, 21);
    this.tableBody.refreshBody();

    this.physics.add.collider(this.bulb, this.tableBody);
    this.physics.add.collider(this.battery, this.tableBody);
  }

  createWaterBowl() {
    this.waterbowl = this.physics.add.staticSprite(2250, 325, "waterbowl");
    this.waterbowl.setDepth(-1);
    this.waterbowl.setScale(3.5);

    this.waterbowlBody = this.physics.add.staticSprite(2245, 325);
    this.waterbowlBody.setDepth(-1000);
    this.waterbowlBody.setScale(5, 2.5);
    this.waterbowlBody.refreshBody();

    this.waterbowDeathZone = this.physics.add.staticSprite(2245, 300);
    this.waterbowDeathZone.setDepth(-1000);
    this.waterbowDeathZone.setScale(5, 1);
    this.waterbowDeathZone.refreshBody();

    this.physics.add.collider(this.bulb, this.waterbowlBody);
    this.physics.add.collider(this.battery, this.waterbowlBody);
  }

  createBookshelf() {
    this.bookshelf = this.physics.add.staticSprite(2015, 260, 'bookshelf');
    this.bookshelf.setDepth(-1);
    this.bookshelf.setScale(3);

    this.bookshelfBody = this.physics.add.staticSprite(2015, 240);
    this.bookshelfBody.setDepth(-1000);
    this.bookshelfBody.setScale(8, 0.5);
    this.bookshelfBody.refreshBody();

    this.books = this.physics.add.staticSprite(1945, 185);
    this.books.setDepth(-1000);
    this.books.setScale(3, 2.5);
    this.books.refreshBody();

    this.physics.add.collider(this.bulb, this.books);
    this.physics.add.collider(this.battery, this.books);
    this.physics.add.collider(this.bulb, this.bookshelfBody);
    this.physics.add.collider(this.battery, this.bookshelfBody)
}

  createBulb() {
    this.bulb = this.physics.add.sprite(3200, 100, "bulb");

    this.anims.create({
      key: "bulbWalk",
      frames: this.anims.generateFrameNumbers("bulb", { start: 0, end: 7 }),
      frameRate: 10,
      repeat: -1,
    });

    this.physics.add.collider(this.bulb, this.floor);
    this.bulb.setCollideWorldBounds(true);
  }

  createBattery() {
    this.battery = this.physics.add.sprite(3200, 100, "battery");

    this.anims.create({
      key: "batteryWalk",
      frames: this.anims.generateFrameNumbers("battery", { start: 0, end: 5 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "batteryJump",
      frames: this.anims.generateFrameNumbers("battery", { start: 6, end: 6 }),
      frameRate: 10,
      repeat: -1,
    });

    this.physics.add.collider(this.battery, this.floor);
    this.battery.setCollideWorldBounds(true);
  }

  update() {
    this.updateBulb();
    this.updateBattery();

    var isRemoteOn = this.physics.overlap(this.battery, this.remote);
    this.fan.isOn = isRemoteOn;

    this.updateFanBulbCollision();
    this.updateCamera();
    this.checkWaterBowlDeath();
    this.updatePrism();
    this.updateTrain();
    this.updateFinish();
    this.updateLight();
  }

  updateBulb() {
    const speed = 160;
    this.bulb.play("bulbWalk", true);

    if (this.keys.left.isDown) {
      this.bulb.setVelocityX(-speed);
      if (!this.bulb.body.touching.down) {
        this.bulb.anims.stop();
      } else {
        this.bulb.play("bulbWalk", true);
      }
    } else if (this.keys.right.isDown) {
      this.bulb.setVelocityX(speed);
      if (!this.bulb.body.touching.down) {
        this.bulb.anims.stop();
      } else {
        this.bulb.play("bulbWalk", true);
      }
    } else {
      this.bulb.setVelocityX(0);
      if (!this.bulb.body.touching.down) {
        this.bulb.anims.stop();
      } else {
        this.bulb.play("bulbWalk", true);
      }
    }

    if (this.keys.up.isDown && this.bulb.body.touching.down) {
      this.bulb.setVelocityY(-200);
    }
  }

  updateBattery() {
        const batteryToBulbMinDistance = 550;
        let batteryToBulbDistance = Phaser.Math.Distance.Between(
            this.battery.x,
            this.battery.y,
            this.bulb.x,
            this.bulb.y
        );
        const speed = 160;

        if (batteryToBulbDistance > batteryToBulbMinDistance) {
            this.battery.setVelocityX(0);
            this.battery.setVelocityY(0);
            this.battery.anims.stop();
            return;
        }

    if (this.keys.p2left.isDown) {
      this.battery.setVelocityX(-speed);
      if (!this.battery.body.touching.down) {
        this.battery.play("batteryJump", true);
      } else {
        this.battery.play("batteryWalk", true);
      }
    } else if (this.keys.p2right.isDown) {
      this.battery.setVelocityX(speed);
      if (!this.battery.body.touching.down) {
        this.battery.play("batteryJump", true);
      } else {
        this.battery.play("batteryWalk", true);
      }
    } else {
      this.battery.setVelocityX(0);
      if (!this.battery.body.touching.down) {
        this.battery.play("batteryJump", true);
      } else {
        this.battery.anims.stop();
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
    this.cameras.main.scrollX = Phaser.Math.Clamp(
      this.cameras.main.scrollX,
      0,
      worldBounds.width - this.cameras.main.width
    );
  }

  updateFanBulbCollision() {
    if (!this.fan.isOn) {
      this.fan.play("fanOff", true);
      return;
    }

    this.fan.play("fanOn", true);

    if (this.physics.overlap(this.bulb, this.fanStream)) {
      this.bulb.setVelocityY(-300);
    }
  }

    checkWaterBowlDeath() {
        if (
            this.physics.overlap(this.bulb, this.waterbowDeathZone) ||
            this.physics.overlap(this.battery, this.waterbowDeathZone)
        )
      this.scene.restart();
    }

    updatePrism() {
        if (this.laser.on) {
            return;
        }
        if (this.physics.overlap(this.battery, this.downstairsRemoteTrigger)) {
            this.laser.play("laserTransition", true);
            this.laser.on = true;
            if (!this.prism.on) {
                this.prism.play("prismTransition", true);
            }
        }
                
        if (this.physics.overlap(this.bulb, this.prismTrigger)) {
            if (!this.prism.on) {
                this.prism.play("prismTransition", true);
            }
            this.prism.on = true;
        } else {
            if (this.prism.on) {
                this.prism.play("prismTransitionBack", true);
                this.prism.on = false;
            }
        }
    }

    updateTrain() {
        if (this.train.hasMoved) {
            return 
        }
        if (this.physics.overlap(this.battery, this.trainTrigger)) {
            this.train.play("trainMove", true);
            this.train.setVelocityX(100);
            this.train.hasMoved = true;
            this.trainTempBody.destroy();
        } else {
            this.train.play("trainStationary", true);
        }
    }

    updateFinish() {
        if (this.finish.hasFinished) {
            return;
        }

        if (this.physics.overlap(this.bulb, this.finishTrigger) &&
            this.physics.overlap(this.battery, this.finishTrigger)) {
                this.finish.hasFinished = true;
                this.bulb.setAlpha(0);
                this.battery.setAlpha(0);

                this.finish.setVisible(true);
                console.log("finish");

                this.finish.setAccelerationY(-100);
                this.finish.play("finishTransition", true);
        }
    }

    updateLight() {
        const bigRadius = 500;
        const smallRadius = 150;
        const batteryToBulbMinDistance = 550;
        const batteryToBulbDistance = Phaser.Math.Distance.Between(
            this.battery.x,
            this.battery.y,
            this.bulb.x,
            this.bulb.y
        );

        let lightRadius = batteryToBulbDistance > batteryToBulbMinDistance ? smallRadius : bigRadius;

        this.light.clear();
        this.light.fillStyle(0xffffff, 1);
        this.light.fillCircle(this.bulb.x, this.bulb.y, lightRadius);
    }

}

export default GameScene;
