import { ProgressStore } from '../progressStore.js'
 
export class SettingsScene extends Phaser.Scene {
  constructor() { super('SettingsScene') }

  init(data) {
    this.caller = data.caller || 'MenuScene'
    this.gameSceneKey = data.gameSceneKey || null
  }
 
  create() {
    const w = 480
    const h = 800
    
    this.cameras.main.setBackgroundColor('#1a1208')
    const inGame = this.gameSceneKey ? true : false

    // Header
    this.add.text(w / 2, 40, '⚙️ Settings', {
      fontSize: '24px', color: '#f9a825', fontStyle: 'bold'
    }).setOrigin(0.5)
 
    const backBtn = this.add.text(20, 40, '← Back', {
      fontSize: '14px', color: '#888'
    }).setInteractive()
    backBtn.on('pointerdown', () => {
      this.sound.play('tap')
      if (this.gameSceneKey) {
        this.scene.resume(this.gameSceneKey)
      }
      if (this.caller === 'PauseScene') {
        this.scene.stop()
      } else {
        this.scene.start(this.caller)
      }
    })
 
    let yPos = 100
 
    // ✅ Sound Toggle
    yPos = this.createToggleSetting(
      'Sound Effects',
      'soundEnabled',
      yPos,
      (enabled) => {
        const allSounds = this.sound.sounds
        allSounds.forEach(sound => {
          if (sound.key !== 'bgMusic') {
            sound.mute = !enabled
          }
        })
      }
    )
 
    // ✅ Music Toggle
    yPos = this.createToggleSetting(
      'Background Music',
      'musicEnabled',
      yPos,
      (enabled) => {
        const bgMusic = this.sound.get('bgMusic')
        if (bgMusic) {
          if (enabled) {
            bgMusic.play()
          } else {
            bgMusic.stop()
          }
        }
      }
    )
 
    // ✅ Haptics Toggle (mobile only)
    if (typeof Capacitor !== 'undefined') {
      yPos = this.createToggleSetting(
        'Haptic Feedback',
        'hapticsEnabled',
        yPos
      )
    }
    if (inGame) {
      this.add.text(40, yPos - 15, '🔒 Change difficulty before starting a new game', {
        fontSize: '11px', color: '#888', fontStyle: 'italic'
      })
    }
    // ✅ Difficulty Setting
    yPos = this.createRadioSetting(
      'Difficulty',
      'difficulty',
      ['Easy', 'Normal', 'Hard'],
      'Normal',
      yPos,
      { disabled: inGame }
    )
 
    // ✅ Language (placeholder)
    yPos = this.createRadioSetting(
      'Language (Coming Soon)',
      'language',
      ['English', 'Español', 'Français'],
      'English',
      yPos,
      { disabled: true }
    )
 
    // ✅ Advanced Settings
    yPos += 20
    this.add.text(40, yPos, 'Advanced Settings', {
      fontSize: '14px', color: '#888', fontStyle: 'italic'
    })
    yPos += 30
 
    // Reset Progress Button
    yPos = this.createButton(
      'Reset All Progress',
      yPos,
      '#7f0000',
      () => {
        this.showConfirmModal(
          'Are you sure?',
          'This cannot be undone!',
          () => {
            this.sound.play('tap')
            ProgressStore.reset()
            this.time.delayedCall(200, () => {
              if (this.gameSceneKey) {
                this.scene.stop(this.gameSceneKey)
              }
              
              this.scene.stop()
              this.scene.start('MenuScene')
            })
          },
          () => {
            this.sound.play('tap')
          }
        )
      }
    )
 
    // Clear Cache Button
    yPos = this.createButton(
      'Clear Cache',
      yPos,
      '#555',
      () => {
        this.sound.play('tap')
        localStorage.clear()
        this.add.text(w / 2, h - 100, 'Cache cleared', {
          fontSize: '12px', color: '#69f0ae'
        }).setOrigin(0.5)
      }
    )

    // ✅ Legal Section
    yPos += 10
    this.add.text(40, yPos, 'Legal', {
      fontSize: '14px', color: '#888', fontStyle: 'italic'
    })
    yPos += 30

    // Terms of Service Button
    yPos = this.createButton(
      'Terms of Service',
      yPos,
      '#5555aa',
      () => {
        this.sound.play('tap')
        // ✅ Open TermsScene (mobile-friendly in-game display)
        this.scene.start('TermsScene', { caller: 'SettingsScene' })
      }
    )
 
    // ✅ About Section
    yPos = h - 30
    this.add.text(w / 2, yPos, 'Sons of the Land: Ancient Wisdom v1.0', {
      fontSize: '12px', color: '#666'
    }).setOrigin(0.5)
 
    yPos += 30
    this.add.text(w / 2, yPos, 'Made with ❤️ and Phaser 3', {
      fontSize: '11px', color: '#555'
    }).setOrigin(0.5)
  }

