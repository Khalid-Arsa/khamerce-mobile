import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from './RootNavigation';
import Main from './stack/Main';

const RouterStack = createStackNavigator();

const Router = () => {
  const options = {
    headerShown: false,
  };
  return (
    <NavigationContainer ref={navigationRef}>
      <RouterStack.Navigator>
        <RouterStack.Screen name="Main" component={Main} options={options} />
      </RouterStack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
