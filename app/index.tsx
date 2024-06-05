import TextPoppins from "@/common/components/native/TextPoppins";
import ViewContainer from "@/common/components/native/ViewContainer";
import { router } from "expo-router";
import { Pressable, StyleSheet } from "react-native";

export default function Index() {
   return (
      <ViewContainer
         style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
         }}
      >
         <Pressable
            onPress={() => router.push("/(public)/login")}
            className="rounded-md p-4 border"
         >
            <TextPoppins>Get Started</TextPoppins>
         </Pressable>
      </ViewContainer>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   page: {
      justifyContent: "center",
      alignItems: "center",
   },
});
