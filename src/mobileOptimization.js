/**
 * Mobile Optimization Utility
 * Handles responsive scaling and safe area detection for different devices
 */

export const MobileOptimization = {
  // Get safe area insets (notch, status bar, etc.)
  getSafeArea() {
    if (typeof window !== 'undefined' && window.visualViewport) {
      return {
        top: window.visualViewport.offsetTop || 0,
        left: window.visualViewport.offsetLeft || 0,
        right: window.innerWidth - (window.visualViewport.offsetLeft + window.visualViewport.width),
        bottom: window.innerHeight - (window.visualViewport.offsetTop + window.visualViewport.height)
      }
    }
    return { top: 0, left: 0, right: 0, bottom: 0 }
  },

  // Detect device orientation
  getOrientation() {
    if (typeof window !== 'undefined') {
      if (window.innerHeight > window.innerWidth) {
        return 'portrait'
      } else {
        return 'landscape'
      }
    }
    return 'portrait'
  },

  // Get actual playable area dimensions
  getPlayableArea() {
    const safeArea = this.getSafeArea()
    const orientation = this.getOrientation()

    return {
      width: window.innerWidth - safeArea.left - safeArea.right,
      height: window.innerHeight - safeArea.top - safeArea.bottom,
      safeArea,
      orientation,
      isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
      isTablet: Math.max(window.innerWidth, window.innerHeight) >= 768
    }
  },

  // Calculate scaling factor for different devices
  getScaleFactor() {
    const baseWidth = 480  // Your game's base width
    const baseHeight = 854 // Your game's base height
    const playable = this.getPlayableArea()

    // Scale based on width (more important for portrait)
    const scaleX = playable.width / baseWidth
    const scaleY = playable.height / baseHeight

    return Math.min(scaleX, scaleY, 1.5)  // Don't scale up beyond 1.5x
  },

  // Apply CSS safe area padding
  applySafeAreaCSS() {
    if (typeof document !== 'undefined') {
      const safeArea = this.getSafeArea()
      const style = document.createElement('style')
      style.textContent = `
        body {
          margin: 0;
          padding: ${safeArea.top}px ${safeArea.right}px ${safeArea.bottom}px ${safeArea.left}px;
          overflow: hidden;
        }
        canvas {
          display: block;
          max-width: 100vw;
          max-height: 100vh;
        }
      `
      document.head.appendChild(style)
    }
  },

  // Detect if device has notch (iPhone X+, Android)
  hasNotch() {
    const safeArea = this.getSafeArea()
    return safeArea.top > 20
  },

  // Lock orientation (requires Capacitor - install with: npm install @capacitor/screen-orientation)
  async lockOrientation(orientation = 'portrait') {
    if (typeof Capacitor !== 'undefined' && window.ScreenOrientation) {
      try {
        await window.ScreenOrientation.lock({ orientation })
        console.log('📱 Orientation locked to:', orientation)
      } catch (err) {
        console.warn('Could not lock orientation:', err)
      }
    } else if (typeof screen !== 'undefined' && screen.orientation) {
      // Fallback: Use Web API if available
      try {
        await screen.orientation.lock(orientation)
        console.log('📱 Orientation locked (Web API):', orientation)
      } catch (err) {
        console.warn('Orientation lock not supported:', err)
      }
    }
  }
}