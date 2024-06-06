import { useAuth } from "@clerk/clerk-expo";
import { useSegments } from "expo-router";
import { useEffect } from "react";

const useTrackSegments = () => {
   const segments = useSegments();
   const { isSignedIn } = useAuth();
   useEffect(() => {
      console.log({ segments, isSignedIn });
   }, [segments, isSignedIn]);
};

export default useTrackSegments;
