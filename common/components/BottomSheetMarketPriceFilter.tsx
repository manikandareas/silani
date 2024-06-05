import { MarketPriceDataType } from "@/common/constants/MarketPriceParameter";
import { useBottomSheetCustomContext } from "@/common/context/BottomSheetCustomContext";
import {
   getMarketPrice,
   getNameOfCommodity,
} from "@/common/services/market-price";
import { useMarketPriceParameterStore } from "@/common/store/market-price";
import { Ionicons } from "@expo/vector-icons";
import {
   BottomSheetBackdropProps,
   BottomSheetModal,
   BottomSheetView,
} from "@gorhom/bottom-sheet";
import {
   DateTimePickerAndroid,
   DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useCallback } from "react";
import { Pressable, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useShallow } from "zustand/react/shallow";
import DarkBackdropSheet from "./DarkBackdropSheet";

type BottomSheetMarketPriceFilterProps = {
   setTitleCommodity: (title: string) => void;
};

const BottomSheetMarketPriceFilter = (
   props: BottomSheetMarketPriceFilterProps
) => {
   const queryClient = useQueryClient();

   const { handleClose, handleOpen, ref, setSnapPoints, snapPoints } =
      useBottomSheetCustomContext();

   const renderBackdrop = useCallback(
      (props: BottomSheetBackdropProps) => <DarkBackdropSheet {...props} />,
      []
   );

   const stateMarketPrice = useMarketPriceParameterStore(
      useShallow((state) => state)
   );

   const onChange = (
      _: DateTimePickerEvent,
      selectedDate: Date | undefined
   ) => {
      const currentDate = selectedDate;
      stateMarketPrice.setSelectedDate(currentDate!);
   };

   const showChooserDate = (currentMode: "date" | "time") => {
      DateTimePickerAndroid.open({
         value: stateMarketPrice.selectedDate!,
         onChange,
         mode: currentMode,
         is24Hour: true,
         maximumDate: new Date(),
      });
   };

   const showDatepicker = () => {
      showChooserDate("date");
   };

   // TODO : Display data from API
   const { data: marketPriceData, isLoading } = useQuery({
      queryFn: () =>
         getMarketPrice({
            commodityId: stateMarketPrice.selectedCommodityID,
            date: stateMarketPrice.selectedDate,
            dataTypeId: stateMarketPrice.selectedDataTypeID,
         }),
      queryKey: ["market-price"],
   });

   // TODO : Implement filter data
   const handleFilterMarket = () => {
      ref.current?.close();
      queryClient.invalidateQueries({ queryKey: ["market-price"] });
      props.setTitleCommodity(
         getNameOfCommodity(
            stateMarketPrice.selectedDataTypeID,
            stateMarketPrice.selectedCommodityID
         )
      );
   };

   return (
      <BottomSheetModal
         ref={ref}
         index={1}
         snapPoints={snapPoints}
         backdropComponent={renderBackdrop}
      >
         <BottomSheetView style={{ flex: 1, paddingHorizontal: 20 }}>
            <Text className="font-RedHatBold text-lg text-center mb-4">
               Filter Pasar
            </Text>

            {/* Form Filter */}
            <View className="">
               <View className="mb-4">
                  <Text className="font-RedHatBold text-[#898989]">
                     Jenis Data Panel
                  </Text>
                  <Picker
                     style={{ borderWidth: 10 }}
                     className="border"
                     selectedValue={stateMarketPrice.selectedDataTypeID}
                     onValueChange={(itemValue, itemIndex) => {
                        stateMarketPrice.setSelectedDataTypeID(itemValue);
                        stateMarketPrice.setCommodities(itemValue);
                     }}
                  >
                     {MarketPriceDataType.map((item, index) => (
                        <Picker.Item
                           key={item.id}
                           label={item.nama}
                           value={item.id}
                        />
                     ))}
                  </Picker>
               </View>
               <View className="mb-4">
                  <Text className="font-RedHatBold text-[#898989]">
                     Komoditas
                  </Text>
                  <Picker
                     style={{ borderWidth: 10 }}
                     className="border"
                     selectedValue={stateMarketPrice.selectedCommodityID}
                     onValueChange={(itemValue, itemIndex) =>
                        stateMarketPrice.setSelectedCommodityID(itemValue)
                     }
                  >
                     {stateMarketPrice.commodities.map((item, index) => (
                        <Picker.Item
                           key={index + item.id}
                           label={item.nama}
                           value={item.id}
                        />
                     ))}
                  </Picker>
               </View>

               <View className="mb-4">
                  <Text className="font-RedHatBold text-[#898989]">
                     Tanggal
                  </Text>

                  <View className="items-center pr-3">
                     <Pressable
                        className="py-3 pl-4 items-center w-full justify-between flex-row"
                        onPress={showDatepicker}
                     >
                        <Text
                           style={{ fontSize: 16 }}
                           className="font-RedHatMedium"
                        >
                           {stateMarketPrice.selectedDate?.toDateString()}
                        </Text>
                        <Ionicons
                           name="calendar-outline"
                           color={"#898989"}
                           size={24}
                        />
                     </Pressable>
                  </View>
               </View>

               <TouchableOpacity
                  onPress={handleFilterMarket}
                  className="py-3 px-3.5 rounded-xl bg-green-400"
               >
                  <Text
                     style={{ fontSize: 16 }}
                     className="font-RedHatBold text-white text-center"
                  >
                     Cari
                  </Text>
               </TouchableOpacity>
            </View>
         </BottomSheetView>
      </BottomSheetModal>
   );
};

export default BottomSheetMarketPriceFilter;
