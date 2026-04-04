import { CIVILIZATIONS } from '../quotes.js'
import { ProgressStore } from '../progressStore.js'

export class GameScene extends Phaser.Scene {
    constructor() { super('GameScene') }

    init(data) {
        this.civId = data.civId || 'greece'
        this.authorName = data.authorName || null
        this.mode = 'mixed'
        this.level = data.level || 1
        
        // ✅ FIXED: Load global score from ProgressStore
        this.globalScore = ProgressStore.getGlobalScore()
        this.globalLives = ProgressStore.getGlobalLives()
        
        // Level-specific score (for feedback)
        this.levelScore = data.levelScore ?? 0
        this.levelLives = data.levelLives ?? 3
        this.streak = data.streak ?? 0
    }

    create() {
        const LEVEL_SIZE = 5

        this.civ = CIVILIZATIONS.find(c => c.id === this.civId)

        // === GET ALL QUOTES ===
        let quotes = []

        if (this.mode === 'mixed') {
            this.civ.authors.forEach(a =>
                a.quotes.forEach(q => quotes.push({ ...q, author: a.name }))
            )
        } else {
            const author = this.civ.authors.find(a => a.name === this.authorName)
            quotes = author ? author.quotes.map(q => ({ ...q, author: author.name })) : []
        }

        // ✅ SHUFFLE ONCE
        const shuffled = Phaser.Utils.Array.Shuffle([...quotes])

        // ✅ SPLIT INTO LEVELS
        const levels = []

        for (let i = 0; i < shuffled.length; i += LEVEL_SIZE) {
            levels.push(shuffled.slice(i, i + LEVEL_SIZE))
        }

        this.totalLevels = levels.length
        this.quotes = levels[this.level - 1] || []

        // === GAME STATE ===
        this.qIndex = 0
        this.answered = false
        this.cameras.main.setBackgroundColor(this.civ.bg)
        this.showQuestion()
    }

