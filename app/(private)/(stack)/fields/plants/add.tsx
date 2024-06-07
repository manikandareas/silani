import {
   View,
   Text,
   TextInput,
   TouchableOpacity,
   Pressable,
} from "react-native";
import React from "react";
import ViewContainer from "@/common/components/native/ViewContainer";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Picker } from "@react-native-picker/picker";

const AddPlants = () => {
   return (
      <ViewContainer className="py-4">
         <View className="">
            <View className="mb-4">
               <Text className="font-RedHatBold text-[#898989] mb-1.5">
                  Nama Tanaman
               </Text>

               <TextInput
                  style={{ fontSize: 16 }}
                  className="px-5 py-2 border rounded-lg border-[#E5E5E5]"
                  placeholder="Padi Kuning"
               />
               {/* <Text className="text-xs text-[#898989]">
                  <Text className="text-red-500">*</Text>Dalam satuan meter
               </Text> */}
            </View>
            <View className="mb-4">
               <Text className="font-RedHatBold text-[#898989] mb-1.5">
                  Jenis Tanaman
               </Text>
               <View className="border rounded-lg border-[#E5E5E5]">
                  <Picker

                  //  selectedValue={stateMarketPrice.selectedDataTypeID}
                  //  onValueChange={(itemValue, itemIndex) => {
                  //     stateMarketPrice.setSelectedDataTypeID(itemValue);
                  //     stateMarketPrice.setCommodities(itemValue);
                  //  }}
                  >
                     {/* {MarketPriceDataType.map((item, index) => ( */}
                     <Picker.Item label={"Sayuran"} value={"sayuran"} />
                     {/* ))} */}
                  </Picker>
               </View>
            </View>
            <View className="mb-4">
               <Text className="font-RedHatBold text-[#898989] mb-1.5">
                  Jenis Pupuk
               </Text>
               <View className="border rounded-lg border-[#E5E5E5]">
                  <Picker

                  //  selectedValue={stateMarketPrice.selectedDataTypeID}
                  //  onValueChange={(itemValue, itemIndex) => {
                  //     stateMarketPrice.setSelectedDataTypeID(itemValue);
                  //     stateMarketPrice.setCommodities(itemValue);
                  //  }}
                  >
                     {/* {MarketPriceDataType.map((item, index) => ( */}
                     <Picker.Item label={"Organik"} value={"organik"} />
                     {/* ))} */}
                  </Picker>
               </View>
            </View>
            <View className="mb-4">
               <Text className="font-RedHatBold text-[#898989] mb-1.5">
                  Estimasi Panen
               </Text>
               <TextInput
                  inputMode="numeric"
                  style={{ fontSize: 16 }}
                  className="px-5 py-2 border rounded-lg border-[#E5E5E5]"
                  placeholder="3"
               />
            </View>
            <View className="mb-4">
               <Text className="font-RedHatBold text-[#898989] mb-1.5">
                  Waktu Pupuk
               </Text>
               <TextInput
                  inputMode="numeric"
                  style={{ fontSize: 16 }}
                  className="px-5 py-2 border rounded-lg border-[#E5E5E5]"
                  placeholder="7"
               />
            </View>
            <View className="mb-4">
               <Text className="font-RedHatBold text-[#898989] mb-1.5">
                  Waktu Tanam
               </Text>
               <TextInput
                  style={{ fontSize: 16 }}
                  className="px-5 py-2 border rounded-lg border-[#E5E5E5]"
                  placeholder="07-06-2004"
               />
            </View>
         </View>

         <TouchableOpacity
            onPress={() => {
               router.push("/(private)/(stack)/fields/plants/add");
            }}
            className="p-3 bg-green-500 rounded-xl"
         >
            <Text
               style={{ fontSize: 16 }}
               className="font-RedHatBold text-white text-center"
            >
               Tambah 🌿
            </Text>
         </TouchableOpacity>
      </ViewContainer>
   );
};

export default AddPlants;

/*

Jenis Tanaman
Nama Tanaman
Jenis Pupuk
Estimasi Panen
Waktu Pupuk
Waktu Tanam


*/
