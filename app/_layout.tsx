import { Slot, SplashScreen, useRouter, useSegments } from "expo-router";
import useLoadFonts from "@/common/hooks/useLoadFonts";
import { tokenCache } from "@/common/libs/utils";
import { ReactQueryClientProvider } from "@/common/provider/ReactQuery";
import { ClerkProvider, useAuth, useUser } from "@clerk/clerk-expo";
import Constants from "expo-constants";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import useTrackSegments from "@/common/hooks/useTrackSegments";

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
   useTrackSegments();

   useEffect(() => {
      if (!isLoaded) return;

      const inTabsGroup = segments[0] === "(private)";

      const inRegisterScreen = segments[1] === "register";
      const inGetStartedScreen = segments[1] === "get-started";

      console.log({ inRegisterScreen, isSignedIn });

      if (isSignedIn && !inRegisterScreen && !inGetStartedScreen) {
         router.replace("/(private)/(tabs)/home");
      } else if (isSignedIn && inRegisterScreen) {
         router.replace("/(private)/get-started");
      } else if (!isSignedIn && inTabsGroup) {
         router.replace("/(public)/login");
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
