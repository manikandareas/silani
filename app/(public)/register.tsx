import { useOAuth, useSignUp } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
   Image,
   Pressable,
   ScrollView,
   Text,
   TextInput,
   View,
} from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { z } from "zod";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "@/common/hooks/useWarmUpBrowser";

const imgSrc = require("@/assets/images/auth-image.jpg");

const signInFormSchema = z.object({
   fullName: z.string().min(8),
   email: z.string().email(),
   password: z.string().min(8).trim(),
});

WebBrowser.maybeCompleteAuthSession();

const RegisterScreen = () => {
   useWarmUpBrowser();
   const { control, handleSubmit } = useForm({
      defaultValues: {
         fullName: "",
         email: "",
         password: "",
      },
      resolver: zodResolver(signInFormSchema),
   });

   const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const { isLoaded, setActive, signUp } = useSignUp();

   const onRegisterPress = async (data: z.infer<typeof signInFormSchema>) => {
      if (!isLoaded) {
         return;
      }
      setIsLoading(true);

      try {
         // Create the user on Clerk
         const res = await signUp.create({
            emailAddress: data.email,
            password: data.password,
            firstName: data.fullName,
         });

         await setActive({ session: res.createdSessionId });

         // Send verification Email
         // await signUp.prepareEmailAddressVerification({
         //    strategy: "email_code",
         // }, );

         // change the UI to verify the email address
         // setPendingVerification(true);
      } catch (err: any) {
         console.error(JSON.stringify(err, null, 2));
         alert(err.errors[0].message);
      } finally {
         setIsLoading(false);
      }
   };

   const onOauthGooglePress = React.useCallback(async () => {
      try {
         const { createdSessionId, signUp, setActive } = await startOAuthFlow();

         if (createdSessionId) {
            setActive!({ session: createdSessionId });
         } else {
            // Use signIn or signUp for next steps such as MFA
            // const response = await signUp?.update({
            //    username: signUp!.emailAddress!.split("@")[0],
            // });
            // setActive!({ session: response?.createdSessionId });
            // console.log("Sign Up Success", JSON.stringify(response, null, 2));
         }
      } catch (err: any) {
         console.error("OAuth error", err);
      }
   }, []);

   return (
      <View className="flex-1">
         <Spinner visible={isLoading} />
         <Image source={imgSrc} className="w-full flex-[0.2]" />
         <View className="flex-[0.8] -mt-20 bg-white rounded-t-3xl py-[25] px-[20]">
            <Text className="font-PoppinsSemiBold text-2xl">Register</Text>
            <Text className="font-PoppinsLight mt-2 text-xs">
               It's free and always will be
            </Text>

            <View className="mt-6">
               <Controller
                  control={control}
                  name="fullName"
                  render={({
                     field: { onChange, onBlur, value },
                     fieldState: { error },
                  }) => (
                     <View className="gap-y-1.5 mb-3">
                        <Text className=" font-RedHatRegular">Name</Text>
                        <TextInput
                           className="min-w-[320] h-[51] bg-white rounded-md border border-[#D9D9D9] px-3"
                           placeholder="John Doe"
                           onChangeText={onChange}
                           onBlur={onBlur}
                           value={value}
                        />
                        {error && (
                           <Text className="text-xs ">
                              <Text className="text-red-500">*</Text>
                              {error.message}
                           </Text>
                        )}
                     </View>
                  )}
               />
               <Controller
                  control={control}
                  name="email"
                  render={({
                     field: { onChange, onBlur, value },
                     fieldState: { error },
                  }) => (
                     <View className="gap-y-1.5 mb-3">
                        <Text className=" font-RedHatRegular">Email</Text>
                        <TextInput
                           className="min-w-[320] h-[51] bg-white rounded-md border border-[#D9D9D9] px-3"
                           placeholder="johnDoe@example.com"
                           onChangeText={onChange}
                           onBlur={onBlur}
                           value={value}
                        />
                        {error && (
                           <Text className="text-xs ">
                              <Text className="text-red-500">*</Text>
                              {error.message}
                           </Text>
                        )}
                     </View>
                  )}
               />
               <Controller
                  control={control}
                  name="password"
                  render={({
                     field: { onChange, onBlur, value },
                     fieldState: { error },
                  }) => (
                     <View className="gap-y-1.5 mb-6">
                        <Text className=" font-RedHatRegular">Password</Text>
                        <TextInput
                           secureTextEntry
                           className="min-w-[320] h-[51] bg-white rounded-md border border-[#D9D9D9] px-3"
                           placeholder="********"
                           onChangeText={onChange}
                           onBlur={onBlur}
                           value={value}
                        />
                        {error && (
                           <Text className="text-xs ">
                              <Text className="text-red-500">*</Text>
                              {error.message}
                           </Text>
                        )}

                        <View>
                           <Text className="text-xs text-[#6d6d6d]">
                              - Password must be at least 8 characters
                           </Text>
                           <Text className="text-xs text-[#6d6d6d]">
                              - Can't contain spaces
                           </Text>
                        </View>
                     </View>
                  )}
               />

               <Pressable
                  onPress={handleSubmit(onRegisterPress)}
                  className=" h-[51] bg-primary rounded-md items-center justify-center mb-4"
               >
                  <Text className="font-RedHatBold">Daftar</Text>
               </Pressable>
               <Text className=" text-[#6d6d6d] text-xs font-PoppinsRegular mb-4">
                  Sudah punya akun ?{" "}
                  <Link
                     href={"/login"}
                     className="text-xs font-PoppinsSemiBold"
                  >
                     Masuk sekarang
                  </Link>
               </Text>
               <Text className=" text-[#6d6d6d] text-xs font-PoppinsRegular">
                  Sign up with socials
               </Text>

               <View className="flex-row justify-between mt-4 gap-x-2">
                  <Pressable className="border rounded-md py-2.5 items-center justify-center flex-1 bg-slate-50">
                     <Ionicons name="logo-facebook" size={24} />
                  </Pressable>
                  <Pressable
                     onPress={onOauthGooglePress}
                     className="border rounded-md py-2.5 items-center justify-center flex-1 bg-slate-50"
                  >
                     <Ionicons name="logo-google" size={24} />
                  </Pressable>
               </View>
            </View>
         </View>
      </View>
   );
};

export default RegisterScreen;
