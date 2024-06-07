import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const PlantsLayout = () => {
   return (
      <Stack>
         <Stack.Screen
            name="index"
            options={{ title: "Tanaman", headerShadowVisible: false }}
         />
         <Stack.Screen
            name="add"
            options={{ title: "Tambah Tanaman", headerShadowVisible: false }}
         />
      </Stack>
   );
};

export default PlantsLayout;
