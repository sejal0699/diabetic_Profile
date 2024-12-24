import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import PushNotification from 'react-native-push-notification';
import PushController from '../../utils/PushNotification';

let pushData = [
  {
    title: "First push done",
    message: "First push message donejdbjfasjkfjjkshejbfjnnkskdja",
  },
  {
    title: "Second push",
    message: "Second push message",
  },
];

const Notification = () => {
  const [deviceToken, setDeviceToken] = useState(null);
  useEffect(() => {
    PushNotification.configure({
      onRegister: function (token) {
        console.log('Registered with token:', token.token);
        setDeviceToken(token.token); 
      },
      onNotification: function (notification) {
        console.log('Notification received:', notification);
      },
      onAction: function (notification) {
        console.log('Action taken on notification:', notification.action);
      },
      senderID: '993950122417',
      requestPermissions: true,
    });
  }, []);

  const sendPushNotification = async (deviceToken, title, message) => {
    if (!deviceToken) return;
    console.log('deviceToken',deviceToken,title,message);
    const serverKey = "ya29.a0ARW5m76xM1Nadha_PRnvyqWJtgfI-PQmAAksPqLtaTQEcteKSCfMmh9NnTLKe2iFHNBX44GQablBoghrWg4wAAQaXgvWbxxHnnwvJ26JNiBt0dgtCXXmz8oRgRGKiATWoGkmRgawqouZg3wAz2KM0yIQS91AmcfBmh-ljXKbaCgYKAd0SARISFQHGX2MiTeZRJMV8P21DRwelREJwmg0175";  
    const notificationPayload = {
      "message": {
        "token": deviceToken, 
        "notification": {
          "title": title, 
          "body": message,
        },
      },
    };

    try {
      const response = await fetch("https://fcm.googleapis.com/v1/projects/pushnotifications-a3db8/messages:send", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${serverKey}`,
        },
        body: JSON.stringify(notificationPayload),
      });
      console.log(response);
      const data = await response.json();
      console.log('Notification sent successfully:', data);
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  };

  const handleItemPress = (item) => {
    if (deviceToken) {
     console.log(deviceToken);
      PushNotification.localNotification({
        title: item.title,
        message: item.message,
        playSound: true,
        soundName: 'default',
        channelId: 'default-channel',
      });
      sendPushNotification(deviceToken, item.title, item.message);
    } else {
      console.log("Device token is not available");
    }
  };

  const _renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleItemPress(item)}>
      <View style={styles.item}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
        <View style={styles.listHeader}>
          <Text>Push Notifications</Text>
        </View>
        <View style={styles.body}>
          <FlatList
            data={pushData}
            renderItem={_renderItem}
            keyExtractor={(item) => item.title}
          />
        </View>
      </ScrollView>
      <PushController />
    </SafeAreaView>
  );
};

export default Notification;
