import Phaser from 'phaser'
import { BootScene } from './scenes/BootScene.js'
import { MenuScene } from './scenes/MenuScene.js'
import { AuthorScene } from './scenes/AuthorScene.js'
import { GameScene } from './scenes/GameScene.js'
import { TutorialScene } from './scenes/TutorialScene.js'
import { SettingsScene } from './scenes/SettingsScene.js'
import { StatsScene } from './scenes/StatsScene.js'
import { PauseScene } from './scenes/PauseScene.js'

new Phaser.Game({
  type: Phaser.AUTO,
  width: 480,
  height: 854,
  backgroundColor: '#1a1208',
  scene: [BootScene, MenuScene, AuthorScene, GameScene, TutorialScene, SettingsScene, StatsScene, PauseScene],
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  audio: {
    disableWebAudio: false,
    noAudio: false  // Force enable audio
  }
})