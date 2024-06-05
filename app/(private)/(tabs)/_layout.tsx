import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, Text } from "react-native";
import Animated, {
   useAnimatedStyle,
   useSharedValue,
   withTiming,
} from "react-native-reanimated";

const AnimatedTabIcon = ({
   name,
   focused,
   label,
}: {
   name: keyof typeof Ionicons.glyphMap;
   focused: boolean;
   label: string;
}) => {
   const animation = useSharedValue(focused ? 1 : 0);

   React.useEffect(() => {
      animation.value = withTiming(focused ? 1 : 0, { duration: 300 });
   }, [focused, animation]);

   const animatedStyle = useAnimatedStyle(() => {
      return {
         backgroundColor: animation.value ? "#64d97d" : "transparent",
         transform: [{ scale: animation.value ? 1.1 : 1 }],
      };
   });

   return (
      <Animated.View style={[styles.tabContainer, animatedStyle]}>
         <Ionicons
            name={
               focused
                  ? name
                  : (`${name}-outline` as keyof typeof Ionicons.glyphMap)
            }
            size={24}
            color={focused ? "white" : "#898989"}
         />
         {focused && <Text style={styles.tabText}>{label}</Text>}
      </Animated.View>
   );
};

const Layout = () => {
   return (
      <Tabs
         screenOptions={({ route }) => ({
            tabBarStyle: {
               height: 60,
            },
            tabBarIcon: ({ focused }) => {
               switch (route.name) {
                  case "home":
                     return (
                        <AnimatedTabIcon
                           name="home"
                           focused={focused}
                           label="Home"
                        />
                     );
                  case "market-price":
                     return (
                        <AnimatedTabIcon
                           name="pricetag"
                           focused={focused}
                           label="Harga Pasar"
                        />
                     );
                  default:
                     return (
                        <AnimatedTabIcon
                           name="person"
                           focused={focused}
                           label="Profile"
                        />
                     );
               }
            },
            headerShadowVisible: false,
            tabBarShowLabel: false,
         })}
      >
         <Tabs.Screen
            name="home"
            options={{
               headerShown: false,
               headerTitle: "Beranda",
            }}
         />
         <Tabs.Screen
            name="market-price"
            options={{
               headerTitle: "Harga Pasar",
            }}
         />
         <Tabs.Screen
            name="profile"
            options={{
               headerTitle: "Profile",
            }}
         />
      </Tabs>
   );
};

const styles = StyleSheet.create({
   tabContainer: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 6,
      paddingHorizontal: 12,
      borderRadius: 12,
   },
   tabText: {
      paddingLeft: 8,
      color: "white",
   },
});

export default Layout;
