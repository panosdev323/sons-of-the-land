import { AdMob } from '@capacitor-community/admob'
import { Capacitor } from '@capacitor/core'

export class AdManager {
    static isReady = false
    static adId = "ca-app-pub-3940256099942544/5224354917"
    // production: "ca-app-pub-7222777824759007/1944109420"

    static async init() {
        if (Capacitor.getPlatform() === 'web') return
        await this.prepare()
    }

    static async prepare() {
        if (Capacitor.getPlatform() === 'web') return
        
        try {
            await AdMob.prepareRewardVideoAd({
                adId: this.adId
            })
            this.isReady = true
        } catch (e) {
            console.warn("Ad prepare failed", e)
            this.isReady = false
        }
    }

    static async show() {
        if (Capacitor.getPlatform() === 'web') return false
        
        try {
            if (!this.isReady) {
                await this.prepare()
            }
            
            await AdMob.showRewardVideoAd()
            
            // Always return true - if ad shows, give reward
            return true
        } catch (e) {
            console.error("Ad show failed", e)
            return false
        }
    }
}