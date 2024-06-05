import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useBottomSheetCustomContext } from "@/common/context/BottomSheetCustomContext";

type MarketPriceActionsProps = {
   titleCommodity: string;
};
const MarketPriceActions = (props: MarketPriceActionsProps) => {
   const { handleOpen } = useBottomSheetCustomContext();
   return (
      <View className="flex-row mb-1 items-center justify-between">
         <Text className="font-RedHatBold">{props.titleCommodity}</Text>
         <TouchableOpacity
            className="flex-row items-center"
            onPress={handleOpen}
         >
            <Text className="mr-2">Filter</Text>
            <Ionicons name="filter" />
         </TouchableOpacity>
      </View>
   );
};

export default MarketPriceActions;
