import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const GetStartedLayout = () => {
   return (
      <Stack>
         <Stack.Screen
            name="index"
            options={{ headerShown: false, presentation: "modal" }}
         />
         <Stack.Screen
            name="first-field"
            options={{ title: "Ladang Ku", presentation: "modal" }}
         />
         <Stack.Screen name="plants" options={{ presentation: "modal" }} />
      </Stack>
   );
};

export default GetStartedLayout;
