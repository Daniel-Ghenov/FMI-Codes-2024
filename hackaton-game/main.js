import "./style.css";
import Phaser from "phaser";
import GameScene from "./src/scenes/GameScene";


// const config = {
//   type: Phaser.AUTO,
//   physics: {
//     default: "arcade",
//     arcade: {
//       gravity: { y: 1000 },
//       debug: true,
//     },
//   },
//   scene: GameScene,
//   backgroundColor: "#000000",
//   pixelArt: true,
//   roundPixels: true,
//   scale: {
//     mode: Phaser.Scale.FIT,
//     autoCenter: Phaser.Scale.CENTER_BOTH,
//   },
// };


const config = {
  type: Phaser.AUTO,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 1000 },
      debug: false,
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
