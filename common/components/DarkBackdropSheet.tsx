import React, { useMemo } from "react";
import { BottomSheetBackdropProps } from "@gorhom/bottom-sheet";
import Animated, {
   Extrapolate,
   interpolate,
   useAnimatedStyle,
} from "react-native-reanimated";

const DarkBackdropSheet = ({
   animatedIndex,
   style,
}: BottomSheetBackdropProps) => {
   // animated variables
   const containerAnimatedStyle = useAnimatedStyle(() => ({
      opacity: interpolate(
         animatedIndex.value,
         [0, 0.6],
         [0, 0.6],
         Extrapolate.CLAMP
      ),
   }));

   // styles
   const containerStyle = useMemo(
      () => [
         style,
         {
            backgroundColor: "#000",
         },
         containerAnimatedStyle,
      ],
      [style, containerAnimatedStyle]
   );

   return <Animated.View style={containerStyle} />;
};

export default DarkBackdropSheet;
