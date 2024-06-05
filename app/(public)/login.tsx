import { View, Text, Image, Pressable, TextInput } from "react-native";
import React, { useState } from "react";
import ViewContainer from "@/common/components/native/ViewContainer";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Link, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useSignIn } from "@clerk/clerk-expo";
import Spinner from "react-native-loading-spinner-overlay";

const imgSrc = require("@/assets/images/auth-image.jpg");

const signInFormSchema = z.object({
   email: z.string().email(),
   password: z.string().min(8),
});

const LoginScreen = () => {
   const { control, handleSubmit } = useForm({
      defaultValues: {
         email: "",
         password: "",
      },
      resolver: zodResolver(signInFormSchema),
   });

   const [isLoading, setIsLoading] = useState<boolean>(false);
   const { isLoaded, setActive, signIn } = useSignIn();
   const onSignInPress = async (data: z.infer<typeof signInFormSchema>) => {
      if (!isLoaded) {
         return;
      }
      setIsLoading(true);
      try {
         const completeSignIn = await signIn.create({
            identifier: data.email,
            password: data.password,
         });

         // This indicates the user is signed in
         await setActive({
            session: completeSignIn.createdSessionId,
         });
      } catch (err: any) {
         alert(err.errors[0].message);
      } finally {
         setIsLoading(false);
      }
   };

   return (
      <View className="flex-1">
         <Spinner visible={isLoading} color="#D1F249" />
         <Image source={imgSrc} className="w-full flex-[0.4]" />
         <View className="flex-[0.6] -mt-20 bg-white rounded-t-3xl py-[25] px-[20]">
            <Text className="font-PoppinsSemiBold text-2xl">Log in</Text>
            <Text className="font-PoppinsLight mt-2 text-xs">
               Please login to continue with your account
            </Text>

            <View className="mt-6">
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
                        <Link
                           className="text-right text-xs"
                           href={"/forgot-password"}
                        >
                           Forgot password?
                        </Link>
                     </View>
                  )}
               />

               <Pressable
                  onPress={handleSubmit(onSignInPress)}
                  className=" h-[51] bg-primary rounded-md items-center justify-center mb-4"
               >
                  <Text className="font-RedHatBold">Masuk</Text>
               </Pressable>
               <Text className=" text-[#6d6d6d] text-xs font-PoppinsRegular mb-4">
                  Belum punya akun ?{" "}
                  <Link
                     href={"/register"}
                     className="text-xs font-PoppinsSemiBold"
                  >
                     Daftar sekarang
                  </Link>
               </Text>
               <Text className=" text-[#6d6d6d] text-xs font-PoppinsRegular">
                  Login with socials
               </Text>

               <View className="flex-row justify-between mt-4 gap-x-2">
                  <Pressable className="border rounded-md py-2.5 items-center justify-center flex-1 bg-slate-50">
                     <Ionicons name="logo-facebook" size={24} />
                  </Pressable>
                  <Pressable className="border rounded-md py-2.5 items-center justify-center flex-1 bg-slate-50">
                     <Ionicons name="logo-google" size={24} />
                  </Pressable>
               </View>
            </View>
         </View>
      </View>
   );
};

export default LoginScreen;
