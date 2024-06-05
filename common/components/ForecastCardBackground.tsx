import React, { ReactElement } from "react";
import { Image, View } from "react-native";

const ForecastCardBackground = (props: { children: ReactElement }) => {
   return (
      <View
         style={{ elevation: 1 }}
         className="relative justify-center items-center h-[400] ab mt-4 rounded-xl bg-slate-100 overflow-hidden"
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
         <Image
            source={require("@/assets/forecast/sun-colorful.png")}
            className="absolute w-[200] h-[200] -top-[80] -right-[80] opacity-25"
         />
         {/* End Additional images */}

         {/* Main Forecast */}
         {props.children}
      </View>
   );
};

export default ForecastCardBackground;
