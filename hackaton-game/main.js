import "./style.css";
import Phaser from "phaser";
import GameScene from "./src/scenes/GameScene";


const config = {
  type: Phaser.AUTO,
  physics: {
    default: "matter",
    matter: {
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
