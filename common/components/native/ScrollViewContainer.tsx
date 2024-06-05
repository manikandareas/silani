import { cn } from "@/common/libs/utils";
import React, { ComponentProps } from "react";
import { ScrollView } from "react-native";

type ScrollViewContainerProps = ComponentProps<typeof ScrollView>;

// type Props = Omit<ComponentProps<typeof Link>, 'href'> & { href: string };
const ScrollViewContainer = (props: ScrollViewContainerProps) => {
   const { className, ...rest } = props;
   return (
      <ScrollView
         {...rest}
         className={cn("flex-1 bg-white px-[20]", className)}
      >
         {props.children}
      </ScrollView>
   );
};

export default ScrollViewContainer;
