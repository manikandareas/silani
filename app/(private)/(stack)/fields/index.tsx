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

const MyField = () => {
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
         </ViewContainer>
      </BottomSheetModalProvider>
   );
};

export default MyField;
