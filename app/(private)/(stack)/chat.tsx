import ViewContainer from "@/common/components/native/ViewContainer";
import DummyProfile from "@/common/constants/DummyProfile";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Image, View } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";

const TanyaLani = () => {
   const [messages, setMessages] = useState<any>([]);

   const sortedMessages = useMemo(() => {
      return dummyMessage.sort(
         (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
      );
   }, []);

   useEffect(() => {
      setMessages(sortedMessages);
   }, []);

   const onSend = useCallback((messages = []) => {
      setMessages((previousMessages: any) =>
         GiftedChat.append(previousMessages, messages)
      );
   }, []);
   return (
      <ViewContainer>
         <GiftedChat
            messages={messages}
            // alwaysShowSend
            // showUserAvatar
            alwaysShowSend
            onSend={(messages: any) => onSend(messages)}
            user={{
               _id: 1,
            }}
         />
      </ViewContainer>
   );
};

export default TanyaLani;

const dummyMessage = [
   {
      _id: 1,
      text: "Hello developer",
      createdAt: new Date(Date.UTC(2024, 4, 24, 10, 20, 0)),
      user: {
         _id: 2,
         name: "React Native",
         avatar: DummyProfile.avatarUrl,
      },
   },
   {
      _id: 2,
      text: "Hi! How can I help you today?",
      createdAt: new Date(Date.UTC(2024, 4, 24, 10, 21, 0)),
      user: {
         _id: 1,
         name: "Developer",
         avatar: "https://i.pravatar.cc/140",
      },
   },
   {
      _id: 3,
      text: "I'm having some issues with my project.",
      createdAt: new Date(Date.UTC(2024, 4, 24, 10, 22, 0)),
      user: {
         _id: 2,
         name: "React Native",
         avatar: DummyProfile.avatarUrl,
      },
   },
   {
      _id: 4,
      text: "What seems to be the problem?",
      createdAt: new Date(Date.UTC(2024, 4, 24, 10, 23, 0)),
      user: {
         _id: 1,
         name: "Developer",
         avatar: "https://i.pravatar.cc/140",
      },
   },
   {
      _id: 5,
      text: "I'm struggling with state management in my app.",
      createdAt: new Date(Date.UTC(2024, 4, 24, 10, 24, 0)),
      user: {
         _id: 2,
         name: "React Native",
         avatar: DummyProfile.avatarUrl,
      },
   },
   {
      _id: 6,
      text: "Have you tried using Redux or Context API?",
      createdAt: new Date(Date.UTC(2024, 4, 24, 10, 25, 0)),
      user: {
         _id: 1,
         name: "Developer",
         avatar: "https://i.pravatar.cc/140",
      },
   },
   {
      _id: 7,
      text: "Yes, but I'm not sure which one to use.",
      createdAt: new Date(Date.UTC(2024, 4, 24, 10, 26, 0)),
      user: {
         _id: 2,
         name: "React Native",
         avatar: DummyProfile.avatarUrl,
      },
   },
   {
      _id: 8,
      text: "Redux is great for complex state, Context API for simpler cases.",
      createdAt: new Date(Date.UTC(2024, 4, 24, 10, 27, 0)),
      user: {
         _id: 1,
         name: "Developer",
         avatar: "https://i.pravatar.cc/140",
      },
   },
   {
      _id: 9,
      text: "Thanks! I'll give Redux a try.",
      createdAt: new Date(Date.UTC(2024, 4, 24, 10, 28, 0)),
      user: {
         _id: 2,
         name: "React Native",
         avatar: DummyProfile.avatarUrl,
      },
   },
   {
      _id: 10,
      text: "You're welcome! Let me know if you need more help.",
      createdAt: new Date(Date.UTC(2024, 4, 24, 10, 29, 0)),
      user: {
         _id: 1,
         name: "Developer",
         avatar: "https://i.pravatar.cc/140",
      },
   },
];
