import { cn } from "@/common/libs/utils";
import React from "react";
import { Text, TextProps } from "react-native";

type OnBoardingTextProps = TextProps & {
   textSize: keyof typeof OnBoardingTextVariants;
   text: string;
};

const OnBoardingTextVariants = {
   sm: 14,
   md: 16,
   lg: 18,
   xl: 24,
};

const OnBoardingText = (props: OnBoardingTextProps) => {
   const { className, children, style, textSize, text, ...textProps } = props;
   return (
      <Text
         {...textProps}
         style={[
            {
               fontSize: OnBoardingTextVariants[textSize],
            },
            style,
         ]}
         className={cn("font-RedHatRegular text-white", className)}
      >
         {text}
      </Text>
   );
};

export default OnBoardingText;
