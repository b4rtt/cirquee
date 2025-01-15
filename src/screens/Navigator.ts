import { useState, useEffect } from "react";
import { View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { loadImages, loadFonts } from "@/theme";
import { isWeb } from "@/utils/deviceInfo";

SplashScreen.preventAutoHideAsync();

function Navigator() {
  /**
   * preload assets and user data
   */
  const preload = async () => {
    try {
      // preload assets
      await Promise.all([loadImages(), loadFonts()]);

      // fetch user data (fake promise function to simulate async function)
      //   const user = await getUser();

      // hide splash screen
      SplashScreen.hideAsync();
    } catch (err) {
      console.log("[##] preload error:", err);

      // if preload failed, try to get user data from persistent storage
    }
  };

  useEffect(() => {
    preload();
  }, []);

  return <View />;
}

export default Navigator;
