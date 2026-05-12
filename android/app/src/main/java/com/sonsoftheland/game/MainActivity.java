package com.sonsoftheland.game;

import com.getcapacitor.BridgeActivity;
import com.google.android.gms.ads.AdRequest;
import com.google.android.gms.ads.LoadAdError;
import com.google.android.gms.ads.MobileAds;
import com.google.android.gms.ads.rewarded.RewardedAd;
import com.google.android.gms.ads.rewarded.RewardedAdLoadCallback;
import android.os.Bundle;
import android.util.Log;

public class MainActivity extends BridgeActivity {

    private RewardedAd rewardedAd;
    private static final String AD_UNIT_ID = "ca-app-pub-3940256099942544/5224354917"; // Test Ad
    private static final String TAG = "MainActivity";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // init Mobile Ads SDK
        MobileAds.initialize(this);

        // load first ad
        loadRewardedAd();
    }

    // load rewarded ad
    private void loadRewardedAd() {
        AdRequest adRequest = new AdRequest.Builder().build();

        RewardedAd.load(this, AD_UNIT_ID, adRequest, new RewardedAdLoadCallback() {
            @Override
            public void onAdLoaded(RewardedAd ad) {
                rewardedAd = ad;
                Log.d(TAG, "Rewarded ad loaded");
            }

            @Override
            public void onAdFailedToLoad(LoadAdError adError) {
                Log.e(TAG, "Failed to load ad: " + adError.getMessage());
                rewardedAd = null;
            }
        });
    }

    // show rewarded ad
    public void showRewardedAd() {
        if (rewardedAd != null) {
            rewardedAd.show(MainActivity.this, rewardItem -> {
                Log.d(TAG, "User earned reward!");
                // call js
            });

            // load next ad
            loadRewardedAd();
        }
    }
}