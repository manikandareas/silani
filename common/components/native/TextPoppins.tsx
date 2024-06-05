import { cn } from "@/common/libs/utils";
import React, { ComponentProps } from "react";
import { Text } from "react-native";

type TextPoppinsProps = ComponentProps<typeof Text>;

const TextPoppins = (props: TextPoppinsProps) => {
   const { children, className, ...rest } = props;
   return (
      <Text {...rest} className={cn("font-PoppinsRegular ", className)}>
         {children}
      </Text>
   );
};

export default TextPoppins;
