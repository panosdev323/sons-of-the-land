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
import { AdMob, AdmobConsentStatus } from '@capacitor-community/admob';

async function initializeAdMob() {
    try {
        // 1. Ζήτα consent info
        const consentInfo = await AdMob.requestConsentInfo()
        // 2. Αν χρειάζεται consent form, δείξε το
        if (consentInfo.isConsentFormAvailable && 
            consentInfo.status === AdmobConsentStatus.REQUIRED) {
            await AdMob.showConsentForm()
        }
        // 3. Initialize AdMob μετά το consent
        await AdMob.initialize();
        console.log("✅ AdMob initialized successfully");
    } catch (error) {
        console.error("❌ Failed to initialize AdMob:", error);
    }
}

const config = {
  type: Phaser.AUTO,
  parent: 'app',
  width: 480,
  height: 854,
  backgroundColor: '#1a1208',
  resolution: Math.min(window.devicePixelRatio, 2),
  render: {
    antialias: true,
    roundPixels: true,
    pixelArt: false
  },
  scene: [BootScene, MenuScene, AuthorScene, GameScene, TutorialScene, SettingsScene, StatsScene, PauseScene, TermsScene],
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    orientation: Phaser.Scale.Orientation.PORTRAIT,
    expandParent: true,
    fullscreenTarget: '#app'
  },
  audio: {
    disableWebAudio: false,
    noAudio: false
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false
    }
  }
}

async function startApp() {
    MobileOptimization.applySafeAreaCSS()
    await initializeAdMob()
    
    const game = new Phaser.Game(config)
    setTimeout(() => game.scale.refresh(), 150)

    window.addEventListener('orientationchange', () => {
        console.log('Orientation changed:', MobileOptimization.getOrientation())
    })

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            game.events.emit('GAME_PAUSED')
        } else {
            game.events.emit('GAME_RESUMED')
        }
    })
}

startApp()