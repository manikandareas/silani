import ViewContainer from "@/common/components/native/ViewContainer";
import DummyProfile from "@/common/constants/DummyProfile";
import { cn } from "@/common/libs/utils";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { Alert, Image, Pressable, Text, View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

const Profile = () => {
   const { user } = useUser();
   const { signOut } = useAuth();

   const [isLoading, setIsLoading] = useState<boolean>(false);

   const handlerSignOut = () => {
      setIsLoading(true);

      Alert.alert("Sign Out", "Are you sure you want to sign out?", [
         {
            text: "Cancel",
            onPress: () => console.log("cancel"),
            style: "cancel",
         },
         {
            text: "Sign Out",
            onPress: async () => {
               await signOut({ redirectUrl: "/login" });
            },
            style: "destructive",
         },
      ]);
      setIsLoading(false);
   };
   return (
      <ViewContainer>
         <Spinner visible={isLoading} />
         <View className="flex-row ">
            <Image
               src={user?.imageUrl}
               className="aspect-square w-[50] rounded-full"
            />
            <View className="ml-3">
               <Text className="mb-1">{user?.fullName}</Text>
               <Text className="text-[#898989] font-RedHatRegular text-xs">
                  {DummyProfile.address}
               </Text>
            </View>
         </View>
         <View className="">
            <Text className="font-RedHatMedium mb-4 mt-4">Pengaturan</Text>
            {SettingsItems.map((item, index) => (
               <SettingsItem
                  key={index}
                  title={item.title}
                  icon={item.icon}
                  onPress={item.onPress}
               />
            ))}
            <Pressable
               onPress={handlerSignOut}
               className="flex-row items-center justify-center bg-red-500 py-2 rounded-xl"
            >
               <Ionicons
                  name="log-out-outline"
                  size={ICON_SIZE}
                  color="white"
               />
               <Text className="ml-3 text-white">Keluar</Text>
            </Pressable>
         </View>
      </ViewContainer>
   );
};

export default Profile;

type SettingsItemProps = {
   title: string;
   icon: JSX.Element;
   onPress: () => void;
};
const SettingsItem = (props: SettingsItemProps) => {
   return (
      <Pressable
         onPress={() => router.push("/profile/detail")}
         className="flex-row mb-4 items-center justify-between"
      >
         <View className="flex-row items-center">
            {props.icon}
            <Text
               // style={{ fontSize: 14 }}
               className={cn("ml-3  font-RedHatRegular ", {
                  "text-red-500": props.title === "Keluar",
               })}
            >
               {props.title}
            </Text>
         </View>

         <Ionicons name="chevron-forward" color={"#898989"} size={20} />
      </Pressable>
   );
};

const ICON_SIZE = 21;

const SettingsItems = [
   {
      title: "Infromasi Pribadi",
      icon: <Ionicons name="person-circle-outline" size={ICON_SIZE} />,
      onPress: () => {},
   },

   {
      title: "Preferensi Tampilan",
      icon: <Entypo name="sound-mix" size={ICON_SIZE} />,
      onPress: () => {},
   },
   {
      title: "Bahasa",
      icon: <Ionicons name="language-outline" size={ICON_SIZE} />,
      onPress: () => {},
   },
   {
      title: "Dokumentasi",
      icon: <Ionicons name="document-outline" size={ICON_SIZE} />,
      onPress: () => {},
   },
   // {
   //    title: "Keluar",
   //    icon: (
   //       <Ionicons
   //          name="log-out-outline"
   //          style={{ color: "rgb(239 68 68 / var(--tw-text-opacity))" }}
   //          size={ICON_SIZE}
   //       />
   //    ),
   //    onPress: () => {},
   // },
];
