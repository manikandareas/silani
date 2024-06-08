import Spinner from "@/common/components/Spinner";
import ViewContainer from "@/common/components/native/ViewContainer";
import DummyProfile from "@/common/constants/DummyProfile";
import { cn } from "@/common/libs/utils";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { Alert, Image, Pressable, Text, View } from "react-native";

const Profile = () => {
   const { user } = useUser();
   const { signOut } = useAuth();

   const [isLoading, setIsLoading] = useState<boolean>(false);

   const handlerSignOut = () => {
      setIsLoading(true);

      Alert.alert("Sign Out", "Anda yakin ingin keluar?", [
         {
            text: "Batal",
            onPress: () => console.log("cancel"),
            style: "cancel",
         },
         {
            text: "Keluar",
            onPress: async () => {
               await signOut({ redirectUrl: "/(public)/login" });
            },
            style: "destructive",
         },
      ]);
      setIsLoading(false);
   };
   return (
      <ViewContainer>
         <Spinner visible={isLoading} />
         <View className=" justify-center items-center gap-y-4">
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
            <Pressable
               onPress={() => router.push("/profile/detail")}
               className="py-2 px-3 rounded-md bg-[#E5E5E5]"
            >
               <Text className="font-PoppinsRegular">Edit Profile</Text>
            </Pressable>
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
               className="flex-row mb-4 items-center justify-between"
            >
               <View className="flex-row items-center">
                  <Ionicons
                     name="log-out-outline"
                     size={ICON_SIZE}
                     color={"rgb(239 68 68)"}
                  />
                  <Text
                     // style={{ fontSize: 14 }}
                     className={cn("ml-3  font-PoppinsRegular ")}
                  >
                     <Text className="ml-3 font-PoppinsRegular text-red-500">
                        Keluar
                     </Text>
                  </Text>
               </View>
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
         // onPress={() => router.push("/profile/detail")}
         className="flex-row mb-4 items-center justify-between"
      >
         <View className="flex-row items-center">
            {props.icon}
            <Text
               // style={{ fontSize: 14 }}
               className={cn("ml-3  font-PoppinsRegular ", {
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
      title: "Preferensi Tampilan",
      icon: <Entypo name="sound-mix" size={ICON_SIZE} />,
      onPress: () => {},
   },
   {
      title: "Ganti Password",
      icon: <Ionicons name="lock-closed-outline" size={ICON_SIZE} />,
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
