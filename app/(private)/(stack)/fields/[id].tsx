import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Stack, useLocalSearchParams, useNavigation } from "expo-router";
import ViewContainer from "@/common/components/native/ViewContainer";
import useRouteOptions from "@/common/hooks/useRouteOptions";

const DetailsField = () => {
   const { id } = useLocalSearchParams();

   useRouteOptions({
      options: {
         headerTitle: id as string,
      },
   });

   return (
      <ViewContainer>
         <Text>DetailsField {id}</Text>
      </ViewContainer>
   );
};

export default DetailsField;
