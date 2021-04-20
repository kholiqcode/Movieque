import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import { store } from './libs';
import Router from './routes';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar showHideTransition="slide" barStyle="light-content" backgroundColor="#ff8303" />
        <Router />
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
