import Phaser from 'phaser'
import { BootScene } from './scenes/BootScene.js'
import { MenuScene } from './scenes/MenuScene.js'
import { AuthorScene } from './scenes/AuthorScene.js'
import { GameScene } from './scenes/GameScene.js'
import { TutorialScene } from './scenes/TutorialScene.js'
import { SettingsScene } from './scenes/SettingsScene.js'
import { StatsScene } from './scenes/StatsScene.js'
import { PauseScene } from './scenes/PauseScene.js'
import { TermsScene } from './scenes/TermsScene.js'
import { MobileOptimization } from './mobileOptimization.js'

// ✅ Apply safe area CSS before game starts
MobileOptimization.applySafeAreaCSS()

// ✅ Lock to portrait orientation on mobile (when built with Capacitor)
// This will work automatically on native mobile builds
// Uncomment when you build with Capacitor:
// if (MobileOptimization.getPlayableArea().isMobile) {
//   MobileOptimization.lockOrientation('portrait')
// }

const config = {
  type: Phaser.AUTO,
  parent: 'app',
  width: 480,
  height: 854,
  backgroundColor: '#1a1208',
  scene: [BootScene, MenuScene, AuthorScene, GameScene, TutorialScene, SettingsScene, StatsScene, PauseScene, TermsScene],
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    // ✅ Add mobile-specific scale settings
    orientation: Phaser.Scale.Orientation.PORTRAIT,
    expandParent: true,
    fullscreenTarget: '#app'
  },
  audio: {
    disableWebAudio: false,
    noAudio: false
  },
  // ✅ Add physics if needed
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false
    }
  }
}

const game = new Phaser.Game(config)

// ✅ Handle orientation changes
window.addEventListener('orientationchange', () => {
  console.log('Orientation changed:', MobileOptimization.getOrientation())
  // Game will auto-scale, but you can add custom logic here
})

// ✅ Handle visibility (pause on background, resume on foreground)
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    game.events.emit('GAME_PAUSED')
  } else {
    game.events.emit('GAME_RESUMED')
  }
})