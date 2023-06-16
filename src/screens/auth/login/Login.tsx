import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';
import {LoginStyle} from './styles';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useAuthStore} from '../../../store/auth';
import {loginApi} from '../../../services/api/auth.api';

export const Login: React.FC<any> = () => {
  const {email, password, setEmail, setPass} = useAuthStore(state => state);

  const handleLogin = () => {
    loginApi({
      email,
      password,
    });
  };

  return (
    <SafeAreaView style={LoginStyle.safeAreaContainer}>
      <ScrollView contentContainerStyle={LoginStyle.scrollView}>
        <View
          style={{
            borderColor: 'black',
            borderWidth: 2,
            width: widthPercentageToDP(90),
            paddingVertical: 20,
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
              onChangeText={setPass}
              value={password}
              placeholder="Password"
            />
            <View>
              <Button title="Sign in" onPress={handleLogin} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