    showQuestion() {
        if (this.children) {
            this.children.list.slice().forEach(c => c.destroy())
        }

        if (this.qIndex >= this.quotes.length) {
            this.showLevelComplete()
            return
        }

        const q = this.quotes[this.qIndex]
        const w = 480

        // === TOP BAR ===
        const topBg = this.add.graphics()
        topBg.fillStyle(0x000000, 0.6)
        topBg.fillRect(0, 0, w, 56)

        const backBtn = this.add.text(16, 16, '← Menu', {
            fontSize: '12px', color: '#888'
        }).setInteractive()

        backBtn.on('pointerdown', () => {
            this.sound.play('tap')
            this.scene.start('MenuScene')
        })

        // ✅ PAUSE BUTTON
        const pauseBtn = this.add.text(w - 15, 38, '⏸', {
            fontSize: '18px',
            color: '#f9a825'
        }).setOrigin(1, 0).setInteractive()

        pauseBtn.on('pointerdown', () => {
            this.sound.play('tap')
            this.scene.pause()
            this.scene.launch('PauseScene', {
                gameSceneKey: 'GameScene'
            })
        })

        this.add.text(w / 2, 16, `${this.civ.emoji} ${this.civ.name}`, {
            fontSize: '13px', color: '#fff', fontStyle: 'bold'
        }).setOrigin(0.5, 0)

        // ✅ LEVEL DISPLAY
        this.add.text(w / 2, 32, `Level ${this.level}/${this.totalLevels}`, {
            fontSize: '11px', color: '#aaa'
        }).setOrigin(0.5, 0)

        // ✅ FIXED: Display global lives (with proper count)
        const livesStr = '❤️'.repeat(this.levelLives) + '🖤'.repeat(3 - this.levelLives)
        this.add.text(w - 16, 16, livesStr, { fontSize: '13px' }).setOrigin(1, 0)

        // ✅ Display global score + level score
        this.add.text(w / 2, 44, `Global: ${this.globalScore} | Level: ${this.levelScore} 🔥 ${this.streak}`, {
            fontSize: '11px', color: '#f9a825'
        }).setOrigin(0.5, 0)

        // Progress bar
        const prog = this.add.graphics()
        prog.fillStyle(0x333333, 1)
        prog.fillRect(0, 56, w, 4)
        prog.fillStyle(Phaser.Display.Color.HexStringToColor(this.civ.colorHex).color, 1)
        prog.fillRect(0, 56, w * (this.qIndex / this.quotes.length), 4)

        // === QUESTION UI ===
        const scrollBg = this.add.graphics()
        scrollBg.fillStyle(0x2c1f0a, 0.9)
        scrollBg.fillRoundedRect(24, 80, w - 48, 320, 12)

        this.add.text(w / 2, 106, `— ${q.author}`, {
            fontSize: '13px', color: '#bcaaa4', fontStyle: 'italic'
        }).setOrigin(0.5)

        this.add.text(w / 2, 200, `"${q.start}...`, {
            fontSize: '15px',
            color: '#fff2cc',
            wordWrap: { width: w - 80 },
            align: 'center'
        }).setOrigin(0.5)

        this.add.text(w / 2, 330, '👇 Complete the quote', {
            fontSize: '12px', color: '#888'
        }).setOrigin(0.5)

        // === ANSWERS ===
        const answers = Phaser.Utils.Array.Shuffle([
            { text: q.correct, isCorrect: true },
            ...q.wrong.map(w => ({ text: w, isCorrect: false }))
        ])

        this.answerButtons = []

        answers.forEach((ans, i) => {
            const y = 460 + i * 96

            const btnBg = this.add.graphics()
            btnBg.fillStyle(0x1a1208, 0.95)
            btnBg.fillRoundedRect(24, y - 34, w - 48, 68, 10)

            const btnText = this.add.text(w / 2, y, `"${ans.text}"`, {
                fontSize: '14px',
                color: '#fff',
                wordWrap: { width: w - 90 },
                align: 'center'
            }).setOrigin(0.5)

            const hitArea = this.add.zone(w / 2, y, w - 48, 68).setInteractive()

            this.answerButtons.push({ ans, btnBg, btnText, y, hitArea })

            hitArea.on('pointerdown', () => {
                this.sound.play('tap')
                // Animate button text
                this.tweens.add({
                    targets: btnText,
                    scale: 1.1,
                    duration: 100,
                    yoyo: true
                })
                this.onAnswer(ans)
            })
        })
    }

    async onAnswer(selectedAns) {
        if (this.answered) return
        this.answered = true
        this.answerButtons.forEach(b => b.hitArea.disableInteractive())
        
        this.answerButtons.forEach(({ ans, btnBg, y }) => {
            btnBg.clear()

            if (ans.isCorrect) {
                btnBg.fillStyle(0x1b5e20, 0.95) // green
            } else if (ans === selectedAns) {
                btnBg.fillStyle(0x7f0000, 0.95) // red
            } else {
                btnBg.fillStyle(0x1a1208, 0.5) // dim others
            }

            btnBg.fillRoundedRect(24, y - 34, 480 - 48, 68, 10)
        })

        if (selectedAns.isCorrect) {
            this.sound.play('correct')
            this.streak++
            const bonus = 10 + this.streak * 2
            
            // ✅ FIXED: Add to both global and level score
            this.levelScore += bonus
            this.globalScore += bonus
            await ProgressStore.updateGlobalScore(this.globalScore)

            // combo feedback
            if (this.streak >= 3) {
                this.showFeedback(`🔥 x${this.streak} Combo!`, '#ffd54f')
            }
            
            // ✅ FIXED: Check if should grant life BEFORE answering next question
            if (this.globalScore >= 100 && this.levelLives < 3) {
                this.levelLives++
                this.globalScore -= 100
                await ProgressStore.updateGlobalScore(this.globalScore)
                this.showFeedback(`🔥 +${bonus}  ❤️ +1 Life!`, '#69f0ae')
            } else {
                this.showFeedback(`🔥 +${bonus}`, '#69f0ae')
            }
        } else {
            this.sound.play('wrong')
            this.levelLives--
            this.streak = 0
            this.cameras.main.shake(200, 0.01)
            this.showFeedback('❌ Wrong!', '#ff5252')

            if (this.levelLives <= 0) {
                this.time.delayedCall(1500, () => this.showGameOver())
                return
            }
        }

        this.time.delayedCall(2200, () => {
            this.qIndex++
            this.answered = false
            this.showQuestion()
        })
    }

