import { CIVILIZATIONS } from '../quotes.js'

export class AuthorScene extends Phaser.Scene {
  constructor() { super('AuthorScene') }

  init(data) {
    this.civId = data.civId
  }

  create() {
    const scene = this
    const civ = CIVILIZATIONS.find(c => c.id === this.civId)
    this.cameras.main.setBackgroundColor(civ.bg)
    const w = 480

    // Header
    const topBg = this.add.graphics()
    topBg.fillStyle(0x000000, 0.6)
    topBg.fillRect(0, 0, w, 56)

    const back = this.add.text(16, 16, '← Menu', {
      fontSize: '12px', color: '#dcdada'
    }).setInteractive()
    back.on('pointerdown', () => scene.scene.start('MenuScene'))

    this.add.text(w / 2, 16, civ.emoji + ' ' + civ.name, {
      fontSize: '16px', color: '#fff', fontStyle: 'bold'
    }).setOrigin(0.5, 0)

    this.add.text(w / 2, 76, 'Choose an Author', {
      fontSize: '16px', color: '#f9a825'
    }).setOrigin(0.5)

    const civColor = Phaser.Display.Color.HexStringToColor(civ.colorHex).color

    // Scrollable container
    const scrollY = 130
    const viewHeight = 320

    const container = this.add.container(0, scrollY)

    // Mask MUST start at 0 relative to container
    const maskShape = this.make.graphics({})
    maskShape.fillStyle(0xffffff)
    maskShape.fillRect(0, scrollY, w, viewHeight)
    const mask = maskShape.createGeometryMask()
    container.setMask(mask)

    let yOffset = 0
    civ.authors.forEach((author, i) => {
      const x = w / 2
      const y = i * 70

      const bg = this.add.graphics()
      bg.fillStyle(0x000000, 0.5)
      bg.lineStyle(2, civColor, 0.7)
      bg.fillRoundedRect(x - 170, y - 28, 340, 56, 10)
      bg.strokeRoundedRect(x - 170, y - 28, 340, 56, 10)
      container.add(bg)

      const nameText = this.add.text(x - 140, y - 8, author.emoji + ' ' + author.name, {
        fontSize: '16px', color: '#fff', fontStyle: 'bold'
      })
      const quotesText = this.add.text(x - 140, y + 12, `${author.quotes.length} quotes`, {
        fontSize: '11px', color: '#aaa'
      })
      container.add([nameText, quotesText])

      const zone = this.add.zone(x, y, 340, 56).setInteractive()
      zone.on('pointerover', () => {
        bg.clear()
        bg.fillStyle(0x333333, 0.8)
        bg.lineStyle(2, civColor, 1)
        bg.fillRoundedRect(x - 170, y - 28, 340, 56, 10)
        bg.strokeRoundedRect(x - 170, y - 28, 340, 56, 10)
      })
      zone.on('pointerout', () => {
        bg.clear()
        bg.fillStyle(0x000000, 0.5)
        bg.lineStyle(2, civColor, 0.7)
        bg.fillRoundedRect(x - 170, y - 28, 340, 56, 10)
        bg.strokeRoundedRect(x - 170, y - 28, 340, 56, 10)
      })
      zone.on('pointerdown', () => {
        scene.scene.start('GameScene', { civId: civ.id, authorName: author.name })
      })
      container.add(zone)
    })

    // Enable scrolling
    let startY = 0
    this.input.on('pointerdown', pointer => startY = pointer.y)
    this.input.on('pointermove', pointer => {
      if (!pointer.isDown) return

      const delta = pointer.y - startY
      startY = pointer.y

      container.y += delta

      const contentHeight = civ.authors.length * 70
      const minY = scrollY - (contentHeight - viewHeight)

      container.y = Phaser.Math.Clamp(container.y, minY, scrollY)
    })
  }
}