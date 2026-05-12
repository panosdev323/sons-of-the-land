export class RewardedAdsManager {
    constructor() {
        this.onRewardCallback = null
    }

    // call native Android code
    async showAd(onRewardCallback) {
        this.onRewardCallback = onRewardCallback

        try {
            // Capacitor bridge - call MainActivity.showRewardedAd()
            const result = await window.Capacitor?.Plugins?.App?.addListener?.('rewardEarned', (data) => {
                console.log('Reward earned:', data)
                if (onRewardCallback) {
                    onRewardCallback()
                }
            })

            // or use native code:
            if (window.MainActivity) {
                window.MainActivity.showRewardedAd()
            }
        } catch (err) {
            console.error('Ad error:', err)
        }
    }
}