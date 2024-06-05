import { View, Text, Image, ImageSourcePropType } from "react-native";
import React from "react";

const ForecastPerHour = (props: { data: ForecastPerHourItemProps[] }) => {
   return (
      <View className="items-center flex-1 flex-row justify-between mt-4">
         {props.data.map((item, index) => (
            <ForecastPerHourItem key={index} {...item} />
         ))}
      </View>
   );
};

export default ForecastPerHour;
type ForecastPerHourItemProps = {
   imgSource: ImageSourcePropType | undefined;
   title: string;
   subtitle: string;
};

const ForecastPerHourItem = (props: ForecastPerHourItemProps) => {
   return (
      <View className="items-center gap-y-1">
         <Image className="w-10 h-10" source={props.imgSource} />
         <Text
            style={{ fontSize: 14 }}
            className="font-RedHatBold text-[#898989]"
         >
            {props.title}
         </Text>
         <Text className="font-RedHatMedium text-[#898989]">
            {props.subtitle}
         </Text>
      </View>
   );
};
