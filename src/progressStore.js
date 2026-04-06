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

import { NetworkMonitor } from './networkMonitor.js'

const STORAGE_KEY = 'ancientWisdomProgress'

export const ProgressStore = {
  data: {
    globalScore: 0,
    civilizations: {}
  },
  pendingUpdates: [],  // Queue updates when offline
  isSyncing: false,
  // ✅ Load from local storage or backend
  async load() {
    try {
      let raw = null
      // Always load from local storage first (offline-first)
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
      // Try to sync with backend if online
      if (NetworkMonitor.isOnline) {
        await this.syncWithBackend('load')
      }
    } catch (err) {
      console.error('Failed to load progress:', err)
      this.data = {
        globalScore: 0,
        civilizations: {}
      }
    }
  },

  // ✅ Save to local storage immediately, queue backend sync
  async save() {
    try {
      const str = JSON.stringify(this.data)

      // Always save locally first
      if (typeof Capacitor !== 'undefined' && Capacitor.Storage) {
        await Capacitor.Storage.set({ key: STORAGE_KEY, value: str })
      } else if (typeof localStorage !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, str)
      }

      // Queue backend sync if online, otherwise queue for later
      if (NetworkMonitor.isOnline) {
        this.pendingUpdates.push({
          timestamp: Date.now(),
          data: this.data
        })
        await this.syncWithBackend('save')
      } else {
        // Just queue it, will sync when back online
        console.log('⚠️ Offline: Changes saved locally, will sync when online')
      }
    } catch (err) {
      console.error('Failed to save progress:', err)
    }
  },

  // ✅ Backend sync (will be implemented later)
  async syncWithBackend(action) {
    if (this.isSyncing || !NetworkMonitor.isOnline) return

    this.isSyncing = true
    try {
      if (typeof window.API_ENDPOINT !== 'undefined' && window.API_ENDPOINT) {
        const response = await fetch(`${window.API_ENDPOINT}/progress`, {
          method: action === 'load' ? 'GET' : 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.getAuthToken()}`
          },
          body: action === 'save' ? JSON.stringify(this.data) : undefined
        })

        if (response.ok) {
          console.log('✅ Synced with backend')
          this.pendingUpdates = []  // Clear queue on success
        }
      }
    } catch (err) {
      console.warn('Backend sync failed, will retry:', err)
    } finally {
      this.isSyncing = false
    }
  },

  // ✅ Get global score
  getGlobalScore() {
    return this.data.globalScore || 0
  },

  // ✅ Update global score
  async updateGlobalScore(newScore) {
    this.data.globalScore = newScore
    await this.save()
  },

  // ✅ Get lives
  getGlobalLives() {
    return 3
  },

  // ✅ Complete a level
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

    civ.level = nextLevel

    if (nextLevel > totalLevels) {
      civ.completed = true
      civ.level = totalLevels
    }

    await this.save()
  },

  // ✅ Update high score
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

  // ✅ Check if completed
  isCompleted(civId) {
    return this.data.civilizations[civId]?.completed || false
  },

  // ✅ Get level
  getLevel(civId) {
    return this.data.civilizations[civId]?.level || 1
  },

  // ✅ Get high score
  getCivHighScore(civId) {
    return this.data.civilizations[civId]?.highScore || 0
  },

  // ✅ Get all progress
  getAllProgress() {
    return this.data.civilizations
  },

  // ✅ Reset progress
  async reset() {
    this.data = {
      globalScore: 0,
      civilizations: {}
    }
    
    try {
      if (typeof Capacitor !== 'undefined' && Capacitor.Storage) {
        await Capacitor.Storage.remove({ key: STORAGE_KEY })
      } else if (typeof localStorage !== 'undefined') {
        localStorage.removeItem(STORAGE_KEY)
      }
    } catch (err) {
      console.error('Failed to clear progress storage:', err)
    }
  },

  // ✅ Helper: get auth token
  getAuthToken() {
    return localStorage.getItem('authToken') || ''
  },

  // ✅ Monitor connectivity and auto-sync when back online
  monitorConnectivity() {
    NetworkMonitor.subscribe((status) => {
      if (status === 'online' && this.pendingUpdates.length > 0) {
        console.log('🔄 Syncing pending updates...')
        this.syncWithBackend('save')
      }
    })
  }
}

// Start monitoring on load
ProgressStore.monitorConnectivity()