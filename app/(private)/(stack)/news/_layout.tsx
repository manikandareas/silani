import { View, Text, Pressable } from "react-native";
import React from "react";
import { Stack, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const NewsLayout = () => {
   return (
      <Stack initialRouteName="index">
         <Stack.Screen
            name="index"
            options={{
               title: "Berita",
               headerLeft(props) {
                  return (
                     <Pressable
                        onPress={() => router.push("/(private)/(tabs)/home")}
                     >
                        <Ionicons name="chevron-back" size={24} />
                     </Pressable>
                  );
               },
            }}
         />
         {/* <Stack.Screen name="news-detail" /> */}
      </Stack>
   );
};

export default NewsLayout;
