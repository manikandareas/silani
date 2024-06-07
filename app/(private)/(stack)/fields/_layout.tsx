import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const FieldLayout = () => {
   return (
      <Stack>
         <Stack.Screen
            name="index"
            options={{
               title: "Ladang Ku",
               headerShown: true,
               headerShadowVisible: false,
            }}
         />
         <Stack.Screen
            name="add"
            options={{
               title: "Tambah Ladang",
               presentation: "modal",
               headerShadowVisible: false,
            }}
         />
         <Stack.Screen
            name="plants"
            options={{
               headerShown: false,
            }}
         />
      </Stack>
   );
};

export default FieldLayout;
