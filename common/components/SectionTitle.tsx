import { View, Text } from "react-native";
import React from "react";

const SectionTitle = (props: { title: string }) => {
   return (
      <Text
         style={{ fontSize: 18 }}
         className="font-RedHatBold mb-[12] mt-[14]"
      >
         {props.title}
      </Text>
   );
};

export default SectionTitle;
