import ViewContainer from "@/common/components/native/ViewContainer";
import { Text, View } from "react-native";

export default function Index() {
   return (
      <ViewContainer
         style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
         }}
      >
         <Text className="font-PoppinsRegular">
            Edit app/index.tsx to edit this screen.
         </Text>
      </ViewContainer>
   );
}
