export class PauseScene extends Phaser.Scene {
  constructor() { super('PauseScene') }
 
  preload() {
    this.load.audio('tap', 'assets/sounds/tap.wav')
  }
 
  init(data) {
    this.gameSceneKey = data.gameSceneKey || 'GameScene'
  }
 
  create() {
    const w = 480
    const h = 800
 
    // Semi-transparent overlay
    const overlay = this.add.graphics()
    overlay.fillStyle(0x000000, 0.7)
    overlay.fillRect(0, 0, w, h)
 
    // Pause menu box
    const boxW = 300
    const boxH = 280
    const boxX = w / 2 - boxW / 2
    const boxY = h / 2 - boxH / 2
 
    const box = this.add.graphics()
    box.fillStyle(0x1a1208, 0.95)
    box.fillRoundedRect(boxX, boxY, boxW, boxH, 12)
    box.lineStyle(2, 0xf9a825, 1)
    box.strokeRoundedRect(boxX, boxY, boxW, boxH, 12)
 
    // Title
    this.add.text(w / 2, boxY + 30, '⏸ PAUSED', {
      fontSize: '20px', color: '#f9a825', fontStyle: 'bold'
    }).setOrigin(0.5)
 
    let btnY = boxY + 80
 
    // Resume button
    this.createButton(
      'Resume Game',
      btnY,
      '#1b5e20',
      () => {
        this.sound.play('tap')
        this.scene.resume(this.gameSceneKey)
        this.scene.stop()
      }
    )
 
    btnY += 60
 
    // Settings button
    this.createButton(
      'Settings',
      btnY,
      '#37474f',
      () => {
        this.sound.play('tap')
        this.scene.launch('SettingsScene')
      }
    )
 
    btnY += 60
 
    // Quit to Menu button
    this.createButton(
      'Quit to Menu',
      btnY,
      '#7f0000',
      () => {
        this.sound.play('tap')
        this.scene.stop(this.gameSceneKey)
        this.scene.stop()
        this.scene.start('MenuScene')
      }
    )
  }
 
  createButton(text, yPos, color, callback) {
    const w = 480
    const btnW = 200
 
    const bg = this.add.graphics()
    bg.fillStyle(Phaser.Display.Color.HexStringToColor(color).color, 0.8)
    bg.fillRoundedRect(w / 2 - btnW / 2, yPos, btnW, 40, 8)
 
    this.add.text(w / 2, yPos + 20, text, {
      fontSize: '13px', color: '#fff'
    }).setOrigin(0.5)
 
    const zone = this.add.zone(w / 2, yPos + 20, btnW + 20, 50).setInteractive()
    zone.on('pointerdown', () => callback())
  }
}