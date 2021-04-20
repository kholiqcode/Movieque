import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ChooseTime, Splash, TicketConfirm } from '../screens';
import MainTab from './main';

export type ScreenParamList = {
  Splash: undefined;
  ChooseTime: undefined;
  TicketConfirm: undefined;
  MainTab: undefined;
};
const Stack = createStackNavigator<ScreenParamList>();

const Router = () => (
  <Stack.Navigator initialRouteName="TicketConfirm">
    <Stack.Screen
      name="Splash"
      component={Splash}
      options={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
      }}
    />
    <Stack.Screen
      name="MainTab"
      component={MainTab}
      options={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
      }}
    />
    <Stack.Screen
      name="ChooseTime"
      component={ChooseTime}
      options={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
      }}
    />
    <Stack.Screen
      name="TicketConfirm"
      component={TicketConfirm}
      options={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
      }}
    />
  </Stack.Navigator>
);

export default Router;
