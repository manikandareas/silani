import { cn } from "@/common/libs/utils";
import React, { ComponentProps } from "react";
import { View } from "react-native";

type ViewContainerProps = ComponentProps<typeof View>;

// type Props = Omit<ComponentProps<typeof Link>, 'href'> & { href: string };
const ViewContainer = (props: ViewContainerProps) => {
   const { className, ...rest } = props;
   return (
      <View {...rest} className={cn("flex-1 bg-white px-[20]", className)}>
         {props.children}
      </View>
   );
};

export default ViewContainer;
