import { useAuth } from "@clerk/clerk-expo";
import { Redirect, Stack } from "expo-router";
import React from "react";

const PrivateLayout = () => {
   const { isSignedIn } = useAuth();

   if (!isSignedIn) {
      return <Redirect href="/(public)" />;
   }
   return (
      <Stack screenOptions={{ headerShown: false }}>
         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
         {/* <Stack.Screen name="(stack)" options={{ headerShown: false }} /> */}
         <Stack.Screen name="get-started" options={{ headerShown: false }} />
      </Stack>
   );
};

export default PrivateLayout;
