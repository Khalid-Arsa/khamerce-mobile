import React from 'react';
import {SafeAreaView, View, Text, ScrollView, TextInput, Button} from 'react-native';
import {LoginStyle} from './styles';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export const Login: React.FC<any> = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

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
              onChangeText={setEmail}
              value={email}
              placeholder="Email"
              keyboardType="email-address"
            />
            <TextInput
              style={LoginStyle.input}
              onChangeText={setPassword}
              value={password}
              placeholder="Password"
            />
            <View>
              <Button 
                  title="Sign in"
                  onPress={() => console.log('Button with adjusted color pressed')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
