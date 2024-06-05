import { View, Text } from "react-native";
import React from "react";

const ForecastTitle = (props: { title: string; date: string }) => {
   return (
      <View className="items-center">
         <Text style={{ fontSize: 18 }} className="font-RedHatBold">
            {props.title}
         </Text>
         <Text className="font-RedHatRegular text-[#898989]">{props.date}</Text>
      </View>
   );
};

export default ForecastTitle;
