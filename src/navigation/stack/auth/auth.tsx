import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthScreen} from '../../../screens/auth';
import { defaultOptions } from '../../option/default';

const AuthStack = createStackNavigator();

const Auth = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        options={defaultOptions}
        name="LoginInScreen"
        component={AuthScreen.Login}
      />
    </AuthStack.Navigator>
  );
};

export default Auth;