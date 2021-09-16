// import { View } from 'native-base';
import React, { useState } from 'react';
import {Text, View,   Image, TextInput} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

export default function Chatroom() {
  const [messages, setMessages] = useState([
    /**
     * Mock message data
     */
    // example of system message
    {
      _id: 0,
      text: 'New room created.',
      createdAt: new Date().getTime(),
      system: true
    },
    // example of chat message
    {
      _id: 1,
      text: 'Henlo!',
      createdAt: new Date().getTime(),
      user: {
        _id: 2,
        name: 'Test User'
      }
    }
  ]);

  // helper method that is sends a message
  function handleSend(newMessage = []) {
    setMessages(GiftedChat.append(messages, newMessage));
  }

  return (


        <View>
        <GiftedChat
          messages={messages}
          onSend={newMessage => handleSend(newMessage)}
          user={{ _id: 1 }}
        />
        </View>
  );
}