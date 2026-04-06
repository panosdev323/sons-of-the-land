import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.sonsoftheland.game',
  appName: 'Sons of the Land',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https',
    iosScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,  // Don't show splash (we handle it in game)
    },
    StatusBar: {
      style: 'DARK',           // Dark status bar for light backgrounds
      backgroundColor: '#1a1208',
      overlaysWebView: false   // Don't overlap with game content
    },
    Keyboard: {
      resize: 'none'           // Don't resize when keyboard opens (better for games)
    }
  },
  android: {
    allowMixedContent: true,
    webContentsDebuggingEnabled: false  // Disable debug in release
  },
  ios: {
    contentInset: 'always'
  }
};

export default config;