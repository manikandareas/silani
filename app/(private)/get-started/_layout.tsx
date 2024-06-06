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
      </Stack>
   );
};

export default GetStartedLayout;
