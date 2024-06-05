import { Entypo, Feather } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

export type ForecastParametersProps = {
   data: ForecastParametersItemProps[];
};

const ForecastParameters = (props: ForecastParametersProps) => {
   return (
      <View className="items-center flex-1 w-full justify-evenly flex-row">
         {props.data.map((item, index) => (
            <ForecastParameterItem key={index} {...item} />
         ))}
      </View>
   );
};

export default ForecastParameters;

export type ForecastParametersItemProps = {
   iconName: keyof typeof Feather.glyphMap | keyof typeof Entypo.glyphMap;
   iconSource: "feather" | "entypo";
   title: string;
   subtitle: string;
};
export const ForecastParameterItem = (props: ForecastParametersItemProps) => {
   const Icon = {
      feather: Feather,
      entypo: Entypo,
   }[props.iconSource];
   return (
      <View className="items-center ">
         <Icon name={props.iconName as any} size={24} color="#898989" />
         <Text className="text-[#898989] text-sm font-RedHatMedium">
            {props.title}
         </Text>
         <Text className="text-[#898989] font-RedHatRegular text-xs">
            {props.subtitle}
         </Text>
      </View>
   );
};
