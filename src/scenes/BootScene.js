export class BootScene extends Phaser.Scene {
  constructor() { super('BootScene') }

  preload() {
    this.load.audio('tap', 'assets/sounds/tap.wav')
    this.load.audio('correct', 'assets/sounds/correct.wav')
    this.load.audio('wrong', 'assets/sounds/wrong.wav')
  }

  create() {
    if (!localStorage.getItem('tutorialSeen')) {
      this.scene.start('TutorialScene')
    } else {
      this.scene.start('MenuScene')
    }
  }
}