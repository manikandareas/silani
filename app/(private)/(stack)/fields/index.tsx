import DarkBackdropSheet from "@/common/components/DarkBackdropSheet";
import FieldList from "@/common/components/FieldList";
import ViewContainer from "@/common/components/native/ViewContainer";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
   BottomSheetBackdropProps,
   BottomSheetModal,
   BottomSheetModalProvider,
   BottomSheetView,
} from "@gorhom/bottom-sheet";
import { router } from "expo-router";
import React, { useCallback, useMemo, useRef } from "react";
import {
   StyleSheet,
   Text,
   TextInput,
   View,
   TouchableOpacity,
} from "react-native";

const LadangKu = () => {
   // ref
   const bottomSheetModalRef = useRef<BottomSheetModal>(null);

   // variables
   const snapPoints = useMemo(() => ["60%", "60%"], []);

   // callbacks
   const handlePresentModalPress = useCallback(() => {
      bottomSheetModalRef.current?.present();
   }, []);

   const handleSheetChanges = useCallback((index: number) => {
      console.log("handleSheetChanges", index);
   }, []);

   const renderBackdrop = useCallback(
      (props: BottomSheetBackdropProps) => <DarkBackdropSheet {...props} />,
      []
   );

   const [selectedLanguage, setSelectedLanguage] = React.useState("Java");

   return (
      <BottomSheetModalProvider>
         <ViewContainer className="py-4">
            <View className="flex-row items-center justify-between">
               <TouchableOpacity
                  onPress={() => router.push("/(private)/(stack)/fields/add")}
                  className="bg-white border border-green-500 px-4 py-2 overflow-clip rounded-lg items-center flex-row"
               >
                  <Text className="font-RedHatBold mr-1.5 text-green-500">
                     Tambah
                  </Text>
                  <Ionicons
                     name="create-outline"
                     color={" rgb(34 197 94)"}
                     className="text-green-500"
                     size={20}
                  />
               </TouchableOpacity>
               <TouchableOpacity>
                  <MaterialCommunityIcons
                     name="filter-menu-outline"
                     size={24}
                  />
               </TouchableOpacity>
            </View>

            <FieldList />

            <BottomSheetModal
               ref={bottomSheetModalRef}
               index={1}
               snapPoints={snapPoints}
               onChange={handleSheetChanges}
               backdropComponent={renderBackdrop}
            >
               <BottomSheetView style={styles.bottomSheet}>
                  <Text className="font-RedHatBold text-lg text-center mb-4">
                     Tambahkan Ladang
                  </Text>
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
                           <Text className="text-red-500">*</Text>Dalam satuan
                           meter
                        </Text>
                     </View>
                     <View className="mb-4">
                        <Text className="font-RedHatBold text-[#898989] mb-1.5">
                           Lokasi
                        </Text>

                        <View className="flex-row  items-center gap-x-1">
                           <Ionicons
                              color={"green"}
                              name="location-outline"
                              size={24}
                           />
                           <Text style={{ fontSize: 16 }}>Pilih Lokasi</Text>
                        </View>
                     </View>
                     <TouchableOpacity className="py-3 px-3.5 rounded-xl bg-green-400">
                        <Text
                           style={{ fontSize: 16 }}
                           className="font-RedHatBold text-white text-center"
                        >
                           Buat
                        </Text>
                     </TouchableOpacity>
                  </View>
               </BottomSheetView>
            </BottomSheetModal>
         </ViewContainer>
      </BottomSheetModalProvider>
   );
};

export default LadangKu;

const styles = StyleSheet.create({
   bottomSheet: {
      flex: 1,
      paddingHorizontal: 20,
   },
});
