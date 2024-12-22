import {StyleSheet} from 'react-native';
import {colors} from '../../themes';
import {vw} from '../../utils/dimension';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    padding: 30,
    backgroundColor: colors.white,
  },
  input: {
    padding: 8,
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderRadius: 10,
    height: vw(40),
  },
  flagView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    width: vw(110),
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: vw(50),
  },
  backIcon: {
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  heading: {
    color: colors.textHeadingColor,
    fontWeight: 700,
    fontSize: vw(28),
    margin: 10,
  },
  textbox: {
    justifyContent: 'center',
    top: vw(40),
    margin: 10,
  },
  subheading: {
    color: colors.subheadingtextColor,
    margin: 10,
    bottom:10
  },
  customButtonStyle: {
    width: '90%',
    alignSelf: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    left: vw(22),
    bottom: vw(10),
  },
  checkbox: {
    width: vw(20),
    height: vw(20),
    borderWidth: 1,
    borderColor: colors.checkboxBorder,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkmark: {
    height: vw(20),
    width: vw(20),
    tintColor: colors.white,
  },
  checkboxText: {
    fontSize: vw(14),
    color: colors.checkboxTextColor,
  },
  checkedCheckbox: {
    backgroundColor: colors.checkedCheckboxBgColor,
    borderColor: colors.checkedCheckboxBgColor,
  },
  termsText: {
    color: colors.termsTextColor,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: colors.disabledButtonColor,
  },
  phoneView: {
    width: vw(195),
  },
  phoneText: {
    alignSelf: 'center',
  },
  phoneInput: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
  },
  formView: {
    justifyContent: 'center',
    flex: 1,
    gap: 20,
    bottom: vw(30),
  },
  containerStyle: {
    alignSelf: 'center',
    bottom: vw(2),
  },
  iconContainer: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{translateY: -10}],
  },
});
