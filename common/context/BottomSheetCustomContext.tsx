import {
   RefObject,
   createContext,
   useCallback,
   useContext,
   useMemo,
   useRef,
   useState,
} from "react";
import {
   BottomSheetBackdropProps,
   BottomSheetModalProvider,
   BottomSheetView,
   BottomSheetModal,
} from "@gorhom/bottom-sheet";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";

export type BottomSheetCustomContextType = {
   ref: RefObject<BottomSheetModalMethods>;
   handleOpen: () => void;
   handleClose: () => void;

   snapPoints: string[];
   setSnapPoints: (snapPoints: string[]) => void;
};

const BottomSheetCustomContext =
   createContext<BottomSheetCustomContextType | null>(null);

export const useBottomSheetCustomContext = () => {
   const context = useContext(BottomSheetCustomContext);
   // if (process.env.NODE_ENV !== "production") {
   if (!context) {
      throw new Error(
         "useBottomSheetCustomContext must be used within an BottomSheetCustomProvider"
      );
   }
   // }
   return context;
};

type BottomSheetCustomProviderProps = {
   children: React.ReactElement;
};
export const BottomSheetCustomProvider = (
   props: BottomSheetCustomProviderProps
) => {
   const [snapPointsState, setSnapPoints] = useState<string[]>(["10%", "60%"]);

   const snapPoints = useMemo(() => snapPointsState, []);

   const bottomSheetModalRef: RefObject<BottomSheetModalMethods> = useRef(null);

   const handleOpen = useCallback(() => {
      bottomSheetModalRef.current?.present();
   }, []);

   const handleClose = useCallback(() => {
      bottomSheetModalRef.current?.close();
   }, []);

   return (
      <BottomSheetCustomContext.Provider
         value={{
            snapPoints,
            setSnapPoints,
            ref: bottomSheetModalRef,
            handleOpen,
            handleClose,
         }}
      >
         <BottomSheetModalProvider>{props.children}</BottomSheetModalProvider>
      </BottomSheetCustomContext.Provider>
   );
};
