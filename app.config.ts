import { ExpoConfig, ConfigContext } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
   ...config,
   name: "Silani",
   slug: "silani",
   owner: "manikandareas",
   version: process.env.APP_VERSION || "1.0.0",
   orientation: "portrait",
   icon: "./assets/images/icon.png",
   scheme: "silani",
   userInterfaceStyle: "automatic",
   splash: {
      image: "./assets/images/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
   },
   ios: {
      supportsTablet: true,
      config: {
         usesNonExemptEncryption: false,
      },
      bundleIdentifier: "com.anonymous.silani",
   },
   android: {
      adaptiveIcon: {
         foregroundImage: "./assets/images/adaptive-icon.png",
         backgroundColor: "#ffffff",
      },
      package: "com.anonymous.silani",
   },
   web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
   },

   plugins: [
      "expo-router",
      [
         "expo-secure-store",
         {
            faceIDPermission:
               "Allow $(PRODUCT_NAME) to access your Face ID biometric data.",
         },
      ],
      "expo-font",
   ],
   experiments: {
      typedRoutes: true,
   },
   extra: {
      clerkPublishableKey: process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY,
   },
});
