import { SplashScreen } from "expo-router";

import {
   Poppins_100Thin,
   Poppins_300Light,
   Poppins_400Regular,
   Poppins_500Medium,
   Poppins_600SemiBold,
   Poppins_700Bold,
   Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";
import { useEffect } from "react";
const useLoadFonts = () => {
   // Register Application fonts
   const [fontsLoaded, fontError] = useFonts({
      Poppins_100Thin,
      Poppins_300Light,
      Poppins_400Regular,
      Poppins_500Medium,
      Poppins_600SemiBold,
      Poppins_700Bold,
      Poppins_800ExtraBold,
   });

   // Load fonts
   useEffect(() => {
      const loadFonts = async () => {
         if (fontsLoaded) {
            await SplashScreen.hideAsync();
         }
      };
      loadFonts();
   }, [fontsLoaded, fontError]);

   // Handle error
   if (!fontsLoaded || fontError) {
      return null;
   }
};

export default useLoadFonts;
