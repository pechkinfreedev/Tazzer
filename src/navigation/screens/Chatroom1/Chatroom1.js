import React, { useState } from 'react';
import { View,StyleSheet, Image, Text} from 'react-native';
import { Provider ,Appbar,IconButton} from 'react-native-paper';

import { GiftedChat, Bubble, Send  } from 'react-native-gifted-chat';
import {images} from '../../../constants/images';
import {styles} from './Style';
const {icarrow, clean1, clean2, clean8, clean9, sman16, iccall, icvideo } = images;

  const Chatroom1 = () => {

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
        name: 'Test User',
        avatar:sman16,
      }
    }
  ]);

  // helper method that is sends a message
  function handleSend(newMessage = []) {
    setMessages(GiftedChat.append(messages, newMessage));
  }

  function renderSend(props) {
    return (
      <Send {...props}>
        <View style={styles.sendingContainer}>
          <IconButton icon='send-circle' size={30} color='#562b63' />
        </View>
      </Send>
    );
  }

  return (
    <Provider>
      <Appbar style={styles.header}>  
        <Appbar.Content title={
          <View>
            <View style={styles.flexrow}>
                <Image source={clean1} style={styles.clean1} />
                <Image source={clean2} style={styles.clean2} />
                <Image source={clean8} style={styles.clean8} />
                <Image source={clean9} style={styles.clean9} />
                <Image source={icarrow} />
                <Text style={styles.titletxt}>Chats</Text>
            </View>  
            <View style={styles.flexrow}>
                <View>
                    <Image source={sman16} style={styles.topimg}/>
                    <Text>Mollie Austin</Text>
                </View>
                <Image source={iccall} style={styles.topcall} />
                <Image source={icvideo} style={styles.topvideo}  />
            </View>  
            </View>
           } subtitle="" />
       </Appbar>
      <View style={styles.mainbox}>
            <GiftedChat
            messages={messages}
            onSend={newMessage => handleSend(newMessage)}
            user={{ _id: 1 }}
            showUserAvatar
            alwaysShowSend
            renderSend={renderSend}
            />
      </View>
    </Provider>
  );
};

export default Chatroom1;