    showFeedback(msg, color) {
        this.add.text(240, 390, msg, {
            fontSize: '14px',
            color,
            backgroundColor: '#00000099',
            padding: { x: 10, y: 6 }
        }).setOrigin(0.5)
    }

    // ✅ LEVEL COMPLETE
    async showLevelComplete() {
        this.children.list.slice().forEach(c => c.destroy())

        // ✅ Save progress AND update high score for this civilization
        await ProgressStore.completeLevel(this.civId, this.level, this.totalLevels)
        await ProgressStore.updateCivHighScore(this.civId, this.levelScore)

        if (this.level >= this.totalLevels) {
            this.showFinalVictory()
            return
        }

        this.add.text(240, 200, `Level ${this.level} Complete!`, {
            fontSize: '24px', color: '#ffd700'
        }).setOrigin(0.5)

        this.add.text(240, 250, `Global Score: ${this.globalScore}`, {
            fontSize: '16px', color: '#69f0ae'
        }).setOrigin(0.5)

        const nextBtn = this.add.text(240, 400, 'Next Level ▶', {
            fontSize: '18px',
            backgroundColor: '#1b5e20',
            padding: { x: 20, y: 10 }
        }).setOrigin(0.5).setInteractive()

        nextBtn.on('pointerdown', () => {
            this.sound.play('tap')
            this.scene.start('GameScene', {
                civId: this.civId,
                level: this.level + 1,
                levelScore: 0,  // Reset level score
                levelLives: 3,  // Reset level lives
                streak: 0       // Reset streak
            })
        })
    }

    // ✅ FINAL WIN
    async showFinalVictory() {
        await ProgressStore.completeLevel(this.civId, this.level, this.totalLevels)
        await ProgressStore.updateCivHighScore(this.civId, this.levelScore)

        this.children.list.slice().forEach(c => c.destroy())

        this.add.text(240, 180, '🏆 Civilization Complete!', {
            fontSize: '26px', color: '#ffd700'
        }).setOrigin(0.5)

        this.add.text(240, 240, `Final Score: ${this.globalScore}`, {
            fontSize: '18px', color: '#69f0ae'
        }).setOrigin(0.5)

        const menuBtn = this.add.text(240, 400, 'Back to Menu', {
            fontSize: '18px',
            backgroundColor: '#37474f',
            padding: { x: 20, y: 10 }
        }).setOrigin(0.5).setInteractive()

        menuBtn.on('pointerdown', () => {
            this.sound.play('tap')
            this.scene.start('MenuScene')
        })
    }

    showGameOver() {
        this.children.list.slice().forEach(c => c.destroy())

        this.add.text(240, 250, '💀 Game Over', {
            fontSize: '28px', color: '#ff5252'
        }).setOrigin(0.5)

        this.add.text(240, 290, 'The ancients demand more wisdom...', {
            fontSize: '16px',
            color: '#ffd54f',
            fontStyle: 'italic'
        }).setOrigin(0.5)

        this.add.text(240, 330, `Score: ${this.globalScore}`, {
            fontSize: '14px', color: '#69f0ae'
        }).setOrigin(0.5)

        const retryBtn = this.add.text(240, 400, 'Retry', {
            fontSize: '18px',
            backgroundColor: '#7f0000',
            padding: { x: 20, y: 10 }
        }).setOrigin(0.5).setInteractive()

        retryBtn.on('pointerdown', () => {
            this.sound.play('tap')
            this.scene.start('GameScene', {
                civId: this.civId,
                level: this.level,
                levelScore: 0,
                levelLives: 3,
                streak: 0
            })
        })
    }
}