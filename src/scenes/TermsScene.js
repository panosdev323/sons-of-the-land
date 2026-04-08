export class TermsScene extends Phaser.Scene {
  constructor() { super('TermsScene') }

  init(data) {
    this.caller = data.caller || 'MenuScene'
  }

  create() {
    const w = 480
    const h = 800

    this.cameras.main.setBackgroundColor('#1a1208')

    // Header
    this.add.text(w / 2, 40, '📜 Terms of Service', {
      fontSize: '20px', color: '#f9a825', fontStyle: 'bold'
    }).setOrigin(0.5)

    const backBtn = this.add.text(20, 40, '← Back', {
      fontSize: '16px', color: '#ffffff'
    }).setInteractive()
    backBtn.on('pointerdown', () => {
      this.sound.play('tap')
      this.scene.start(this.caller)
    })

    // ✅ Create scrollable container
    const scrollContainer = this.add.container(0, 0)
    let yPos = 50

    // Content sections
    const sections = [
      {
        title: '1. Usage',
        content: 'You may play this game for personal enjoyment only. Commercial use, redistribution, or modification is prohibited without written permission.'
      },
      {
        title: '2. Data',
        content: 'We may collect anonymous gameplay data to improve the game experience. No personally identifiable information is collected or shared.'
      },
      {
        title: '3. Liability',
        content: 'The developers are not responsible for any device issues, data loss, or other damages resulting from using this game.'
      },
      {
        title: '4. Changes',
        content: 'These terms may be updated at any time. Continued use of the game constitutes acceptance of the updated terms.'
      },
      {
        title: '5. Intellectual Property',
        content: 'All game content, artwork, and code are owned by the developers. You may not copy, modify, or distribute without permission.'
      },
      {
        title: '6. Warranty Disclaimer',
        content: 'The game is provided "AS IS" without warranties of any kind. We do not guarantee the game will be error-free or uninterrupted.'
      }
    ]

    // Add intro text
    scrollContainer.add(this.add.text(w / 2, yPos, 'Welcome to Sons of the Land', {
      fontSize: '16px', color: '#f9a825', fontStyle: 'bold'
    }).setOrigin(0.5))
    yPos += 30

    scrollContainer.add(this.add.text(w / 2, yPos, 'By playing this game, you agree to these terms:', {
      fontSize: '16px', color: '#ccc',
      wordWrap: { width: 400 },
      align: 'center'
    }).setOrigin(0.5))
    yPos += 50

    // Add each section
    sections.forEach(section => {
      // Title
      scrollContainer.add(this.add.text(40, yPos, section.title, {
        fontSize: '16px', color: '#ffca28', fontStyle: 'bold'
      }))
      yPos += 25

      // Content
      scrollContainer.add(this.add.text(40, yPos, section.content, {
        fontSize: '16px', color: '#ccc',
        wordWrap: { width: 400 }
      }))
      yPos += 80
    })

    // Footer
    scrollContainer.add(this.add.text(w / 2, yPos, `© ${new Date().getFullYear()} Sons of the Land. All rights reserved.`, {
      fontSize: '16px', color: '#dcdada',
      align: 'center'
    }).setOrigin(0.5))
    yPos += 40

    // ✅ Setup scrolling (same as StatsScene)
    const panelTop = 100
    const panelHeight = h - 120
    const maxScrollY = 0
    const minScrollY = -(yPos - panelHeight)

    let isDragging = false
    let dragStartY = 0
    let dragStartContainerY = 0
    let scrollOffset = 0

    // Mask for clipping
    const maskGraphics = this.make.graphics()
    maskGraphics.fillStyle(0xffffff)
    maskGraphics.fillRect(0, panelTop, w, panelHeight)
    const mask = maskGraphics.createGeometryMask()

    scrollContainer.setMask(mask)
    scrollContainer.y = panelTop

    this.input.on('pointerdown', (pointer) => {
      if (pointer.y >= panelTop && pointer.y <= panelTop + panelHeight) {
        isDragging = true
        dragStartY = pointer.y
        dragStartContainerY = scrollOffset
      }
    })

    this.input.on('pointermove', (pointer) => {
      if (!isDragging || !pointer.isDown) return
      const delta = pointer.y - dragStartY
      let newOffset = dragStartContainerY + delta
      newOffset = Phaser.Math.Clamp(newOffset, minScrollY, maxScrollY)
      scrollOffset = newOffset
      scrollContainer.y = panelTop + scrollOffset
    })

    this.input.on('pointerup', () => {
      isDragging = false
    })

    // Cleanup
    this.events.on('shutdown', () => {
      this.children.list.forEach(c => c.destroy())
    })
  }
}