import { View, Text, Pressable, TouchableHighlight } from "react-native";
import React from "react";
import ViewContainer from "@/common/components/native/ViewContainer";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "@/common/constants/Colors";
import { Link, router } from "expo-router";
import { useUser } from "@clerk/clerk-expo";

const GetStartedScreen = () => {
   const { user } = useUser();

   const grey = "#9B9B9B";
   return (
      <ViewContainer className="-[]">
         <SafeAreaView>
            <MaterialCommunityIcons
               name="hand-heart-outline"
               color={Colors.primary}
               size={50}
               style={{ marginTop: 80 }}
            />
            <Text className="text-xs font-PoppinsMedium mt-[30] mb-[10]">
               Selamat datang {user?.fullName}
            </Text>
            <View className="gap-y-6">
               <Text className="text-2xl font-PoppinsSemiBold">
                  Silani is a community where anyone can belong
               </Text>
               <Text className="text-sm tracking-wider font-PoppinsRegular">
                  Mari tambahkan ladang pertamamu!
               </Text>
               <Text className="text-sm font-PoppinsRegular tracking-wider">
                  Dengan ladang kamu dapat memantau pertumbuhan tanaman-tanaman
                  yang kamu punya, tidak hanya itu pada ladang terdapat
                  fitur-fitur lain yang dapat meningkatkan produktifitas
                  ladangmu🌱
               </Text>

               <Link className="underline font-PoppinsMedium" href={"/"}>
                  Baca Selengkapnya
               </Link>

               <View className="gap-y-2">
                  <Pressable className="py-3 rounded-xl bg-primary justify-center items-center">
                     <Text className="font-PoppinsRegular text-black">
                        Tambahkan Ladang
                     </Text>
                  </Pressable>
                  <Pressable
                     onPress={() => router.push("/(private)/(tabs)/home")}
                     className="py-3 rounded-xl border  border-black justify-center items-center"
                  >
                     <Text className="font-PoppinsRegular">Lewati</Text>
                  </Pressable>
               </View>
            </View>
         </SafeAreaView>
      </ViewContainer>
   );
};

export default GetStartedScreen;
