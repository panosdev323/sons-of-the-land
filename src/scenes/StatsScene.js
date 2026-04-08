import { ProgressStore } from '../progressStore.js'
/**
 * StatsScene - Displays player's overall progress, high scores, and achievements.
 * This scene provides a visual summary of the player's accomplishments across all civilizations.
 * It shows global score, number of civilizations completed, top high scores, and achievement badges.
 * Players can access this scene from the main menu to track their progress and set goals.
 */

export class StatsScene extends Phaser.Scene {
  constructor() { super('StatsScene') }
 
  create() {
    const w = 480
    const h = 800
 
    this.cameras.main.setBackgroundColor('#1a1208')

    // ✅ Create a container for scrollable content
    const scrollContainer = this.add.container(0, 0)
    let yPos = 100

    // Header (stays fixed, not in container)
    this.add.text(w / 2, 40, '📊 Statistics', {
      fontSize: '24px', color: '#f9a825', fontStyle: 'bold'
    }).setOrigin(0.5)
 
    const backBtn = this.add.text(20, 40, '← Back', {
      fontSize: '16px', color: '#ffffff', backgroundColor: 'rgba(255,255,255,0.1)', padding: { x: 10, y: 10 }
    }).setInteractive()
    backBtn.on('pointerdown', () => {
      this.sound.play('tap')
      this.scene.start('MenuScene')
    })
 
    const globalScore = ProgressStore.getGlobalScore()
    const allProgress = ProgressStore.getAllProgress()
    const completedCount = Object.values(allProgress).filter(p => p.completed).length
    const totalCivs = Object.keys(allProgress).length
 
    // ✅ Overall Statistics (in container)
    this.addStatBoxToContainer(scrollContainer, 'Global Score', `${globalScore}`, yPos, w)
    yPos += 80
 
    this.addStatBoxToContainer(scrollContainer, 'Civilizations', `${completedCount} / ${totalCivs}`, yPos, w)
    yPos += 80
 
    // ✅ High Scores Table
    scrollContainer.add(this.add.text(40, yPos, 'Top Civilizations', {
      fontSize: '20px', color: '#f9a825', fontStyle: 'bold'
    }))
    yPos += 35
 
    const topCivs = Object.entries(allProgress)
      .map(([id, data]) => ({ id, ...data }))
      .filter(c => c.highScore > 0)
      .sort((a, b) => b.highScore - a.highScore)
      .slice(0, 10)
 
    topCivs.forEach((civ, i) => {
      const rank = `#${i + 1}`
      const score = `${civ.highScore} pts`
      
      scrollContainer.add(this.add.text(50, yPos, rank, {
        fontSize: '16px', color: '#f9a825'
      }))
      
      scrollContainer.add(this.add.text(100, yPos, civ.id.toUpperCase(), {
        fontSize: '16px', color: '#fff'
      }))
      
      scrollContainer.add(this.add.text(w - 50, yPos, score, {
        fontSize: '16px', color: '#69f0ae'
      }).setOrigin(1, 0))
 
      yPos += 30
    })
 
    if (topCivs.length === 0) {
      scrollContainer.add(this.add.text(50, yPos, 'Play some levels to earn scores!', {
        fontSize: '16px', color: '#dcdada'
      }))
    }
 
    yPos += 40
 
    // ✅ Achievement Badges
    scrollContainer.add(this.add.text(40, yPos, 'Achievements', {
      fontSize: '20px', color: '#f9a825', fontStyle: 'bold'
    }))
    yPos += 35
 
    const achievements = [
      { name: '🌟 First Step', desc: 'Complete your first level', unlocked: completedCount >= 1 },
      { name: '🔥 On Fire', desc: 'Get a 5-streak combo', unlocked: false },
      { name: '🏆 Scholar', desc: 'Complete 10 civilizations', unlocked: completedCount >= 10 },
      { name: '🌍 World Master', desc: 'Complete all civilizations', unlocked: completedCount === totalCivs }
    ]
 
    achievements.forEach(ach => {
      const opacity = ach.unlocked ? 1 : 0.3
      scrollContainer.add(this.add.text(50, yPos, ach.name, {
        fontSize: '18px', color: '#fff', alpha: opacity
      }))
      scrollContainer.add(this.add.text(50, yPos + 20, ach.desc, {
        fontSize: '16px', color: '#dcdada', alpha: opacity
      }))
      yPos += 60
    })

    // ✅ Enable scrolling with mouse wheel / touch
    this.input.on('wheel', (pointer, over, deltaY) => {
      scrollContainer.y -= deltaY * 0.5
      // Clamp scrolling to prevent over-scrolling
      const maxScroll = Math.max(0, yPos - (h - 100))
      scrollContainer.y = Phaser.Math.Clamp(scrollContainer.y, -maxScroll, 0)
    })

    // ✅ Touch drag scrolling (mobile)
    let lastY = 0
    this.input.on('pointerdown', (pointer) => {
      lastY = pointer.y
    })
    this.input.on('pointermove', (pointer) => {
      if (pointer.isDown) {
        const delta = pointer.y - lastY
        scrollContainer.y += delta
        scrollContainer.y = Phaser.Math.Clamp(scrollContainer.y, -Math.max(0, yPos - (h - 100)), 0)
        lastY = pointer.y
      }
    })
 
    this.events.on('shutdown', () => {
      this.children.list.forEach(c => c.destroy())
    })
  }

  // ✅ Updated helper method
  addStatBoxToContainer(container, label, value, yPos, w) {
    const boxW = 180
 
    const bg = this.add.graphics()
    bg.fillStyle(0x2a1f00, 0.8)
    bg.fillRoundedRect(w / 2 - boxW / 2, yPos, boxW, 60, 8)
    bg.lineStyle(2, 0xf9a825, 0.5)
    bg.strokeRoundedRect(w / 2 - boxW / 2, yPos, boxW, 60, 8)
    container.add(bg)
 
    const labelText = this.add.text(w / 2, yPos + 15, label, {
      fontSize: '16px', color: '#dcdada'
    }).setOrigin(0.5)
    container.add(labelText)
 
    const valueText = this.add.text(w / 2, yPos + 40, value, {
      fontSize: '20px', color: '#f9a825', fontStyle: 'bold'
    }).setOrigin(0.5)
    container.add(valueText)
  }
}