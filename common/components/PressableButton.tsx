import { cn } from "@/common/libs/utils";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, PressableProps, Text, TextProps } from "react-native";

type PressableButtonProps = PressableProps & {
   icon?: keyof typeof Ionicons.glyphMap;
   iconSize?: number;
   iconColor?: string;

   title?: string;
   titleStyle?: string;
};

const PressableButton = (props: PressableButtonProps) => {
   const { icon, title, titleStyle } = props;

   return (
      <Pressable
         {...props}
         className={cn(
            "bg-primary w-[150] h-[50] justify-center items-center flex-row rounded-md"
         )}
      >
         {icon && (
            <Ionicons
               name={icon}
               size={props.iconSize || 20}
               color={props.iconColor || "white"}
            />
         )}
         <Text className={cn("", titleStyle)}>{title}</Text>
      </Pressable>
   );
};

export default PressableButton;