  showConfirmModal(title, message, onConfirm, onCancel) {
    const w = 480
    const h = 800

    const overlay = this.add.graphics()
    overlay.fillStyle(0x000000, 0.6)
    overlay.fillRect(0, 0, w, h)
    overlay.setInteractive()

    const boxW = 300
    const boxH = 200
    const boxX = w / 2 - boxW / 2
    const boxY = h / 2 - boxH / 2

    const box = this.add.graphics()
    box.fillStyle(0x1a1208, 0.95)
    box.fillRoundedRect(boxX, boxY, boxW, boxH, 12)
    box.lineStyle(2, 0xf9a825, 1)
    box.strokeRoundedRect(boxX, boxY, boxW, boxH, 12)

    this.add.text(w / 2, boxY + 30, title, {
      fontSize: '18px', color: '#f9a825', fontStyle: 'bold'
    }).setOrigin(0.5)

    this.add.text(w / 2, boxY + 70, message, {
      fontSize: '14px', color: '#fff',
      wordWrap: { width: 250 },
      align: 'center'
    }).setOrigin(0.5)

    const cancelBtn = this.add.text(boxX + 30, boxY + 140, 'Cancel', {
      fontSize: '13px',
      color: '#fff',
      backgroundColor: '#37474f',
      padding: { x: 15, y: 8 }
    }).setOrigin(0, 0).setInteractive()

    cancelBtn.on('pointerdown', () => {
      overlay.destroy()
      box.destroy()
      cancelBtn.destroy()
      confirmBtn.destroy()
      if (onCancel) onCancel()
    })

    const confirmBtn = this.add.text(boxX + boxW - 30, boxY + 140, 'Reset', {
      fontSize: '13px',
      color: '#fff',
      backgroundColor: '#7f0000',
      padding: { x: 15, y: 8 }
    }).setOrigin(1, 0).setInteractive()

    confirmBtn.on('pointerdown', () => {
      overlay.destroy()
      box.destroy()
      cancelBtn.destroy()
      confirmBtn.destroy()
      if (onConfirm) onConfirm()
    })

    overlay.on('pointerdown', (pointer) => {
      pointer.stopPropagation()
    })
  }
 
  createToggleSetting(label, key, yPos, callback) {
    const w = 480
    const defaultVal = key === 'musicEnabled' ? false : true
    const enabled = this.getSetting(key, defaultVal)
 
    this.add.text(40, yPos, label, {
      fontSize: '14px', color: '#fff'
    })
 
    const toggleBg = this.add.graphics()
    const toggleX = w - 60
    const drawToggle = (isEnabled) => {
      toggleBg.clear()
      toggleBg.fillStyle(isEnabled ? 0x1b5e20 : 0x333, 1)
      toggleBg.fillRoundedRect(toggleX - 40, yPos - 8, 80, 24, 12)
      toggleBg.fillStyle(0xfff, 1)
      const circleX = isEnabled ? toggleX + 20 : toggleX - 20
      toggleBg.fillCircle(circleX, yPos + 4, 10)
    }
    drawToggle(enabled)
 
    const zone = this.add.zone(toggleX, yPos + 4, 100, 30).setInteractive()
    zone.on('pointerdown', () => {
      this.sound.play('tap')
      const newState = !this.getSetting(key, defaultVal)
      this.setSetting(key, newState)
      drawToggle(newState)
      if (callback) callback(newState)
    })
 
    return yPos + 50
  }
 
  createRadioSetting(label, key, options, defaultVal, yPos, opts = {}) {
    const w = 480
    const current = this.getSetting(key, defaultVal)
    const disabled = opts.disabled || false
 
    this.add.text(40, yPos, label, {
      fontSize: '14px', color: '#fff'
    })
    yPos += 30
 
    options.forEach((option, i) => {
      const y = yPos + i * 30
      const x = 60
      
      const isSelected = current === option
 
      const radioBg = this.add.graphics()
      radioBg.lineStyle(2, isSelected ? 0xf9a825 : 0x666, 1)
      radioBg.strokeCircle(x, y + 5, 8)
      
      if (isSelected) {
        radioBg.fillStyle(0xf9a825, 1)
        radioBg.fillCircle(x, y + 5, 5)
      }
 
      this.add.text(x + 25, y, option, {
        fontSize: '13px', color: '#fff'
      })
 
      if (!disabled) {
        const zone = this.add.zone(x + 50, y + 5, 150, 25).setInteractive()
        zone.on('pointerdown', () => {
          this.sound.play('tap')
          this.setSetting(key, option)
          this.scene.restart()
        })
      }
    })
 
    return yPos + options.length * 30 + 20
  }
 
  createButton(text, yPos, color, callback) {
    const w = 480
 
    const btnBg = this.add.graphics()
    btnBg.fillStyle(Phaser.Display.Color.HexStringToColor(color).color, 0.8)
    btnBg.fillRoundedRect(w / 2 - 100, yPos, 200, 40, 8)
 
    this.add.text(w / 2, yPos + 20, text, {
      fontSize: '13px', color: '#fff'
    }).setOrigin(0.5)
 
    const zone = this.add.zone(w / 2, yPos + 20, 220, 50).setInteractive()
    zone.on('pointerdown', () => {
      callback()
    })
 
    return yPos + 60
  }
 
  getSetting(key, defaultVal) {
    const val = localStorage.getItem(`setting_${key}`)
    return val !== null ? JSON.parse(val) : defaultVal
  }
 
  setSetting(key, value) {
    localStorage.setItem(`setting_${key}`, JSON.stringify(value))
  }
}