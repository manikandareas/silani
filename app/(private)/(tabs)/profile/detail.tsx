import { View, Text, Image, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import ViewContainer from "@/common/components/native/ViewContainer";
import DummyProfile from "@/common/constants/DummyProfile";
import { useUser } from "@clerk/clerk-expo";
import { Picker } from "@react-native-picker/picker";
import {
   DateTimePickerAndroid,
   DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

const DetailProfile = () => {
   const { user } = useUser();

   const [dob, setDob] = useState<Date>(new Date());

   const onChange = (
      _: DateTimePickerEvent,
      selectedDate: Date | undefined
   ) => {
      const currentDate = selectedDate;
      setDob(currentDate!);
   };

   const showChooserDate = (currentMode: "date" | "time") => {
      DateTimePickerAndroid.open({
         value: dob!,
         onChange,
         mode: currentMode,
         is24Hour: true,
         maximumDate: new Date(),
      });
   };

   const showDatepicker = () => {
      showChooserDate("date");
   };

   return (
      <ViewContainer className="pt-2">
         <View className=" justify-center items-center gap-y-4 pb-6 border-b border-[#E5E5E5]">
            <Image
               src={user?.imageUrl}
               className="aspect-square w-[80] rounded-full"
            />
            <View className="ml-3">
               <Text className="font-PoppinsMedium text-center">
                  {user?.fullName}
               </Text>
               <Text className="text-[#898989] text-center font-PoppinsRegular text-xs">
                  {DummyProfile.address}
               </Text>
            </View>
         </View>

         <View className="pt-4">
            <View className="mb-4">
               <Text className="font-RedHatBold text-[#898989] mb-1.5">
                  Nama
               </Text>

               <TextInput
                  style={{ fontSize: 16 }}
                  className="px-5 py-2 border rounded-lg border-[#E5E5E5]"
                  placeholder={user?.fullName ?? "Paijo"}
                  defaultValue={user?.firstName!}
               />
               {/* <Text className="text-xs text-[#898989]">
                  <Text className="text-red-500">*</Text>Dalam satuan meter
               </Text> */}
            </View>
            <View className="mb-4">
               <Text className="font-RedHatBold text-[#898989] mb-1.5">
                  Email
               </Text>

               <TextInput
                  inputMode="email"
                  style={{ fontSize: 16 }}
                  className="px-5 py-2 border rounded-lg border-[#E5E5E5]"
                  placeholder={user?.emailAddresses[0]?.emailAddress ?? "Paijo"}
                  defaultValue={user?.emailAddresses[0]?.emailAddress!}
               />
               {/* <Text className="text-xs text-[#898989]">
                  <Text className="text-red-500">*</Text>Dalam satuan meter
               </Text> */}
            </View>

            <View className="mb-4">
               <Text className="font-RedHatBold text-[#898989] mb-1.5">
                  Tanggal Lahir
               </Text>
               <Pressable
                  onPress={showDatepicker}
                  className="px-5 py-3.5 border rounded-lg border-[#E5E5E5]"
               >
                  <Text>{dob.toDateString()}</Text>
               </Pressable>
            </View>

            <Pressable className="bg-primary h-[50] justify-center items-center flex-row rounded-lg">
               <Text className="font-PoppinsRegular">Simpan</Text>
            </Pressable>
         </View>
      </ViewContainer>
   );
};

export default DetailProfile;
