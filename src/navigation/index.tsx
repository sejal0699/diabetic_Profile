import React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../screens/profile';
import {ScreenNames} from './ScreenNames';
import SetupProfile from '../screens/setupProfile';

const RootNavigator = () => {
  const navigationRef: any = useNavigationContainerRef();
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
      <Stack.Screen
          name={ScreenNames.SetupProfile}
          component={SetupProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ScreenNames.Home}
          component={Profile}
          options={{headerShown: false}}
        />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator
