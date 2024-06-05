import { Slot, SplashScreen, Stack, useRouter, useSegments } from "expo-router";

import useLoadFonts from "@/common/hooks/useLoadFonts";
import { tokenCache } from "@/common/libs/utils";
import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import Constants from "expo-constants";
import { useEffect } from "react";
import { ReactQueryClientProvider } from "@/common/provider/ReactQuery";
import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
   // Register Application fonts
   useLoadFonts();
   const publishableKey = Constants.expoConfig?.extra
      ?.clerkPublishableKey as string;

   return (
      <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
         <InitialLayout />
      </ClerkProvider>
   );
}

const InitialLayout = () => {
   const { isLoaded, isSignedIn } = useAuth();

   const router = useRouter();
   const segments = useSegments();

   useEffect(() => {
      if (!isLoaded) return;

      const inTabsGroup = segments[0] === "(private)";
      console.log({ segments });
      console.log({ inTabsGroup, isSignedIn });

      if (isSignedIn) {
         router.replace("/home");
      } else if (!isSignedIn && inTabsGroup) {
         router.replace("/login");
      }
   }, [isSignedIn]);
   return (
      <ReactQueryClientProvider>
         <GestureHandlerRootView style={{ flex: 1 }}>
            <Slot />
         </GestureHandlerRootView>
      </ReactQueryClientProvider>
   );
};
