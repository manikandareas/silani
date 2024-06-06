import ForecastCardBackground from "@/common/components/ForecastCardBackground";
import ForecastParameter, {
   ForecastParametersItemProps,
} from "@/common/components/ForecastParameters";
import ForecastPerHour from "@/common/components/ForecastPerHour";
import ForecastTitle from "@/common/components/ForecastTitle";
import ViewContainer from "@/common/components/native/ViewContainer";
import { ForecastAssets } from "@/common/constants/ForecastAssets";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
   Image,
   ImageSourcePropType,
   Pressable,
   Text,
   View,
} from "react-native";

const Forecast = () => {
   const router = useRouter();
   return (
      <ViewContainer>
         <ForecastTitle title="Today" date={new Date().toDateString()} />
         <ForecastCardBackground>
            <View className="items-center  w-full h-full">
               <Image
                  source={ForecastAssets.cloudyColorful}
                  className="w-[150] h-[150] "
               />
               <Text
                  style={{ fontSize: 18 }}
                  className="font-RedHatRegular mt-4 text-[#898989]"
               >
                  Cerah Berawan
               </Text>
               <Text style={{ fontSize: 26 }} className="font-RedHatBold mt-1">
                  28°C
               </Text>

               <ForecastParameter data={FORECAST_PARAMETERS} />
            </View>
         </ForecastCardBackground>

         <View className="flex-row justify-between mt-4 border-b border-[#eaeaea] py-2">
            <Text className="text-yellow-500">Today</Text>
            <Pressable
               onPress={() => router.push("/detail-forecast")}
               className="flex-row items-center"
            >
               <Text className="text-[#898989]">Next 7 days</Text>
               <Ionicons name="chevron-forward" color={"#898989"} size={18} />
            </Pressable>
         </View>

         {/* Forecast per hours */}
         <ForecastPerHour data={FORECAST_PER_HOURS} />
      </ViewContainer>
   );
};

export default Forecast;

const FORECAST_PER_HOURS: {
   imgSource: ImageSourcePropType | undefined;
   title: string;
   subtitle: string;
}[] = [
   {
      imgSource: ForecastAssets.cloudyColorful,
      title: "21°C",
      subtitle: "now",
   },
   {
      imgSource: ForecastAssets.drizzling,
      title: "20°C",
      subtitle: "17:00",
   },
   {
      imgSource: ForecastAssets.rainyColorful,
      title: "22°C",
      subtitle: "18:00",
   },
   {
      imgSource: ForecastAssets.stormy,
      title: "23°C",
      subtitle: "19:00",
   },
];

const FORECAST_PARAMETERS: ForecastParametersItemProps[] = [
   {
      iconSource: "feather",
      iconName: "wind",
      title: "Wind",
      subtitle: "7km/h",
   },
   {
      iconSource: "feather",
      iconName: "cloud-rain",
      title: "Chance of rain",
      subtitle: "10%",
   },
   {
      iconSource: "entypo",
      iconName: "water",
      title: "Humidity",
      subtitle: "25%",
   },
];
