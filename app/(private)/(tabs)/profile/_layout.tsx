import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const ProfileLayout = () => {
   return (
      <Stack>
         <Stack.Screen
            name="index"
            options={{
               title: "Profile",
               headerShadowVisible: false,
            }}
         />
         <Stack.Screen
            name="detail"
            options={{
               headerShown: true,
               headerTitle: "Informasi Pribadi",
               headerShadowVisible: false,
            }}
         />
      </Stack>
   );
};

export default ProfileLayout;
