import { AdManager } from '../AdManager' 

export class BootScene extends Phaser.Scene {
    constructor() { super('BootScene') }

    preload() {
        this.load.audio('tap', 'assets/sounds/tap.wav')
        this.load.audio('correct', 'assets/sounds/correct.wav')
        this.load.audio('wrong', 'assets/sounds/wrong.wav')
        this.load.audio('bgMusic', 'assets/sounds/bgMusic.mp3')
    }

    async create() {
        // Initialize Ad Manager
        await AdManager.init()
        
        // Start background music
        if (!this.sound.get('bgMusic')) {
            const bgMusic = this.sound.add('bgMusic', {
                volume: 0.6,
                loop: true,
                delay: 0
            })
            
            const musicEnabled = localStorage.getItem('setting_musicEnabled') === 'true'
            if (musicEnabled) {
                bgMusic.play()
            }
        }

        if (!localStorage.getItem('tutorialSeen')) {
            this.scene.start('TutorialScene')
        } else {
            this.scene.start('MenuScene')
        }
    }
}