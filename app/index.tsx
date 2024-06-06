import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Dimensions, Pressable, View } from "react-native";
import * as Animatable from "react-native-animatable";

import { ImageData, TextData } from "@/common/constants/OnBoarding";
import { cn } from "@/common/libs/utils";
import { useSharedValue } from "react-native-reanimated";
import type { ICarouselInstance } from "react-native-reanimated-carousel";
import Carousel from "react-native-reanimated-carousel";
import CarouselItem from "@/common/components/CarouselItem";

const windowScreen = Dimensions.get("window");

export default function Index() {
   const scrollOffsetValue = useSharedValue<number>(0);
   const [data] = React.useState(ImageData);
   const [isPagingEnabled, setIsPagingEnabled] = React.useState(false);
   const [activeIndex, setActiveIndex] = React.useState<number>(0);
   const ref = React.useRef<ICarouselInstance>(null);
   const titleRef = React.useRef<Animatable.Text>(null);
   const subtitleRef = React.useRef<Animatable.Text>(null);
   const dot1Ref = React.useRef<Animatable.View>(null);
   const dot2Ref = React.useRef<Animatable.View>(null);
   const baseOptions = {
      vertical: false,
      width: windowScreen.width,
      height: windowScreen.height,
   } as const;

   const handleCarouselChange = () => {
      titleRef.current?.slideInRight!(800);
      subtitleRef.current?.slideInRight!(900);
      dot1Ref.current?.pulse!();
      dot2Ref.current?.pulse!();
      nextActive();
   };

   const nextActive = () => {
      setActiveIndex((prev) => (prev === 0 ? 1 : 0));
   };

   return (
      <View className="flex-1">
         <Carousel
            {...baseOptions}
            ref={ref}
            defaultScrollOffsetValue={scrollOffsetValue}
            enabled={isPagingEnabled}
            style={{ width: "100%" }}
            autoPlay={true}
            autoPlayInterval={5000}
            data={data}
            onScrollBegin={handleCarouselChange}
            pagingEnabled={isPagingEnabled}
            renderItem={({ item }) => <CarouselItem srcImg={item.srcImg} />}
         />
         <View className="flex-[0.33] w-full rounded-xl bg-white p-[40]">
            <Animatable.Text
               ref={titleRef}
               animation={"slideInRight"}
               duration={800}
               className="font-PoppinsSemiBold text-xl"
            >
               {TextData[activeIndex].title}
            </Animatable.Text>

            <Animatable.Text
               ref={subtitleRef}
               animation={"slideInRight"}
               duration={900}
               className="font-PoppinsLight text-xs text-[#898989] mt-4"
            >
               {TextData[activeIndex].subtitle}
            </Animatable.Text>
            <View className="flex-1  flex-row items-end">
               <View className="flex-row w-full justify-between items-center">
                  <View className="flex-row items-center gap-1">
                     <Animatable.View
                        animation={"pulse"}
                        ref={dot1Ref}
                        className={cn("h-1.5 w-1.5 rounded-full bg-black", {
                           "w-3": activeIndex === 0,
                        })}
                     />
                     <Animatable.View
                        ref={dot2Ref}
                        animation={"pulse"}
                        className={cn("h-1.5 w-1.5 rounded-full bg-black", {
                           "w-3": activeIndex === 1,
                        })}
                     />
                  </View>

                  <Pressable
                     onPress={() => router.push("/register")}
                     className="w-10 h-10 rounded-full bg-primary items-center justify-center"
                  >
                     <Ionicons name="arrow-forward" color="black" size={20} />
                  </Pressable>
               </View>
            </View>
         </View>
      </View>
   );
}
