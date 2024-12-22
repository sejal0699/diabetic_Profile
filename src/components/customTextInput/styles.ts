import {StyleSheet} from 'react-native';
import {colors} from '../../themes';
import {vw} from '../../utils/dimension';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    padding: 10,
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderRadius: 10,
    height: vw(50),
    width: '100%',
  },
  errorText: {
    color: colors.red,
    fontSize: vw(12),
    marginTop: 5,
  },
});
