import { AdMob } from '@capacitor-community/admob'
import { Capacitor } from '@capacitor/core'

export class AdManager {
    static isReady = false
    static isShowing = false
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
            console.log('Ad prepared successfully')
        } catch (e) {
            console.warn("Ad prepare failed", e)
            this.isReady = false
        }
    }

    static async show() {
        if (Capacitor.getPlatform() === 'web') {
            console.log('Web platform - fake ad')
            return true
        }
        
        if (this.isShowing) {
            console.log('Ad already showing')
            return false
        }
        
        this.isShowing = true
        
        try {
            // Prepare if not ready
            if (!this.isReady) {
                console.log('Preparing ad...')
                await this.prepare()
            }
            
            console.log('Showing ad...')
            
            // Show ad with timeout
            const showPromise = AdMob.showRewardVideoAd()
            const timeoutPromise = new Promise((_, reject) => 
                setTimeout(() => reject(new Error('Ad show timeout after 10 seconds')), 10000)
            )
            
            await Promise.race([showPromise, timeoutPromise])
            
            console.log('Ad shown successfully')
            
            // Wait a bit for the ad to play
            await new Promise(resolve => setTimeout(resolve, 500))
            
            return true
            
        } catch (e) {
            console.error("Ad show failed:", e)
            return false
        } finally {
            this.isShowing = false
            // Prepare next ad
            setTimeout(() => this.prepare(), 1000)
        }
    }
}