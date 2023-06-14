import React from 'react';
import {SafeAreaView, View, Text, ScrollView, TextInput, Button} from 'react-native';
import {LoginStyle} from './styles';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export const Login: React.FC<any> = () => {
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView style={LoginStyle.safeAreaContainer}>
      <ScrollView contentContainerStyle={LoginStyle.scrollView}>
        <View
          style={{
            borderColor: 'black',
            borderWidth: 2,
            width: widthPercentageToDP(90),
            paddingVertical: 20
          }}>
          {/* header */}
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>Sign in</Text>
          </View>

          {/* text input container */}
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TextInput
              style={LoginStyle.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="Email"
              keyboardType="numeric"
            />
            <TextInput
              style={LoginStyle.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="Password"
              keyboardType="numeric"
            />
            <View>
              <Button 
                  title="Learn More"
                  accessibilityLabel="Learn more about this purple button"
                  onPress={() => console.log('Button with adjusted color pressed')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
