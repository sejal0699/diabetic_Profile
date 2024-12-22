import React from 'react';
import {NavigationContainer,useNavigationContainerRef} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../screens/profile';
import {ScreenNames} from './ScreenNames';
import SetupProfile from '../screens/setupProfile';
import AvatarModal from '../screens/avatar';
import OTP from '../screens/otp';

const RootNavigator = () => {
  const navigationRef: any = useNavigationContainerRef();
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name={ScreenNames.Home}
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ScreenNames.OTP}
          component={OTP}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ScreenNames.SetupProfile}
          component={SetupProfile}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={ScreenNames.avatar}
          component={AvatarModal}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
