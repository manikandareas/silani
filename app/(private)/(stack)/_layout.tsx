import { Stack } from "expo-router";
import React from "react";

const Layout = () => {
   return (
      <Stack screenOptions={{ headerShadowVisible: false }}>
         <Stack.Screen
            name="chat"
            options={{
               title: "Tanya Lani",
            }}
         />
         <Stack.Screen
            name="field"
            options={{
               title: "Ladang Ku",
            }}
         />
         <Stack.Screen
            name="forecast"
            options={{
               title: "Ramalan Cuaca",
            }}
         />
         <Stack.Screen
            name="detail-forecast"
            options={{
               // headerTitle: ({ children }) => {
               //    return (
               //       <View className="items-center flex-row">
               //          <Ionicons name="calendar-clear-outline" size={24} />
               //          <Text
               //             style={{ fontSize: 18 }}
               //             className="ml-2 font-RedHatBold"
               //          >
               //             Cuaca dalam 7 hari
               //          </Text>
               //       </View>
               //    );
               // },
               title: "Cuaca dalam 7 hari",
            }}
         />
         <Stack.Screen name="news" options={{ headerShown: false }} />
      </Stack>
   );
};

export default Layout;
