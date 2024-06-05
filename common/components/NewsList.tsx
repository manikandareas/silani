import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const NewsList = () => {
   return (
      <View className="">
         {DummyNews.map((item) => (
            <NewsItem key={item.id} {...item} />
         ))}
      </View>
   );
};

export default NewsList;

type NewsItemProps = {
   id: number;
   title: string;
   image: string;
   description: string;
};

export const NewsItem = (props: NewsItemProps) => {
   return (
      <ImageBackground
         src={props.image}
         className="rounded-xl h-[160] overflow-hidden my-1 p-3 justify-end"
      >
         <LinearGradient
            // Background Linear Gradient
            colors={["rgba(0,0,0,0.8)", "transparent"]}
            className="h-full left-0 right-0 bottom-0 absolute rotate-180"
         />
         <Text className="text-white font-RedHatBold ">{props.title}</Text>
         <Text className="text-white font-RedHatRegular">
            {props.description}
         </Text>
      </ImageBackground>
   );
};

const DummyNews = [
   {
      id: 1,
      title: "Sukses dalam Bertani Padi",
      image: "https://images.unsplash.com/photo-1557234195-bd9f290f0e4d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
         "panduan langkah-demi-langkah bagi para pemula yang ingin menanam dan merawat padi dengan efisien",
   },
   {
      id: 2,
      title: "Panduan Praktis Menjadi Petani yang Berhasil",
      image: "https://images.unsplash.com/photo-1563201515-adbe35c669c5?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Langkah-langkah Menuju Kesuksesan di Dunia Pertanian",
   },
   {
      id: 3,
      title: "Panduan Praktis Menjadi Petani yang Berhasil",
      image: "https://images.unsplash.com/photo-1563201515-adbe35c669c5?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Langkah-langkah Menuju Kesuksesan di Dunia Pertanian",
   },
];
