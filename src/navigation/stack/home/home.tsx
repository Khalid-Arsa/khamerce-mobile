import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { defaultOptions } from '../../option/default';
import HomeScreen from '../../../screens/tabs/home';

const HomeStack = createStackNavigator();

const Home = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        options={defaultOptions}
        name="LoginInScreen"
        component={HomeScreen}
      />
    </HomeStack.Navigator>
  );
};

export default Home;