import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Splash } from '../screens';
import MainTab from './main';

export type ScreenParamList = {
  Splash: undefined;
  Dashboard: undefined;
  Home: undefined;
  MainTab: undefined;
};
const Stack = createStackNavigator<ScreenParamList>();

const Router = () => (
  <Stack.Navigator initialRouteName="MainTab">
    <Stack.Screen
      name="Splash"
      component={Splash}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="MainTab"
      component={MainTab}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default Router;
