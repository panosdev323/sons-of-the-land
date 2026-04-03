import { ProgressStore } from '../progressStore.js'
 
export class SettingsScene extends Phaser.Scene {
  constructor() { super('SettingsScene') }
 
  preload() {
    this.load.audio('tap', 'assets/sounds/tap.wav')
  }
 
  create() {
    const w = 480
    const h = 800
 
    this.cameras.main.setBackgroundColor('#1a1208')
 
    // Header
    this.add.text(w / 2, 40, '⚙️ Settings', {
      fontSize: '24px', color: '#f9a825', fontStyle: 'bold'
    }).setOrigin(0.5)
 
    const backBtn = this.add.text(20, 40, '← Back', {
      fontSize: '14px', color: '#888'
    }).setInteractive()
    backBtn.on('pointerdown', () => {
      this.sound.play('tap')
      this.scene.start('MenuScene')
    })
 
    let yPos = 100
 
    // ✅ Sound Toggle
    yPos = this.createToggleSetting(
      'Sound Effects',
      'soundEnabled',
      yPos,
      (enabled) => {
        this.sound.mute = !enabled
      }
    )
 
    // ✅ Music Toggle (placeholder for future)
    yPos = this.createToggleSetting(
      'Background Music',
      'musicEnabled',
      yPos,
      (enabled) => {
        // Future: music implementation
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
 
    // ✅ Difficulty Setting
    yPos = this.createRadioSetting(
      'Difficulty',
      'difficulty',
      ['Easy', 'Normal', 'Hard'],
      'Normal',
      yPos
    )
 
    // ✅ Language (placeholder)
    yPos = this.createRadioSetting(
      'Language',
      'language',
      ['English', 'Español', 'Français'],
      'English',
      yPos
    )
 
    // ✅ Advanced Settings
    yPos += 40
    this.add.text(40, yPos, 'Advanced', {
      fontSize: '14px', color: '#888', fontStyle: 'italic'
    })
    yPos += 30
 
    // Reset Progress Button
    yPos = this.createButton(
      'Reset All Progress',
      yPos,
      '#7f0000',
      () => {
        if (confirm('Are you sure? This cannot be undone!')) {
          ProgressStore.reset()
          this.sound.play('tap')
          this.scene.start('MenuScene')
        }
      }
    )
 
    // Clear Cache Button
    yPos = this.createButton(
      'Clear Cache',
      yPos,
      '#555',
      () => {
        localStorage.clear()
        this.add.text(w / 2, h - 100, 'Cache cleared', {
          fontSize: '12px', color: '#69f0ae'
        }).setOrigin(0.5)
      }
    )
 
    // ✅ About Section
    yPos = h - 120
    this.add.text(w / 2, yPos, 'Ancient Wisdom v1.0', {
      fontSize: '12px', color: '#666'
    }).setOrigin(0.5)
 
    yPos += 30
    this.add.text(w / 2, yPos, 'Made with ❤️ and Phaser 3', {
      fontSize: '11px', color: '#555'
    }).setOrigin(0.5)
  }
 
  createToggleSetting(label, key, yPos, callback) {
    const w = 480
    const enabled = this.getSetting(key, true)
 
    this.add.text(40, yPos, label, {
      fontSize: '14px', color: '#fff'
    })
 
    // Toggle button
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
      const newState = !this.getSetting(key, true)
      this.setSetting(key, newState)
      drawToggle(newState)
      if (callback) callback(newState)
    })
 
    return yPos + 50
  }
 
  createRadioSetting(label, key, options, defaultVal, yPos) {
    const w = 480
    const current = this.getSetting(key, defaultVal)
 
    this.add.text(40, yPos, label, {
      fontSize: '14px', color: '#fff'
    })
    yPos += 30
 
    options.forEach((option, i) => {
      const y = yPos + i * 30
      const x = 60
      
      const isSelected = current === option
 
      // Radio circle
      const radioBg = this.add.graphics()
      radioBg.lineStyle(2, isSelected ? 0xf9a825 : 0x666, 1)
      radioBg.strokeCircle(x, y + 5, 8)
      
      if (isSelected) {
        radioBg.fillStyle(0xf9a825, 1)
        radioBg.fillCircle(x, y + 5, 5)
      }
 
      // Label
      this.add.text(x + 25, y, option, {
        fontSize: '13px', color: '#fff'
      })
 
      // Click zone
      const zone = this.add.zone(x + 50, y + 5, 150, 25).setInteractive()
      zone.on('pointerdown', () => {
        this.sound.play('tap')
        this.setSetting(key, option)
        this.scene.restart()  // Reload to show changes
      })
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
    zone.on('pointerdown', () => callback())
 
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