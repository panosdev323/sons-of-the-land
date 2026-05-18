package com.sonsoftheland.game;

import com.getcapacitor.BridgeActivity;
import com.google.android.gms.ads.MobileAds;
import android.os.Bundle;

public class MainActivity extends BridgeActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        
        // ✅ initialize Google Mobile Ads SDK
        MobileAds.initialize(this);
    }
}