import BottomSheetMarketPriceFilter from "@/common/components/BottomSheetMarketPriceFilter";
import MarketPriceActions from "@/common/components/MarketPriceActions";
import MarketPriceList from "@/common/components/MarketPriceList";
import ViewContainer from "@/common/components/native/ViewContainer";
import { BottomSheetCustomProvider } from "@/common/context/BottomSheetCustomContext";
import { getMarketPrice } from "@/common/services/market-price";
import { useMarketPriceParameterStore } from "@/common/store/market-price";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { ActivityIndicator } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { useShallow } from "zustand/react/shallow";

const MarketPrice = () => {
   // TODO separate bottom sheet
   // TODO Refactor this code

   const stateMarketPrice = useMarketPriceParameterStore(
      useShallow((state) => state)
   );

   const [titleCommodity, setTitleCommodity] =
      React.useState<string>("Beras Premium");

   // TODO : Display data from API
   const { data: marketPriceData, isLoading } = useQuery({
      queryFn: () =>
         getMarketPrice({
            commodityId: stateMarketPrice.selectedCommodityID,
            date: stateMarketPrice.selectedDate,
            dataTypeId: stateMarketPrice.selectedDataTypeID,
         }),
      queryKey: ["market-price"],
   });

   return (
      <BottomSheetCustomProvider>
         <ViewContainer>
            <MarketPriceActions titleCommodity={titleCommodity} />
            <Spinner visible={isLoading} />
            {!isLoading && marketPriceData && (
               <MarketPriceList data={marketPriceData} />
            )}

            <BottomSheetMarketPriceFilter
               setTitleCommodity={setTitleCommodity}
            />
         </ViewContainer>
      </BottomSheetCustomProvider>
   );
};

export default MarketPrice;
