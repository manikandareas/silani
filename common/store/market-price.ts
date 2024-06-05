import {
   IMarketPriceCommodities,
   MarketPriceDistributorCommodities,
   MarketPriceProducersCommodities,
   MarketPriceRetailerCommodities,
} from "@/common/constants/MarketPriceParameter";
import { create } from "zustand";

interface MarketPriceParameterState {
   selectedDate: Date;
   selectedDataTypeID: 1 | 2 | 3;
   selectedCommodityID: number;

   commodities: IMarketPriceCommodities[];

   setCommodities: (dataType: number) => void;

   setSelectedDate(selectedDate: Date): void;
   setSelectedDataTypeID(selectedDataTypeID: 1 | 2 | 3): void;
   setSelectedCommodityID(selectedCommodityID: number): void;
}

export const useMarketPriceParameterStore = create<MarketPriceParameterState>()(
   (set) => ({
      selectedCommodityID: 27,
      selectedDate: new Date(),
      selectedDataTypeID: 3,

      commodities: MarketPriceRetailerCommodities,

      setCommodities: (dataType) => {
         switch (dataType) {
            case 1:
               set({
                  commodities: MarketPriceProducersCommodities,
                  selectedCommodityID: MarketPriceProducersCommodities[0].id,
               });

               break;
            case 2:
               set({
                  commodities: MarketPriceDistributorCommodities,
                  selectedCommodityID: MarketPriceDistributorCommodities[0].id,
               });
               break;
            default:
               set({
                  commodities: MarketPriceRetailerCommodities,
                  selectedCommodityID: MarketPriceRetailerCommodities[0].id,
               });
               break;
         }
      },

      setSelectedDate: (selectedDate: Date) => set({ selectedDate }),
      setSelectedDataTypeID: (selectedDataTypeID) =>
         set({ selectedDataTypeID }),
      setSelectedCommodityID: (selectedCommodityID) =>
         set({ selectedCommodityID }),
   })
);
