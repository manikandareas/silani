import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import ViewContainer from "@/common/components/native/ViewContainer";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const AddFieldScreen = () => {
   return (
      <ViewContainer className="py-4">
         <View className="">
            <View className="mb-4">
               <Text className="font-RedHatBold text-[#898989] mb-1.5">
                  Nama Ladang
               </Text>
               <TextInput
                  style={{ fontSize: 16 }}
                  className="px-3 py-2 border rounded-lg border-[#E5E5E5]"
                  placeholder="Ladangku"
               />
            </View>
            <View className="mb-4">
               <Text className="font-RedHatBold text-[#898989] mb-1.5">
                  Luas Ladang
               </Text>

               <TextInput
                  style={{ fontSize: 16 }}
                  className="px-3 py-2 border rounded-lg border-[#E5E5E5]"
                  placeholder="1000"
               />
               <Text className="text-xs text-[#898989]">
                  <Text className="text-red-500">*</Text>Dalam satuan meter
               </Text>
            </View>
            <View className="mb-4">
               <Text className="font-RedHatBold text-[#898989] mb-1.5">
                  Lokasi
               </Text>

               <View className="flex-row  items-center gap-x-1">
                  <Ionicons color={"green"} name="location-outline" size={24} />
                  <Text style={{ fontSize: 16 }}>Pilih Lokasi</Text>
               </View>
            </View>
            <View className="flex-row gap-x-1">
               <TouchableOpacity className="py-3 flex-1 px-3.5 rounded-xl bg-green-400">
                  <Text
                     style={{ fontSize: 16 }}
                     className="font-RedHatBold text-white text-center"
                  >
                     Buat
                  </Text>
               </TouchableOpacity>
               <TouchableOpacity
                  onPress={() => {
                     router.push("/(private)/(stack)/fields/plants/add");
                  }}
                  className="p-3 border rounded-xl border-green-500 bg-white"
               >
                  <Text
                     style={{ fontSize: 16 }}
                     className="font-RedHatBold text-green-500 text-center"
                  >
                     🌿
                  </Text>
               </TouchableOpacity>
            </View>
         </View>
      </ViewContainer>
   );
};

export default AddFieldScreen;
