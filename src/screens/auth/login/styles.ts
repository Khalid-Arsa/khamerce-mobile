import {StyleSheet} from 'react-native';
import { colorPalette } from '../../../lib/color';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export const LoginStyle = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: colorPalette.palette.secondary[300],
  },
  scrollView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: widthPercentageToDP(80)
  }
})
