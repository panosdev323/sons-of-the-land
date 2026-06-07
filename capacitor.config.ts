import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.sonsoftheland.game',
  appName: 'Sons of the Land',
  webDir: 'docs',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https',
    iosScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
    },
    StatusBar: {
      style: 'DARK',
      backgroundColor: '#1a1208',
      overlaysWebView: false
    },
    Keyboard: {
      resize: 'none'
    },
    // ✅ AdMob Configuration
    AdMob: {
      appId: 'ca-app-pub-7222777824759007~4356474173',
      orientation: 'portrait',
      requestTrackingAuthorization: true
    }
  },
  android: {
    allowMixedContent: true,
    webContentsDebuggingEnabled: false
  },
  ios: {
    contentInset: 'always'
  }
};

export default config;