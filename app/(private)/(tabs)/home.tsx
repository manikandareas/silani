import MenuList from "@/common/components/MenuList";
import NewsList from "@/common/components/NewsList";
import ProfileBar from "@/common/components/ProfileBar";
import SectionTitle from "@/common/components/SectionTitle";
import WeatherCard from "@/common/components/WeatherCard";
import ScrollViewContainer from "@/common/components/native/ScrollViewContainer";
import { Link } from "expo-router";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const RootScreen = () => {
   return (
      <SafeAreaView className="flex-1 bg-white">
         <ScrollViewContainer className="py-[20]">
            <ProfileBar />
            <SectionTitle title="Cuaca hari ini" />
            <WeatherCard />
            {/* <BannerCompletesProfile /> */}
            <SectionTitle title="Menu" />
            {/* <Link href={"(private)/get-started"}>Get Started</Link> */}
            <MenuList />
            <View className="flex-row justify-between items-center">
               <SectionTitle title="Berita" />
               <Link
                  href={"/(stack)/news"}
                  className="text-xs font-RedHatRegular text-[#898989]"
               >
                  Lihat lebih
               </Link>
            </View>
            <NewsList />
            {/* <HomeNavigation /> */}

            {/* Blank space */}
            <View className="h-8" />
         </ScrollViewContainer>
      </SafeAreaView>
   );
};

export default RootScreen;
