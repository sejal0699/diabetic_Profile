import {StyleSheet} from 'react-native';
import {colors} from '../../themes';
import {vw} from '../../utils/dimension';

export const styles = StyleSheet.create({
  backBox: {
    backgroundColor: colors.graybackgroundColor,
    width: vw(50),
    margin: 10,
    borderRadius: 10,
    bottom: 10,
  },
  backButton: {
    margin: 16,
  },
  backIcon: {
    width: vw(10),
    height: vw(10),
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});
