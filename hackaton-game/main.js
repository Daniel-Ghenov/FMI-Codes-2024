import "./style.css";
import Phaser from "phaser";
import GameScene from "./src/scenes/GameScene";

const size = {
  width: 800,
  height: 600
};

const config = {
  type: Phaser.AUTO,
  width: size.width,  
  height: size.height,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: true,
    },
  },
  scene: GameScene,
  backgroundColor: "#000000",
  pixelArt: true,
  roundPixels: true,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};

const game = new Phaser.Game(config);
