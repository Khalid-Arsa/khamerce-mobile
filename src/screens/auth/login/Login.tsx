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
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {loginApi} from '../../../services/api/auth.api';
import {useAuthStore} from '../../../store/auth';

export const Login: React.FC<any> = () => {
  const {credentials, actions} = useAuthStore();

  const handleLogin = () => {
    loginApi(credentials);
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
              value={credentials.email}
              onChangeText={e =>
                actions.setCredentials({...credentials, email: e})
              }
              placeholder="Email"
              keyboardType="email-address"
            />
            <TextInput
              style={LoginStyle.input}
              value={credentials.password}
              onChangeText={e =>
                actions.setCredentials({...credentials, password: e})
              }
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
