import { ForecastAssets } from "@/common/constants/ForecastAssets";
import { generateHumanDate } from "@/common/libs/utils";
import React from "react";
import { Image, Text, View } from "react-native";

const WeatherCard = () => {
   return (
      <View
         style={{ elevation: 1 }}
         className="h-[130] rounded-xl bg-secondary p-4 "
      >
         <View className="flex-row justify-between items-center">
            <View className="gap-y-1.5">
               <Text className="text-xs font-RedHatRegular">
                  {generateHumanDate()}
               </Text>
               <Text style={{ fontSize: 24 }} className="font-RedHatBold">
                  28°C
               </Text>
               <Text className="font-RedHatMedium font-bold">
                  Kelembapan 82%
               </Text>
            </View>

            {/* <View className="items-center"> */}
            <Image
               source={ForecastAssets.cloudyColorful}
               className="w-[100] h-[100] shadow-lg"
            />
            {/* <Text className="text-xs font-RedHatBold">Berawan</Text>
            </View> */}
         </View>
      </View>
   );
};

export default WeatherCard;
