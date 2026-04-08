import Phaser from 'phaser'

export class TutorialScene extends Phaser.Scene {
  constructor() { super('TutorialScene') }
 
  create() {
    const w = 480
    const h = 800
 
    this.cameras.main.setBackgroundColor('#1a1208')
 
    const slides = [
      {
        title: 'Welcome to Sons of the Land',
        subtitle:'Ancient Wisdom',
        content: 'Test your knowledge of ancient civilizations through famous quotes and historical facts!',
        icon: '📜'
      },
      {
        title: 'How to Play',
        content: 'Answer questions about ancient civilizations - complete famous quotes or answer historical facts. Choose from 4 options.',
        icon: '❓'
      },
      {
        title: 'Scoring',
        content: 'Each correct answer earns points. Your combo multiplier increases with consecutive correct answers.',
        icon: '🔥'
      },
      {
        title: 'Global Score',
        content: 'Your score carries across all civilizations. Collect 100 points to earn a bonus life!',
        icon: '⭐'
      },
      {
        title: 'Track Progress',
        content: 'See your high scores and completed civilizations in the Statistics section.',
        icon: '📊'
      }
    ]
 
    let currentSlide = 0
 
    const displaySlide = () => {
      // Clear previous
      this.children.list.slice().forEach(c => c.destroy())
 
      const slide = slides[currentSlide]
 
      // Background
      this.cameras.main.setBackgroundColor('#1a1208')
 
      // Icon
      this.add.text(w / 2, 100, slide.icon, {
        fontSize: '80px'
      }).setOrigin(0.5)
 
      // Title
      this.add.text(w / 2, 220, slide.title, {
        fontSize: '20px', color: '#f9a825', fontStyle: 'bold'
      }).setOrigin(0.5)

      // Subtitle (only if it exists)
      if (slide.subtitle) {
        this.add.text(w / 2, 245, slide.subtitle, {
          fontSize: '18px', color: '#d4af37', fontStyle: 'italic',
          shadow: { offsetX: 2, offsetY: 2, color: '#000000', blur: 3, fill: true }
        }).setOrigin(0.5)
      }
 
      // Content
      this.add.text(w / 2, 330, slide.content, {
        fontSize: '16px', color: '#fff',
        wordWrap: { width: 400 },
        align: 'center'
      }).setOrigin(0.5)
 
      // Dots
      let dotsY = 450
      for (let i = 0; i < slides.length; i++) {
        const dotColor = i === currentSlide ? 0xf9a825 : 0x555
        const dot = this.add.graphics()
        dot.fillStyle(dotColor, 1)
        dot.fillCircle(w / 2 - 50 + i * 20, dotsY, 5)
      }
 
      // Buttons
      let btnY = 550
 
      // Previous button
      if (currentSlide > 0) {
        const prevBtn = this.add.text(60, btnY, '← Previous', {
        fontSize: '16px', color: '#ffffff', backgroundColor: 'rgba(255,255,255,0.1)', padding: { x: 18, y: 14 }
        }).setInteractive()
        prevBtn.on('pointerdown', () => {
          this.sound.play('tap')
          currentSlide--
          displaySlide()
        })
      }
 
      // Next/Skip button
      const nextText = currentSlide === slides.length - 1 ? 'Start Game' : 'Next'
      const nextBtn = this.add.text(w - 60, btnY, `${nextText} →`, {
        fontSize: '16px', color: '#f9a825', backgroundColor: 'rgba(40, 30, 0, 0.8)', padding: { x: 10, y: 14 }
      }).setOrigin(1, 0).setInteractive()
      nextBtn.on('pointerdown', () => {
        this.sound.play('tap')
        if (currentSlide === slides.length - 1) {
          localStorage.setItem('tutorialSeen', 'true')
          this.scene.start('MenuScene')
        } else {
          currentSlide++
          displaySlide()
        }
      })
 
      // Skip button (always available)
      const skipBtn = this.add.text(w / 2, btnY + 120, 'Skip Tutorial', {
        fontSize: '16px', color: '#ffffff', backgroundColor: 'rgba(255,255,255,0.1)', padding: { x: 18, y: 14 }
      }).setOrigin(0.5).setInteractive()
      skipBtn.on('pointerdown', () => {
        this.sound.play('tap')
        localStorage.setItem('tutorialSeen', 'true')
        this.scene.start('MenuScene')
      })
    }
 
    displaySlide()
  }
}