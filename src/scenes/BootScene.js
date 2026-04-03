export class BootScene extends Phaser.Scene {
  constructor() { super('BootScene') }

  create() {
    if (!localStorage.getItem('tutorialSeen')) {
      this.scene.start('TutorialScene')
    } else {
      this.scene.start('MenuScene')
    }
  }
}