import { AdMob } from '@capacitor-community/admob'
import { Capacitor } from '@capacitor/core'

export class AdManager {
    static isReady = false
    static isShowing = false
    static rewardEarned = false
    static listenersAttached = false

    static adId = "ca-app-pub-3940256099942544/5224354917"
    // production: "ca-app-pub-7222777824759007/1944109420"

    static async init() {
        if (Capacitor.getPlatform() === 'web') return
        
        // Attach listeners once
        if (!this.listenersAttached) {
            AdMob.addListener('onRewardedVideoAdLoaded', () => {
                console.log('Ad loaded and ready')
                this.isReady = true
            })
            
            AdMob.addListener('onRewardedVideoAdFailedToLoad', (error) => {
                console.warn('Ad failed to load', error)
                this.isReady = false
            })
            
            AdMob.addListener('onRewardedVideoAdClosed', () => {
                console.log('Ad closed')
                this.isShowing = false
                // Prepare next ad
                setTimeout(() => this.prepare(), 1000)
            })
            
            AdMob.addListener('onRewardedVideoAdReward', () => {
                console.log('Reward earned!')
                this.rewardEarned = true
            })
            
            this.listenersAttached = true
        }
        
        await this.prepare()
    }

    static async prepare() {
        if (Capacitor.getPlatform() === 'web') return
        
        try {
            await AdMob.prepareRewardVideoAd({
                adId: this.adId
            })
            // isReady will be set by onRewardedVideoAdLoaded
        } catch (e) {
            console.warn("Ad prepare failed", e)
            this.isReady = false
        }
    }

    static async show() {
        if (Capacitor.getPlatform() === 'web') {
            console.warn('Web platform - ad not shown')
            return false
        }
        
        if (this.isShowing) {
            console.warn('Ad already showing')
            return false
        }

        this.isShowing = true
        this.rewardEarned = false

        try {
            // Prepare if not ready
            if (!this.isReady) {
                console.log('Preparing ad...')
                await this.prepare()
                // Wait for ad to load (max 5 seconds)
                let waited = 0
                while (!this.isReady && waited < 5000) {
                    await new Promise(resolve => setTimeout(resolve, 100))
                    waited += 100
                }
                
                if (!this.isReady) {
                    throw new Error('Ad failed to load in time')
                }
            }
            
            console.log('Showing ad...')
            await AdMob.showRewardVideoAd()
            
            // Wait for completion (reward earned or ad closed)
            return new Promise((resolve) => {
                const checkInterval = setInterval(() => {
                    if (!this.isShowing) {
                        clearInterval(checkInterval)
                        console.log('Ad finished, reward earned:', this.rewardEarned)
                        resolve(this.rewardEarned)
                    }
                }, 200)
            })
            
        } catch (e) {
            console.error("Ad show failed", e)
            this.isShowing = false
            return false
        }
    }
}