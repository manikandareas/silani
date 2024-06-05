/** @type {import('tailwindcss').Config} */

module.exports = {
   content: ["./common/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            PoppinsThin: ["Poppins_100Thin"],
            PoppinsLight: ["Poppins_300Light"],
            PoppinsRegular: ["Poppins_400Regular"],
            PoppinsMedium: ["Poppins_500Medium"],
            PoppinsSemiBold: ["Poppins_600SemiBold"],
            PoppinsBold: ["Poppins_700Bold"],
            PoppinsExtraBold: ["Poppins_800ExtraBold"],
         },
         colors: {
            primary: "#D1F249",
            secondary: "#FBFFE6",
            dark: "#252525",
         },
      },
   },
   plugins: [],
};
