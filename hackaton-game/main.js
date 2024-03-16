import "./style.css";
import Phaser from "phaser";
import GameScene from "./src/scenes/GameScene";

const config = {
  type: Phaser.AUTO,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: true,
    },
  },
  scale: {
    mode: Phaser.Scale.FIT,
    parent: 'game-container',
    autoCenter: Phaser.Scale.CENTER_BOTH,
},
  scene: GameScene,
};

const game = new Phaser.Game(config);