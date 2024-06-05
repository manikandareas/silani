interface MarketPricePickerItem {
   label: string;
   value: string;
}

export const DATA_PANEL: MarketPricePickerItem[] = [
   {
      label: "Pedagang Eceran",
      value: "pedagang-eceran",
   },
   {
      label: "Pedagang Grosir",
      value: "pedagang-grosir",
   },
   {
      label: "Produsen",
      value: "produsen",
   },
];

export const COMMODITY: MarketPricePickerItem[] = [
   {
      label: "Beras Premium",
      value: "beras-premium",
   },
   {
      label: "Beras Medium",
      value: "beras-medium",
   },
   {
      label: "Kedelai Biji Kering (import)",
      value: "kedelai-biji-kering",
   },
   {
      label: "Bawang Merah",
      value: "bawang-merah",
   },
   {
      label: "Bawang Putih Bonggol",
      value: "bawang-putih-bonggol",
   },
   {
      label: "Cabai Merah Keriting",
      value: "cabai-merah-keriting",
   },
];

export const PROVINCE = [
   {
      id: "1",
      kepulauan: "Sumatra",
      provinsi: "Aceh",
      "link-asset":
         "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Coat_of_arms_of_Aceh.svg/1024px-Coat_of_arms_of_Aceh.svg.png",
   },
   {
      id: "2",
      kepulauan: "Sumatra",
      provinsi: "Sumatera Utara",
      "link-asset":
         "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Coat_of_arms_of_North_Sumatra.svg/800px-Coat_of_arms_of_North_Sumatra.svg.png",
   },
   {
      id: "3",
      kepulauan: "Sumatra",
      provinsi: "Sumatera Barat",
      "link-asset":
         "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Coat_of_arms_of_West_Sumatra.svg/800px-Coat_of_arms_of_West_Sumatra.svg.png",
   },
   {
      id: "4",
      kepulauan: "Sumatra",
      provinsi: "Riau",
      "link-asset":
         "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Coat_of_arms_of_Riau.svg/800px-Coat_of_arms_of_Riau.svg.png",
   },
   {
      id: "5",
      kepulauan: "Sumatra",
      provinsi: "Jambi",
      "link-asset":
         "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Coat_of_arms_of_Jambi.svg/1024px-Coat_of_arms_of_Jambi.svg.png",
   },
   {
      id: "6",
      kepulauan: "Sumatra",
      provinsi: "Sumatera Selatan",
      "link-asset":
         "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Coat_of_arms_of_South_Sumatra.svg/800px-Coat_of_arms_of_South_Sumatra.svg.png",
   },
   {
      id: "7",
      kepulauan: "Sumatra",
      provinsi: "Bengkulu",
      "link-asset":
         "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Coat_of_arms_of_Bengkulu.svg/800px-Coat_of_arms_of_Bengkulu.svg.png",
   },
   {
      id: "8",
      kepulauan: "Sumatera",
      provinsi: "Lampung",
      "link-asset":
         "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Coat_of_arms_of_Lampung.svg/800px-Coat_of_arms_of_Lampung.svg.png",
   },
   {
      id: "9",
      kepulauan: "Sumatera",
      provinsi: "Kepulauan Bangka Belitung",
      "link-asset":
         "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Coat_of_arms_of_Bangka_Belitung_Islands.svg/800px-Coat_of_arms_of_Bangka_Belitung_Islands.svg.png",
   },
   {
      id: "10",
      kepulaan: "Sumatra",
      provinsi: "Kepulauan Riau",
      "link-asset":
         "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Coat_of_arms_of_Riau_Islands.svg/800px-Coat_of_arms_of_Riau_Islands.svg.png",
   },
   {
      id: "11",
      kepulauan: "Jawa",
      provinsi: "Jakarta",
      "link-asset":
         "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Coat_of_arms_of_Jakarta.svg/800px-Coat_of_arms_of_Jakarta.svg.png",
   },
   {
      id: "12",
      kepulauan: "Jawa",
      provinsi: "Jawa Barat",
      "link-asset":
         "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Coat_of_arms_of_West_Java.svg/800px-Coat_of_arms_of_West_Java.svg.png",
   },
   {
      id: "13",
      kepulauan: "Jawa",
      provinsi: "Jawa Tengah",
      "link-asset":
         "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Coat_of_arms_of_Central_Java.svg/1024px-Coat_of_arms_of_Central_Java.svg.png",
   },
   {
      id: "14",
      kepulauan: "Jawa",
      provinsi: "Yogyakarta",
      "link-asset":
         "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Coat_of_arms_of_Yogyakarta.svg/800px-Coat_of_arms_of_Yogyakarta.svg.png",
   },
   {
      id: "15",
      kepulauan: "Jawa",
      provinsi: "Jawa Timur",
      "link-asset":
         "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Coat_of_arms_of_East_Java.svg/800px-Coat_of_arms_of_East_Java.svg.png",
   },
   {
      id: "16",
      kepulauan: "Jawa",
      provinsi: "Banten",
      "link-asset":
         "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Coat_of_arms_of_Banten.svg/1024px-Coat_of_arms_of_Banten.svg.png",
   },
   {
      id: "17",
      kepulauan: "Kepulauan Nusa Tenggara",
      provinsi: "Bali",
      "link-asset":
         "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Coat_of_arms_of_Bali.svg/1024px-Coat_of_arms_of_Bali.svg.png",
   },
   {
      id: "18",
      kepulauan: "Kepulauan Nusa Tenggara",
      provinsi: "Nusa Tenggara Barat",
      "link-asset":
         "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Coat_of_arms_of_West_Nusa_Tenggara.svg/800px-Coat_of_arms_of_West_Nusa_Tenggara.svg.png",
   },
   {
      id: "19",
      kepulauan: "Kepulauan Nusa Tenggara",
      provinsi: "Nusa Tenggara Timur",
      "link-asset":
         "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Coat_of_Arms_of_East_Nusa_Tenggara_NEW.png/1024px-Coat_of_Arms_of_East_Nusa_Tenggara_NEW.png",
   },
   {
      id: "20",
      kepulauan: "Kalimantan",
      provinsi: "Kalimantan Barat",
      "link-asset":
         "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Coat_of_arms_of_West_Kalimantan.svg/800px-Coat_of_arms_of_West_Kalimantan.svg.png",
   },
   {
      id: "21",
      kepulauan: "Kalimantan",
      provinsi: "Kalimantan Tengah",
      "link-asset":
         "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Coat_of_arms_of_Central_Kalimantan.svg/800px-Coat_of_arms_of_Central_Kalimantan.svg.png",
   },
   {
      id: "22",
      kepulauan: "Kalimantan",
      provinsi: "Kalimantan Selatan",
      "link-asset":
         "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Coat_of_arms_of_South_Kalimantan.svg/800px-Coat_of_arms_of_South_Kalimantan.svg.png",
   },
   {
      id: "23",
      kepulauan: "Kalimantan",
      provinsi: "Kalimantan Timur",
      "link-asset":
         "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Coat_of_arms_of_East_Kalimantan.svg/800px-Coat_of_arms_of_East_Kalimantan.svg.png",
   },
   {
      id: "24",
      kepulauan: "Kalimantan",
      provinsi: "Kalimantan Utara",
      "link-asset":
         "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Coat_of_arms_of_North_Kalimantan_%282021_version%29.svg/800px-Coat_of_arms_of_North_Kalimantan_%282021_version%29.svg.png",
   },
   {
      id: "25",
      kepulauan: "Sulawesi",
      provinsi: "Sulawesi Utara",
      "link-asset":
         "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Coat_of_arms_of_North_Sulawesi.svg/1024px-Coat_of_arms_of_North_Sulawesi.svg.png",
   },
   {
      id: "26",
      kepulauan: "Sulawesi",
      provinsi: "Sulawesi Tengah",
      "link-asset":
         "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Coat_of_arms_of_Central_Sulawesi.svg/800px-Coat_of_arms_of_Central_Sulawesi.svg.png",
   },
   {
      id: "27",
      kepulauan: "Sulawesi",
      provinsi: "Sulawesi Selatan",
      "link-asset":
         "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Coat_of_arms_of_South_Sulawesi.svg/800px-Coat_of_arms_of_South_Sulawesi.svg.png",
   },
   {
      id: "28",
      kepulauan: "Sulawesi",
      provinsi: "Sulawesi Tenggara",
      "link-asset":
         "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Coat_of_arms_of_Southeast_Sulawesi.svg/1024px-Coat_of_arms_of_Southeast_Sulawesi.svg.png",
   },
   {
      id: "29",
      kepulauan: "Sulawesi",
      provinsi: "Gorontalo",
      "link-asset":
         "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Coat_of_arms_of_Gorontalo.svg/800px-Coat_of_arms_of_Gorontalo.svg.png",
   },
   {
      id: "30",
      kepulauan: "Sulawesi",
      provinsi: "Sulawesi Barat",
      "link-asset":
         "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Coat_of_arms_of_West_Sulawesi.svg/800px-Coat_of_arms_of_West_Sulawesi.svg.png",
   },
   {
      id: "31",
      kepulauan: "Kepulauan Maluku",
      provinsi: "Maluku",
      "link-asset":
         "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Coat_of_arms_of_Maluku.svg/800px-Coat_of_arms_of_Maluku.svg.png",
   },
   {
      id: "32",
      kepulauan: "Kepulauan Maluku",
      provinsi: "Maluku Utara",
      "link-asset":
         "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Coat_of_arms_of_North_Maluku.svg/800px-Coat_of_arms_of_North_Maluku.svg.png",
   },
   {
      id: "33",
      kepulauan: "Papua",
      provinsi: "Papua Barat",
      "link-asset":
         "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Coat_of_arms_of_West_Papua.svg/800px-Coat_of_arms_of_West_Papua.svg.png",
   },
   {
      id: "34",
      kepulauan: "Papua",
      provinsi: "Papua",
      "link-asset":
         "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Coat_of_arms_of_Papua_2.svg/800px-Coat_of_arms_of_Papua_2.svg.png",
   },
   {
      id: "35",
      kepulauan: "Papua",
      provinsi: "Papua Barat Daya",
      "link-asset":
         "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Logo_Papua_Barat_Daya1.png/800px-Logo_Papua_Barat_Daya1.png",
   },
   {
      id: "36",
      kepulauan: "Papua",
      provinsi: "Papua Pegunungan",
      "link-asset":
         "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Lambang_Papua_Pegunungan.svg/800px-Lambang_Papua_Pegunungan.svg.png",
   },
   {
      id: "37",
      kepulauan: "Papua",
      provinsi: "Papua Tengah",
      "link-asset":
         "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Lambang_Papua_Tengah.png/800px-Lambang_Papua_Tengah.png",
   },
   {
      id: "38",
      kepulauan: "Papua",
      provinsi: "Papua Selatan",
      "link-asset":
         "https://upload.wikimedia.org/wikipedia/commons/5/5d/Lambang_Papua_Selatan.png",
   },
];
