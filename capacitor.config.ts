import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.sonsoftheland.game',
  appName: 'Sons of the Land',           // ← Better human-friendly name (with spaces & capitals)
  webDir: 'dist',                        // Good if your build outputs to "dist" (Vite default)
  bundledWebRuntime: false,              // Recommended for smaller app size
  server: {
    androidScheme: 'https',              // Keep this
    // iosScheme: 'https',               // You can add this too
    // url: 'http://192.168.x.x:5173',   // Uncomment only for live reload during development
    // cleartext: true                   // Only needed if using http in dev
  },
  // === Good additions for games ===
  plugins: {
    // Helps with keyboard if you have text inputs (optional for now)
    Keyboard: {
      resize: 'ionic'          // or 'body' or 'none' — test what works best with Phaser
    }
  },
  // Optional but useful for games
  android: {
    allowMixedContent: true,   // Sometimes needed for assets
  },
  ios: {
    contentInset: 'always',    // Helps with safe areas / notch
  }
};

export default config;