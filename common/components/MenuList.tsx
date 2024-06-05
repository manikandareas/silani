import { useRouter } from "expo-router";
import React from "react";
import {
   Image,
   ImageSourcePropType,
   Text,
   TouchableOpacity,
   View,
} from "react-native";

const Menu: { name: string; title: string; icon: ImageSourcePropType }[] = [
   {
      name: "/(stack)/field",
      title: "Ladang Ku",
      icon: require("@/assets/images/ladang-ku.png"),
   },
   {
      name: "/(stack)/chat",
      title: "Tanya Lani",
      icon: require("@/assets/images/tanya-lani.png"),
   },
   {
      name: "(stack)/forecast",
      title: "Cuaca",
      icon: require("@/assets/images/cuaca.png"),
   },
   {
      name: "(stack)/news",
      title: "Berita",
      icon: require("@/assets/images/news.png"),
   },
];

const MenuList = () => {
   return (
      <View className="flex-row justify-between ">
         {Menu.map((item, index) => (
            <MenuItem
               key={index + item.name}
               href={item.name}
               icon={item.icon}
               title={item.title}
            />
         ))}
      </View>
   );
};

export default MenuList;

export const MenuItem = (props: {
   href: string;
   icon: ImageSourcePropType;
   title: string;
}) => {
   const router = useRouter();
   return (
      <TouchableOpacity
         className="w-1/4 aspect-square justify-center gap-y-1 items-center "
         onPress={() => router.push(props.href)}
      >
         <View
            style={{ elevation: 1 }}
            className="w-3/4 aspect-square rounded-xl bg-white items-center justify-center"
         >
            <Image source={props.icon} className="w-[50] h-[50]" />
         </View>
         <Text className="font-RedHatMedium text-xs">{props.title}</Text>
      </TouchableOpacity>
   );
};
