import {StyleSheet} from 'react-native';
import {colors} from '../../themes';
import {vw} from '../../utils/dimension';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: vw(20),
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  contentContainer: {
    width: '100%',
  },
  header: {
    fontSize: vw(24),
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeader: {
    color: colors.subheadingtextColor,
    margin: vw(10),
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: vw(30),
  },
  codeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  codeInput: {
    width: vw(50),
    height: vw(50),
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: vw(18),
    marginHorizontal: vw(10),
    borderColor: colors.borderColor,
    backgroundColor: colors.white,
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: vw(10),
    marginBottom: vw(20),
  },

  textCode: {
    fontSize: vw(16),
    color: colors.checkedCheckboxBgColor,
    left: vw(10),
  },

  headingView: {
    bottom: vw(12),
  },
  heading: {
    color: colors.textHeadingColor,
    fontWeight: 700,
    fontSize: vw(28),
    margin: 10,
    top: vw(10),
  },
  subheading: {
    color: colors.subheadingtextColor,
    margin: 10,
  },
  customButtonStyle: {
    width: '90%',
    alignSelf: 'center',
    top: vw(20),
  },
});
