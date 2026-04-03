/**
 * ProgressStore - Handles all game progress, scores, and persistence
 * Ready for migration to backend database (Firebase, Supabase, or custom API)
 * 
 * Structure:
 * {
 *   globalScore: number,        // Cross-civilization score
 *   civilizations: {
 *     [civId]: {
 *       completed: boolean,
 *       level: number,
 *       highScore: number       // Best score in this civilization
 *     }
 *   }
 * }
 */

const STORAGE_KEY = 'ancientWisdomProgress'

export const ProgressStore = {
  data: {
    globalScore: 0,
    civilizations: {}
  },

  // ✅ Load from local storage or backend
  async load() {
    try {
      let raw = null
      
      // Check for backend API (will be implemented later)
      if (typeof window.API_ENDPOINT !== 'undefined' && window.API_ENDPOINT) {
        try {
          const response = await fetch(`${window.API_ENDPOINT}/progress`, {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${this.getAuthToken()}` }
          })
          if (response.ok) {
            this.data = await response.json()
            return
          }
        } catch (err) {
          console.warn('Backend load failed, falling back to local storage:', err)
        }
      }

      // Fallback: local storage (Capacitor for mobile, localStorage for web)
      if (typeof Capacitor !== 'undefined' && Capacitor.Storage) {
        const ret = await Capacitor.Storage.get({ key: STORAGE_KEY })
        raw = ret.value
      } else if (typeof localStorage !== 'undefined') {
        raw = localStorage.getItem(STORAGE_KEY)
      }

      this.data = raw ? JSON.parse(raw) : {
        globalScore: 0,
        civilizations: {}
      }
    } catch (err) {
      console.error('Failed to load progress:', err)
      this.data = {
        globalScore: 0,
        civilizations: {}
      }
    }
  },

  // ✅ Save to local storage and backend
  async save() {
    try {
      const str = JSON.stringify(this.data)

      // Try to save to backend first
      if (typeof window.API_ENDPOINT !== 'undefined' && window.API_ENDPOINT) {
        try {
          await fetch(`${window.API_ENDPOINT}/progress`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${this.getAuthToken()}`
            },
            body: str
          })
        } catch (err) {
          console.warn('Backend save failed, using local storage:', err)
        }
      }

      // Always save locally as fallback
      if (typeof Capacitor !== 'undefined' && Capacitor.Storage) {
        await Capacitor.Storage.set({ key: STORAGE_KEY, value: str })
      } else if (typeof localStorage !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, str)
      }
    } catch (err) {
      console.error('Failed to save progress:', err)
    }
  },

  // ✅ Get global score across all civilizations
  getGlobalScore() {
    return this.data.globalScore || 0
  },

  // ✅ Update global score
  async updateGlobalScore(newScore) {
    this.data.globalScore = newScore
    await this.save()
  },

  // ✅ Get lives (future: could be global or per-session)
  getGlobalLives() {
    // For now, lives are per-session (reset to 3 at level start)
    // Future: could implement daily/global lives system
    return 3
  },

  // ✅ Complete a level and update civilization progress
  async completeLevel(civId, level, totalLevels) {
    if (!this.data.civilizations[civId]) {
      this.data.civilizations[civId] = {
        completed: false,
        level: 1,
        highScore: 0
      }
    }

    const civ = this.data.civilizations[civId]
    const nextLevel = level + 1

    // Store the next level to start
    civ.level = nextLevel

    // Mark completed only if finished the last level
    if (nextLevel > totalLevels) {
      civ.completed = true
      civ.level = totalLevels  // clamp to max
    }

    await this.save()
  },

  // ✅ Update high score for a civilization
  async updateCivHighScore(civId, score) {
    if (!this.data.civilizations[civId]) {
      this.data.civilizations[civId] = {
        completed: false,
        level: 1,
        highScore: 0
      }
    }

    const civ = this.data.civilizations[civId]
    if (score > civ.highScore) {
      civ.highScore = score
      await this.save()
    }
  },

  // ✅ Check if civilization is completed
  isCompleted(civId) {
    return this.data.civilizations[civId]?.completed || false
  },

  // ✅ Get current level for a civilization
  getLevel(civId) {
    return this.data.civilizations[civId]?.level || 1
  },

  // ✅ Get high score for a civilization
  getCivHighScore(civId) {
    return this.data.civilizations[civId]?.highScore || 0
  },

  // ✅ Get all civilization progress
  getAllProgress() {
    return this.data.civilizations
  },

  // ✅ Reset all progress (for testing or user action)
  async reset() {
    this.data = {
      globalScore: 0,
      civilizations: {}
    }
    await this.save()
  },

  // ✅ Helper: Get auth token (stub for backend)
  getAuthToken() {
    // Will be implemented with authentication system
    return localStorage.getItem('authToken') || ''
  }
}