import { PROVINCE } from "@/common/constants/MarketPriceFilter";
import { cn } from "@/common/libs/utils";
import { BPNMarketPricePerProvince } from "@/common/types/bpn";
import { Ionicons } from "@expo/vector-icons";
import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { FlatList, Image, RefreshControl, Text, View } from "react-native";
import {
   formatCurrency,
   getSupportedCurrencies,
} from "react-native-format-currency";

type MarketPriceListProps = {
   data: BPNMarketPricePerProvince;
};

const MarketPriceList = (props: MarketPriceListProps) => {
   const [refreshing, setRefreshing] = React.useState(false);

   const queryClient = useQueryClient();

   const onRefresh = React.useCallback(async () => {
      setRefreshing(true);
      await queryClient.invalidateQueries({
         queryKey: ["market-price"],
      });
      setRefreshing(false);
   }, []);

   const data = props.data.data.map((item, idx) => ({
      ...item,
      avatarUrl: PROVINCE[idx]["link-asset"],
   }));

   return (
      <View className="">
         <FlatList
            data={data}
            refreshControl={
               <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            contentContainerStyle={{
               paddingBottom: 20,
               paddingTop: 10,
               gap: 10,
            }}
            renderItem={({ index, item }) => (
               <MarketPriceItem key={index} {...item} />
            )}
         />
      </View>
   );
};

export default MarketPriceList;

type MarketPriceItemProps = BPNMarketPricePerProvince["data"][number] & {
   avatarUrl: string;
};

export const MarketPriceItem = (props: MarketPriceItemProps) => {
   const [idr] =
      props.geomean === "-"
         ? "-"
         : formatCurrency({ amount: props.geomean as number, code: "IDR" });

   const disparity =
      typeof props.disparitas_percent === "number"
         ? props.disparitas_percent.toFixed(2)
         : props.disparitas_percent;
   return (
      <View className="flex-row h-[80] px-[2] py-[3] border-b border-[#E5E5E5] overflow-hidden">
         <View className="flex-row items-center flex-1">
            <Image
               src={props.avatarUrl}
               className="w-[60] h-[60] rounded-full"
            />

            <View>
               <Text className="ml-3 font-RedHatBold">
                  {props.province_name}
               </Text>
               <Text className="ml-3 font-RedHatMedium">{idr}</Text>
            </View>
         </View>

         <View className="justify-between items-end">
            <Ionicons name="information-circle-outline" size={20} />
            <Text
               className={cn(
                  "text-white text-xs px-2 py-1 rounded-lg bg-green-400 font-RedHatMedium",
                  {
                     "bg-yellow-400":
                        props.disparitas_percent > 0 &&
                        props.disparitas_percent <= 5,
                  },
                  { "bg-red-400": props.disparitas_percent > 5 }
               )}
            >
               {disparity}%
            </Text>
         </View>
      </View>
   );
};

const dummyImage =
   "https://images.unsplash.com/photo-1591017683260-655b616bfb17?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const MarketPriceDummy = [
   {
      province: "Aceh",
      disparity: 4.5, // less than 5
      price: 14480,
   },
   {
      province: "Bali",
      disparity: 5.8, // valid range
      price: 15820,
   },
   {
      province: "Banten",
      disparity: 7.1, // valid range
      price: 15100,
   },
   {
      province: "Bengkulu",
      disparity: 3.2, // less than 5
      price: 14750,
   },
   {
      province: "Central Java",
      disparity: -2.5, // negative
      price: 14200,
   },
   {
      province: "East Java",
      disparity: 6.0, // valid range
      price: 14500,
   },
   {
      province: "Jakarta",
      disparity: -3.1, // negative
      price: 15000,
   },
   {
      province: "West Java",
      disparity: 6.2, // valid range
      price: 14300,
   },
   {
      province: "Lampung",
      disparity: 6.75, // valid range
      price: 14900,
   },
   {
      province: "North Sumatra",
      disparity: -1.9, // negative
      price: 14850,
   },
   {
      province: "South Sulawesi",
      disparity: 2.4, // less than 5
      price: 14600,
   },
   {
      province: "West Kalimantan",
      disparity: 1.5, // less than 5
      price: 14450,
   },
   {
      province: "Yogyakarta",
      disparity: 5.85, // valid range
      price: 14100,
   },
];
