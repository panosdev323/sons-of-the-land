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
 
    // Header
    this.add.text(w / 2, 40, '📊 Statistics', {
      fontSize: '24px', color: '#f9a825', fontStyle: 'bold'
    }).setOrigin(0.5)
 
    const backBtn = this.add.text(20, 40, '← Back', {
      fontSize: '14px', color: '#888'
    }).setInteractive()
    backBtn.on('pointerdown', () => {
      this.sound.play('tap')
      this.scene.start('MenuScene')
    })
 
    const globalScore = ProgressStore.getGlobalScore()
    const allProgress = ProgressStore.getAllProgress()
    const completedCount = Object.values(allProgress).filter(p => p.completed).length
    const totalCivs = Object.keys(allProgress).length
 
    let yPos = 100
 
    // ✅ Overall Statistics
    this.addStatBox('Global Score', `${globalScore}`, yPos)
    yPos += 80
 
    this.addStatBox('Civilizations', `${completedCount} / ${totalCivs}`, yPos)
    yPos += 80
 
    // ✅ High Scores Table
    this.add.text(40, yPos, 'Top Civilizations', {
      fontSize: '14px', color: '#f9a825', fontStyle: 'bold'
    })
    yPos += 35
 
    // Get top 5 by high score
    const topCivs = Object.entries(allProgress)
      .map(([id, data]) => ({ id, ...data }))
      .filter(c => c.highScore > 0)
      .sort((a, b) => b.highScore - a.highScore)
      .slice(0, 5)
 
    topCivs.forEach((civ, i) => {
      const rank = `#${i + 1}`
      const score = `${civ.highScore} pts`
      
      this.add.text(50, yPos, rank, {
        fontSize: '12px', color: '#f9a825'
      })
      
      this.add.text(100, yPos, civ.id.toUpperCase(), {
        fontSize: '12px', color: '#fff'
      })
      
      this.add.text(w - 50, yPos, score, {
        fontSize: '12px', color: '#69f0ae'
      }).setOrigin(1, 0)
 
      yPos += 30
    })
 
    if (topCivs.length === 0) {
      this.add.text(50, yPos, 'Play some levels to earn scores!', {
        fontSize: '12px', color: '#666'
      })
    }
 
    yPos += 40
 
    // ✅ Achievement Badges (future)
    this.add.text(40, yPos, 'Achievements', {
      fontSize: '14px', color: '#f9a825', fontStyle: 'bold'
    })
    yPos += 35
 
    const achievements = [
      { name: '🌟 First Step', desc: 'Complete your first level', unlocked: completedCount >= 1 },
      { name: '🔥 On Fire', desc: 'Get a 5-streak combo', unlocked: false },
      { name: '🏆 Scholar', desc: 'Complete 10 civilizations', unlocked: completedCount >= 10 },
      { name: '🌍 World Master', desc: 'Complete all civilizations', unlocked: completedCount === totalCivs }
    ]
 
    achievements.forEach(ach => {
      const opacity = ach.unlocked ? 1 : 0.3
      this.add.text(50, yPos, ach.name, {
        fontSize: '12px', color: '#fff', alpha: opacity
      })
      this.add.text(50, yPos + 18, ach.desc, {
        fontSize: '10px', color: '#888', alpha: opacity
      })
      yPos += 45
    })
    // ✅ Clean up on scene shutdown
    this.events.on('shutdown', () => {
      this.children.list.forEach(c => c.destroy())
    })
  }
 
  addStatBox(label, value, yPos) {
    const w = 480
    const boxW = 180
 
    const bg = this.add.graphics()
    bg.fillStyle(0x2a1f00, 0.8)
    bg.fillRoundedRect(w / 2 - boxW / 2, yPos, boxW, 60, 8)
    bg.lineStyle(2, 0xf9a825, 0.5)
    bg.strokeRoundedRect(w / 2 - boxW / 2, yPos, boxW, 60, 8)
 
    this.add.text(w / 2, yPos + 15, label, {
      fontSize: '11px', color: '#888'
    }).setOrigin(0.5)
 
    this.add.text(w / 2, yPos + 40, value, {
      fontSize: '20px', color: '#f9a825', fontStyle: 'bold'
    }).setOrigin(0.5)
  }
}