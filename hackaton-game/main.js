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
  scene: GameScene,
};

const game = new Phaser.Game(config);