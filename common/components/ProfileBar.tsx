import DummyProfile from "@/common/constants/DummyProfile";
import { useUser } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, View } from "react-native";
// import { useSession } from "@/context/SessionContext";

const ProfileBar = () => {
   const { user } = useUser();

   return (
      <View className="flex-row justify-between items-center mb-2">
         <View className="flex-row gap-x-2 items-center">
            <Image
               src={user?.imageUrl || DummyProfile.avatarUrl}
               className="w-[45] h-[45] rounded-full"
            />
            <View>
               <Text className="font-RedHatRegular text-xs text-[#898989]">
                  Halo, Selamat Pagi👋
               </Text>
               <Text className="font-RedHatBold">{user?.fullName}</Text>
            </View>
         </View>

         <Ionicons
            name="notifications"
            size={24}
            style={{ transform: "rotate(45deg)" }}
         />
      </View>
   );
};

export default ProfileBar;
