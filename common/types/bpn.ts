export type BPNMarketPricePerProvince = {
   success: boolean;
   meta: Meta;
   data: Datum[];
   hargatertinggi: number;
   provinsitertinggi: string;
   hargaterendah: number;
   provinsiterendah: string;
   hargaratarata: number;
};

export type Datum = {
   province_id: number;
   province_name: string;
   kode_map: null | string;
   date: string;
   level_harga: string;
   commodity_id: string;
   geomean: number | string;
   base_price: number | string;
   base_price_label: BasePriceLabel;
   map_value: number;
   harga_nas: number;
   disparitas_percent: number;
};

export enum BasePriceLabel {
   Het = "HET: ",
}

export type Meta = {
   satuan: string;
   label: Label;
};

export type Label = {
   id: number;
   komoditas_id: number;
   green: string;
   yellow: string;
   red: string;
   white: string;
};
