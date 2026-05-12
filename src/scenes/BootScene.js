export class BootScene extends Phaser.Scene {
  constructor() { super('BootScene') }

  preload() {
    this.load.audio('tap', 'assets/sounds/tap.wav')
    this.load.audio('correct', 'assets/sounds/correct.wav')
    this.load.audio('wrong', 'assets/sounds/wrong.wav')
    this.load.audio('bgMusic', 'assets/sounds/bgMusic.mp3')
  }

  create() {
    // ✅ Start background music
    // Check if already playing (prevent multiple instances)
    if (!this.sound.get('bgMusic')) {
      const bgMusic = this.sound.add('bgMusic', {
        volume: 0.6,  // Set volume (0-1, adjust to taste)
        loop: true,   // Loop forever
        delay: 0      // Start immediately
      })
      
      // Get user preference from localStorage
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