import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import SplashScreen from '../../screens/splash';

/* Stacks */
import Auth from './auth/auth';
import {defaultOptions} from '../option/default';
import Home from './home/home';

const MainStack = createStackNavigator();

const Main = () => {
  return (
    <MainStack.Navigator>
      {/* <MainStack.Screen
        options={defaultOptions}
        name="SplashScreen"
        component={SplashScreen}
      /> */}
      <MainStack.Screen
        options={defaultOptions}
        name="HomeStack"
        children={Home}
      />
      <MainStack.Screen
        options={defaultOptions}
        name="AuthStack"
        children={Auth}
      />
    </MainStack.Navigator>
  );
};

export default Main;
