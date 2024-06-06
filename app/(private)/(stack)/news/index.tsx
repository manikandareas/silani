import ParallaxScrollView from "@/common/components/ParallaxScrollView";
import DummyProfile from "@/common/constants/DummyProfile";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

const News = () => {
   return (
      <ParallaxScrollView
         headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
         headerImage={
            <ImageBackground
               src="https://cdn.rri.co.id/berita/1/images/1695789351141-b/1695789351141-b.jpeg"
               style={styles.reactLogo}
            >
               <View className="bg-black/30 absolute top-0 left-0 right-0 bottom-0" />
               <View className="p-[20]">
                  <Text className="text-white font-RedHatMedium tracking-wider max-w-[85%] text-lg">
                     Produktifitas Meningkat, Petani Tebu Rembang Optimis Sambut
                     Musim Giling
                  </Text>
                  <View className="flex-row items-center">
                     <Image
                        src={DummyProfile.avatarUrl}
                        className="w-6 h-6 rounded-full"
                     />
                     <Text className="text-white ml-2 text-xs">
                        Vito Manik . 1 Jam yang Lalu
                     </Text>
                  </View>
               </View>
            </ImageBackground>
         }
      >
         <View className="flex-1 bg-white px-[32] py-[20]">
            {Array(10)
               .fill(0)
               .map((_, index) => (
                  <NewsItem key={index} />
               ))}
         </View>
      </ParallaxScrollView>
   );
};

export default News;

const NewsItem = () => {
   return (
      <View className="flex-row rounded-sm border-b gap-x-2 py-1.5 border-[#E5E5E5]">
         {/* Left */}
         <View className="max-w-[70%] gap-y-1">
            <View className="flex-row items-center">
               <Image
                  src={DummyProfile.avatarUrl}
                  className="w-6 h-6 rounded-full"
               />
               <Text className="text-[#898989] ml-2 text-xs">
                  Vito Manik . 3 Jam yang Lalu
               </Text>
            </View>
            <Text style={{ fontSize: 16 }} className="font-RedHatMedium">
               FTX stops sale of $10,000 in US futures, closes 10% of shares
            </Text>

            <Ionicons name="bookmark-outline" size={18} color="#898989" />
         </View>

         {/* Right */}
         <View className="w-[30%]">
            <Image
               src={dummyNewsImage}
               className="aspect-square object-cover rounded-md"
            />
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   titleContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
   },

   reactLogo: {
      objectFit: "cover",
      width: "100%",
      height: "100%",
      aspectRatio: 16 / 9,
      bottom: 0,
      left: 0,
      position: "absolute",
      justifyContent: "flex-end",
   },
});

const dummyNewsImage =
   "https://images.unsplash.com/photo-1668091818168-61a18ea51275?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
