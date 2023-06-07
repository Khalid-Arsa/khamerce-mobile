import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App: React.FC<any> = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello World!</Text>
      </View>
    </SafeAreaView>
  )
}

export default App;
