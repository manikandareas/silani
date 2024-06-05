import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const FieldList = () => {
   return (
      <View className="mt-3">
         <FlatList
            data={DummyLadang}
            renderItem={({ index, item }) => (
               <FieldItem
                  key={index}
                  name={item.name}
                  address={item.address}
                  image={item.image}
               />
            )}
         />
      </View>
   );
};

export default FieldList;

type FieldItemProps = {
   name: string;
   address: string;
   image: string;
};
export const FieldItem = (props: FieldItemProps) => {
   return (
      <View
         style={{ elevation: 1 }}
         className="rounded-xl mb-3 h-[157] overflow-hidden flex-row bg-white"
      >
         <Image src={props.image} className="w-2/4 h-[157] rounded-xl" />
         <View className="px-4 py-3 justify-between">
            <View>
               <Text className="font-RedHatBold">{props.name}</Text>
               <Text className="font-RedHatRegular text-[#898989] text-sm">
                  {props.address}
               </Text>
            </View>

            <View className="">
               <View className="flex-row items-center">
                  <Ionicons name="map" size={20} />
                  <Text className="ml-1.5 text-xs">Lihat di map</Text>
               </View>
               <View className="flex-row items-center">
                  <MaterialCommunityIcons name="box-shadow" size={20} />
                  <Text className="ml-1.5 text-xs">1000 x 1000</Text>
               </View>
            </View>
         </View>
      </View>
   );
};

const DummyLadang = [
   {
      name: "Ladang Loa Janan Ilir",
      address: "Jl. Soekarno Hatta Km.1",
      image: "https://images.unsplash.com/photo-1504280645497-00afe6a47e43?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   },
   {
      name: "Ladang Manggar",
      address: "Jl. Manggar Balikpapan",
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   },
];
