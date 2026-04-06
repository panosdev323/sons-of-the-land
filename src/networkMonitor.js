/**
 * Network Connectivity Monitor
 * Detects offline/online status and handles gracefully
 */

export const NetworkMonitor = {
  isOnline: navigator.onLine || true,
  listeners: [],

  // Initialize network monitoring
  init() {
    if (typeof window === 'undefined') return

    window.addEventListener('online', () => {
      this.isOnline = true
      this.notifyListeners('online')
      console.log('✅ Back online')
    })

    window.addEventListener('offline', () => {
      this.isOnline = false
      this.notifyListeners('offline')
      console.log('⚠️ Offline mode activated')
    })
  },

  // Subscribe to connectivity changes
  subscribe(callback) {
    this.listeners.push(callback)
    return () => {
      this.listeners = this.listeners.filter(l => l !== callback)
    }
  },

  notifyListeners(status) {
    this.listeners.forEach(callback => callback(status))
  },

  // Check if online
  getStatus() {
    return {
      isOnline: this.isOnline,
      status: this.isOnline ? 'online' : 'offline'
    }
  },

  // Test actual connectivity (not just navigator.onLine)
  async testConnection(testUrl = 'https://www.google.com/favicon.ico') {
    try {
      const response = await fetch(testUrl, { mode: 'no-cors' })
      return response.ok || response.type === 'opaque'
    } catch (err) {
      return false
    }
  }
}

// Initialize on load
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    NetworkMonitor.init()
  })
}