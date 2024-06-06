import { View, Text, Image, ImageBackgroundProps } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const CarouselItem = (props: { srcImg: ImageBackgroundProps }) => {
   return (
      <View className="flex-1">
         <Image
            source={props.srcImg}
            style={{
               width: "100%",
               height: "100%",
            }}
         />
         <LinearGradient
            // Background Linear Gradient
            colors={["rgba(0,0,0,0.5)", "transparent"]}
            className="h-full left-0 right-0 bottom-0 absolute rotate-180"
         />
      </View>
   );
};

export default CarouselItem;
