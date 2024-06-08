import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";
import type {} from "expo-router";
import { NativeStackNavigationOptions } from "react-native-screens/lib/typescript/native-stack/types";

type UseRouteOptions = {
   options: NativeStackNavigationOptions;
};

const useRouteOptions = (props: UseRouteOptions) => {
   const navigation = useNavigation();

   useEffect(() => {
      navigation.setOptions(props.options);
   }, [navigation]);
};

export default useRouteOptions;
