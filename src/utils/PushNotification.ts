import React, {useEffect} from 'react';
import PushNotification from 'react-native-push-notification';

const PushController = () => {
  useEffect(() => {
    
    PushNotification.configure({
      onRegister: function (token) {
        console.log('TOKEN:', token);
      },
      onNotification: function (notification) {
        console.log('gdvdhdhjjdjkjk');
        console.log('NOTIFICATION:', notification);
      },
      onAction: function (notification) {
        console.log('ACTION:', notification.action);
        console.log('NOTIFICATION:', notification);
      },
      senderID: '993950122417',
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: true,
    });
    PushNotification.localNotification({
      title: "Welcome!",
      message: "This is a local notification triggered by the app.",
      playSound: true,
      soundName: 'default',
    });
    return () => {};
  }, []);

  return null;
};

export default PushController;
