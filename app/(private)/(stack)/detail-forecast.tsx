import ViewContainer from "@/common/components/native/ViewContainer";
import { Entypo, Feather } from "@expo/vector-icons";
import React from "react";
import { Image, Text, View } from "react-native";

const DetailForecast = () => {
   return (
      <ViewContainer>
         <View
            style={{ elevation: 1 }}
            className="relative  h-[250] ab mt-4 rounded-xl bg-slate-100 overflow-hidden"
         >
            {/* Additional images */}
            <Image
               source={require("@/assets/forecast/clouds-colorfull.png")}
               className="absolute w-20 h-20 top-1/2 left-0 opacity-25"
            />
            <Image
               source={require("@/assets/forecast/clouds-colorfull.png")}
               className="absolute w-20 h-20 right-0 top-1/3 opacity-25"
            />

            {/* End Additional images */}

            {/* Main Forecast */}
            <View className="px-6 py-4 h-full justify-between">
               <View className="flex-row  justify-between">
                  <View className="flex-1">
                     <Image
                        source={require("@/assets/forecast/cloudy-colorful.png")}
                        className="w-[100] h-[100] "
                     />
                  </View>
                  <View className="flex-1 gap-y-1">
                     <Text
                        style={{ fontSize: 18 }}
                        className="font-PoppinsBold mt-4"
                     >
                        Tomorrow
                     </Text>
                     <Text
                        style={{ fontSize: 16 }}
                        className="font-PoppinsBold mt-1 text-[#898989]"
                     >
                        <Text
                           className="text-black font-PoppinsBold"
                           style={{ fontSize: 26 }}
                        >
                           19
                        </Text>
                        /19°C
                     </Text>
                     <Text className="text-xs text-[#898989]">
                        Rainy Cloudy
                     </Text>
                  </View>
               </View>

               <View className="items-center justify-between flex-row  ">
                  <View className="items-center">
                     <Feather name="wind" size={24} color="#898989" />
                     <Text className="text-[#898989] text-sm font-RedHatMedium">
                        7km/h
                     </Text>
                     <Text className="text-[#898989] font-RedHatRegular text-xs">
                        Wind
                     </Text>
                  </View>
                  <View className="items-center mx-10">
                     <Feather name="cloud-rain" size={24} color="#898989" />
                     <Text className="text-[#898989] text-sm font-RedHatMedium">
                        10%
                     </Text>
                     <Text className="text-[#898989] font-RedHatRegular text-xs">
                        Chance of rain
                     </Text>
                  </View>
                  <View className="items-center">
                     <Entypo name="water" size={24} color="#898989" />
                     <Text className="text-[#898989] text-sm font-RedHatMedium">
                        Humidity
                     </Text>
                     <Text className="text-[#898989] font-RedHatRegular text-xs">
                        25%
                     </Text>
                  </View>
               </View>
            </View>
         </View>

         <View className="mt-2">
            {Array(6)
               .fill(0)
               .map((_, index) => (
                  <View
                     key={index}
                     className="items-center justify-between flex-row py-3 border-b border-[#e8e8e8]"
                  >
                     <Text
                        style={{ fontSize: 16 }}
                        className="font-PoppinsBold"
                     >
                        Sat
                     </Text>
                     <View className="flex-row items-center gap-x-1">
                        <Image
                           source={require("@/assets/forecast/cloudy-colorful.png")}
                           className="w-[30] h-[30]"
                        />
                        <Text
                           style={{ fontSize: 14 }}
                           className=" font-RedHatMedium text-[#898989]"
                        >
                           Rainy - Cloudy
                        </Text>
                     </View>
                     <View className="flex-row gap-2 items-end">
                        <Text
                           style={{ fontSize: 14 }}
                           className=" font-RedHatRegular"
                        >
                           19°C
                        </Text>
                        <Text className=" font-RedHatRegular text-xs text-[#898989]">
                           7°C
                        </Text>
                     </View>
                  </View>
               ))}
         </View>
      </ViewContainer>
   );
};

export default DetailForecast;
