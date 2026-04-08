import { ProgressStore } from '../progressStore.js'

export class MenuScene extends Phaser.Scene {
  constructor() { super('MenuScene') }

  async create() {
    const w = this.scale.width
    const canvasHeight = this.scale.height

    // === Load saved progress first ===
    await ProgressStore.load()

    this.cameras.main.setBackgroundColor('#1a1208')

    // === FIXED HEADER (not in container, always visible) ===
    this.add.text(w / 2, 100, '📜', { fontSize: '64px' }).setOrigin(0.5)
    this.add.text(w / 2, 165, 'Sons of the Land', {
      fontSize: '28px', color: '#f9a825',
      fontStyle: 'bold', stroke: '#000', strokeThickness: 4
    }).setOrigin(0.5)
    this.add.text(w / 2, 200, 'ANCIENT WISDOM', {
      fontSize: '22px', color: '#d4af37',
      fontStyle: 'italic', stroke: '#000', strokeThickness: 4,
      shadow: { offsetX: 3, offsetY: 3, color: '#000000', blur: 5, fill: true }
    }).setOrigin(0.5)
    
    // ✅ Display global score in header
    const globalScore = ProgressStore.getGlobalScore()
    this.add.text(w / 2, 232, `Test Your Knowledge • Score: ${globalScore}`, {
      fontSize: '16px', color: '#69f0ae'
    }).setOrigin(0.5)

    // ✅ Show completion message if all civilizations done
    const allProgress = ProgressStore.getAllProgress()
    const completedCount = Object.values(allProgress).filter(p => p.completed).length
    const totalCivs = Object.keys(allProgress).length
    
    if (completedCount === totalCivs && totalCivs > 0) {
      this.add.text(w / 2, 270, '🎉 Master of Ancient Wisdom! 🎉', {
        fontSize: '16px', color: '#ffd700', fontStyle: 'bold'
      }).setOrigin(0.5)
    }

    // === Settings Button ===
    const settingsBtn = this.add.text(75, 25, '⚙️ Settings', {
      fontSize: '16px',
      backgroundColor: '#37474f',
      color: '#fff',
      padding: { x: 18, y: 10 },
    }).setOrigin(0.5).setInteractive()

    settingsBtn.on('pointerover', () => settingsBtn.setScale(1.05))
    settingsBtn.on('pointerout', () => settingsBtn.setScale(1))
    settingsBtn.on('pointerdown', () => {
      this.sound.play('tap')
      this.scene.start('SettingsScene', { caller: 'MenuScene' })
    })

    // === Stats Button ===
    const statsBtn = this.add.text(w - 63, 25, '📊 Stats', {
      fontSize: '16px',
      backgroundColor: '#37474f',
      color: '#fff',
      padding: { x: 18, y: 10 },
    }).setOrigin(0.5).setInteractive()

    statsBtn.on('pointerover', () => statsBtn.setScale(1.05))
    statsBtn.on('pointerout', () => statsBtn.setScale(1))
    statsBtn.on('pointerdown', () => {
      this.sound.play('tap')
      this.scene.start('StatsScene')
    })

    const line = this.add.graphics()
    line.lineStyle(1, 0xf9a825, 0.4)
    line.lineBetween(60, 265, w - 60, 265)

    this.add.text(w / 2, 288, 'Choose Your Chapter', {
      fontSize: '16px', color: '#dcdada',
    }).setOrigin(0.5)

    // === SCROLL PANEL SETUP ===
    const panelTop = 310      // y where the scrollable panel starts
    const panelBottom = canvasHeight - 20  // y where it ends
    const panelHeight = panelBottom - panelTop

    // Clip mask so items outside the panel are hidden
    const maskGraphics = this.make.graphics()
    maskGraphics.fillStyle(0xffffff)
    maskGraphics.fillRect(0, panelTop, w, panelHeight)
    const mask = maskGraphics.createGeometryMask()

    // Container that will scroll
    const menuContainer = this.add.container(0, panelTop)
    menuContainer.setMask(mask)

    // === Civilization Buttons ===
    const civs = [
      { name: 'Ancient Greece',    emoji: '🏛️', color: '#1565c0', id: 'greece' },
      { name: 'Ancient Rome',      emoji: '⚔️', color: '#7f0000', id: 'rome' },
      { name: 'Ancient Egypt',     emoji: '𓂀', color: '#f9a825', id: 'egypt' },
      { name: 'Byzantine',         emoji: '✝️', color: '#6a1b9a', id: 'byzantine' },
      { name: 'Achaemenid',        emoji: '🏺', color: '#8b0000', id: 'achaemenid' },
      { name: 'Ancient China',     emoji: '🏯', color: '#8b4513', id: 'china' },
      { name: 'Ancient India',     emoji: '🕉️', color: '#ffd700', id: 'india' },
      { name: 'Mesopotamia',       emoji: '🧱', color: '#38bea3', id: 'mesopotamia' },
      { name: 'Ancient Japan',     emoji: '⛩️', color: '#c62828', id: 'japan' },
      { name: 'Viking & Norse',    emoji: '⚡', color: '#4a6fa5', id: 'norse' },
      { name: 'Ottoman Empire',    emoji: '🕌', color: '#1b5e20', id: 'ottoman' },
      { name: 'Ancient Israel',    emoji: '✡️', color: '#1565c0', id: 'israel' },
      { name: 'Maurya Empire',     emoji: '☸️', color: '#e65100', id: 'maurya' },
      { name: 'Mongol Empire',     emoji: '🏹', color: '#4e342e', id: 'mongol' },
      { name: 'Mughal Empire',     emoji: '👑', color: '#00695c', id: 'mughal' },
      { name: 'Ancient Arabia',    emoji: '🌴', color: '#f57f17', id: 'arabia' },
      { name: 'Mali Empire',       emoji: '🟢', color: '#558b2f', id: 'mali' },
      { name: 'Aztec Empire',      emoji: '🦅', color: '#006064', id: 'aztec' },
      { name: 'Carthage',          emoji: '🐘', color: '#4527a0', id: 'carthage' },
      { name: 'Sassanid Empire',   emoji: '🗡️', color: '#d32f2f', id: 'sassanid' },
      { name: 'Inca Empire',       emoji: '🌄', color: '#ff7043', id: 'inca' },
      { name: 'Kingdom of Kush',   emoji: '🐆', color: '#6d4c41', id: 'kush' },
      { name: 'Phoenicians',       emoji: '⛵', color: '#ffa000', id: 'phoenicia' },
      { name: 'Hittites',          emoji: '🛡️', color: '#795548', id: 'hittites' },
      { name: 'Holy Roman Empire', emoji: '🏰', color: '#4b0082', id: 'holy_roman' },
      { name: 'Babylonian Empire', emoji: '📜', color: '#f57c00', id: 'babylon' },
      { name: 'Assyrian Empire',   emoji: '🪓', color: '#8b0000', id: 'assyria' },
      { name: 'Maya Civilization', emoji: '☀️', color: '#388e3c', id: 'maya' },
      { name: 'Axumite Empire',    emoji: '✝️', color: '#6d4c41', id: 'axum' },
      { name: 'Great Zimbabwe',    emoji: '⛰️', color: '#795548', id: 'great_zimbabwe' },
      { name: 'Gupta Empire',      emoji: '📿', color: '#ffb300', id: 'gupta' },
      { name: 'Songhai Empire',    emoji: '🌍', color: '#33691e', id: 'songhai' },
      { name: 'Parthian Empire',   emoji: '🏇', color: '#4e342e', id: 'parthia' },
      { name: 'Seleucid Empire',   emoji: '🛕', color: '#8b0000', id: 'seleucid' },
      { name: 'Celtic Tribes',     emoji: '🌿', color: '#2e7d32', id: 'celtic' },
      { name: 'Mississippian Culture', emoji: '⛺', color: '#795548', id: 'mississippian' },
      { name: 'Iroquois Confederacy',  emoji: '🍁', color: '#2e7d32', id: 'iroquois' },
      { name: 'Pueblo Peoples',        emoji: '🏜️', color: '#8d6e63', id: 'pueblo' },
      { name: 'Tiahuanaco / Tiwanaku', emoji: '🗿', color: '#6d4c41', id: 'tiwanaku' },
      { name: 'Mapuche',               emoji: '🌲', color: '#33691e', id: 'mapuche' },
      { name: 'Sumerians',             emoji: '📝', color: '#a0522d', id: 'sumerians' },
    ]

    const itemHeight = 80
    const totalContentHeight = civs.length * itemHeight + 60 // +60 for footer

    civs.forEach((civ, i) => {
      const x = w / 2
      const y = i * itemHeight + 36
      const civColor = Phaser.Display.Color.HexStringToColor(civ.color).color
      const done = ProgressStore.isCompleted(civ.id)

      const bg = this.add.graphics()

      const drawBg = (hover) => {
        bg.clear()
        if (done) {
          // Completed: muted golden fill
          bg.fillStyle(0x2a1f00, 0.9)
          bg.lineStyle(2, 0xf9a825, 1)
        } else if (hover) {
          bg.fillStyle(0x333333, 0.8)
          bg.lineStyle(2, civColor, 1)
        } else {
          bg.fillStyle(0x000000, 0.5)
          bg.lineStyle(2, civColor, 1)
        }
        bg.fillRoundedRect(x - 160, y - 28, 320, 56, 10)
        bg.strokeRoundedRect(x - 160, y - 28, 320, 56, 10)
      }

      drawBg(false)

      const emojiText = this.add.text(x - 120, y, civ.emoji, { fontSize: '24px' }).setOrigin(0.5)

      const nameText = this.add.text(x - 90, y, civ.name, {
        fontSize: '16px',
        color: done ? '#a08040' : '#fff',   // dimmed gold when done
        fontStyle: 'bold',
        wordWrap: { width: 170 }
      }).setOrigin(0, 0.5)

      // ✅ Display progress for incomplete civilizations
      const civProgress = ProgressStore.getLevel(civ.id)
      const progressText = this.add.text(x + 140, y, done ? '✅' : `Lvl ${civProgress}`, {
        fontSize: '16px',
        color: done ? '#f9a825' : '#dcdada',
        backgroundColor: done ? '#1a1208' : undefined,
        padding: done ? { x: 4, y: 2 } : undefined
      }).setOrigin(1, 0.5)

      const zone = this.add.zone(x, y, 320, 56).setInteractive()

      if (!done) {
        // Only add hover/click on incomplete chapters
        zone.on('pointerover', () => {
          drawBg(true)
          // ✅ Hover feedback on text
          nameText.setScale(1.05)
        })
        zone.on('pointerout', () => {
          drawBg(false)
          nameText.setScale(1)
        })
        zone.on('pointerdown', () => {
          this.sound.play('tap')
          this.tweens.add({
            targets: [nameText, emojiText],
            scale: 1.1,
            duration: 150,
            yoyo: true
          })
          // ✅ FIX: Pass levelScore to GameScene
          const lastLevel = ProgressStore.getLevel(civ.id)
          this.scene.start('GameScene', {
            civId: civ.id,
            mode: 'mixed',
            level: lastLevel,
            levelScore: 0,
            streak: 0
          })
        })
      } else {
        // Completed: subtle pulse on tap but no navigation
        zone.on('pointerdown', () => {
          this.sound.play('tap')
          this.tweens.add({
            targets: [bg, nameText],
            alpha: 0.4,
            duration: 120,
            yoyo: true
          })
        })
      }

      menuContainer.add([bg, emojiText, nameText, progressText, zone])
    })

    // Footer inside container
    const footer = this.add.text(w / 2, civs.length * itemHeight + 36, 'Test your knowledge of the ancient world', {
      fontSize: '16px', color: '#555'
    }).setOrigin(0.5)
    menuContainer.add(footer)

    // === SCROLL ARROW INDICATOR ===
    // Bouncing down arrow to signal scrollability
    const arrowText = this.add.text(w / 2, panelBottom - 28, '▼  scroll  ▼', {
      fontSize: '16px', color: '#f9a825', alpha: 0.8
    }).setOrigin(0.5)

    this.tweens.add({
      targets: arrowText,
      y: panelBottom - 18,
      duration: 700,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    })

    // Fade out arrow once user scrolls
    let arrowFaded = false

    // Top fade overlay (darkens top edge of panel)
    const topFade = this.add.graphics()
    topFade.fillGradientStyle(0x1a1208, 0x1a1208, 0x1a1208, 0x1a1208, 0.8, 0.8, 0, 0)
    topFade.fillRect(0, panelTop, w, 28)

    // Bottom fade overlay
    const bottomFade = this.add.graphics()
    bottomFade.fillGradientStyle(0x1a1208, 0x1a1208, 0x1a1208, 0x1a1208, 0, 0, 0.9, 0.9)
    bottomFade.fillRect(0, panelBottom - 50, w, 50)

    // === SCROLL LOGIC (panel only) ===
    const maxScrollY = 0
    const minScrollY = -(totalContentHeight - panelHeight)

    let isDragging = false
    let dragStartPointerY = 0
    let dragStartContainerLocalY = 0

    let scrollOffset = 0

    // ✅ FIX: Prevent tap sound on background
    this.input.on('pointerdown', (pointer) => {
      // Only start drag if pointer is inside the panel
      if (pointer.y >= panelTop && pointer.y <= panelBottom) {
        isDragging = true
        dragStartPointerY = pointer.y
        dragStartContainerLocalY = scrollOffset
      }
    })

    this.input.on('pointermove', (pointer) => {
      if (!isDragging || !pointer.isDown) return
      const delta = pointer.y - dragStartPointerY
      let newOffset = dragStartContainerLocalY + delta
      newOffset = Phaser.Math.Clamp(newOffset, minScrollY, maxScrollY)
      scrollOffset = newOffset
      menuContainer.y = panelTop + scrollOffset

      // Fade out scroll arrow after first drag
      if (!arrowFaded && Math.abs(delta) > 50) {
        arrowFaded = true
        this.tweens.add({
          targets: arrowText,
          alpha: 0,
          duration: 400,
          onComplete: () => arrowText.destroy()
        })
      }
    })

    this.input.on('pointerup', () => { isDragging = false })

    // ✅ Clean up all objects when scene ends
    this.events.on('shutdown', () => {
      menuContainer.destroy(true)
      this.input.off('pointerdown')
      this.input.off('pointermove')
      this.input.off('pointerup')
    })
  }
}