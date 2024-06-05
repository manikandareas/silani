import {
   IMarketPriceCommodities,
   MarketPriceDistributorCommodities,
   MarketPriceProducersCommodities,
   MarketPriceRetailerCommodities,
} from "@/common/constants/MarketPriceParameter";
import { setToMarketPriceFormattedDate } from "@/common/libs/utils";
import { BPNMarketPricePerProvince } from "@/common/types/bpn";
import axios from "axios";

const BASE_URL_MARKET_PRICE =
   "https://panelharga.badanpangan.go.id/data/harga-provinsi";

const urlBpnMarketPrice = (
   date: string,
   dataType: number,
   commodityId: number
): string => {
   return `${BASE_URL_MARKET_PRICE}/${date}/${dataType}/${commodityId}`;
};

type GetMarketPrice = {
   date: Date;
   dataTypeId: 1 | 2 | 3;
   commodityId: number;
};

export const getMarketPrice = async ({
   commodityId,
   dataTypeId,
   date,
}: GetMarketPrice): Promise<BPNMarketPricePerProvince> => {
   const commodity = getCommoditiesByDataType(dataTypeId).find(
      (commodity) => commodity.id === commodityId
   );

   const formattedDate = setToMarketPriceFormattedDate(date);

   const response = await axios.get<BPNMarketPricePerProvince>(
      urlBpnMarketPrice(formattedDate, dataTypeId, commodity?.id!)
   );

   return response.data;
};

export const getCommoditiesByDataType = (
   dataTypeId: 1 | 2 | 3
): IMarketPriceCommodities[] => {
   switch (dataTypeId) {
      case 1:
         return MarketPriceProducersCommodities;
      case 2:
         return MarketPriceDistributorCommodities;
      default:
         return MarketPriceRetailerCommodities;
   }
};

export const getNameOfCommodity = (
   dataTypeId: 1 | 2 | 3,
   commodityId: number
): string => {
   return getCommoditiesByDataType(dataTypeId).find(
      (commodity) => commodity.id === commodityId
   )!.nama!;
};
