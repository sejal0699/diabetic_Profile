import {StyleSheet} from 'react-native';
import {colors} from '../../themes';
import {vw} from '../../utils/dimension';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    padding: vw(20),
    backgroundColor: colors.white,
  },
  subheading: {
    color: colors.subheadingtextColor,
    margin: 10,
  },
  heading: {
    color: colors.textHeadingColor,
    fontWeight: 700,
    fontSize: vw(28),
    margin: 10,
    top: vw(10),
  },
  profileSection: {
    flexDirection: 'row',
  },
  profilePictureContainer: {},
  profilePicture: {
    width: vw(100),
    height: vw(100),
    borderRadius: 90,
    resizeMode: 'cover',
  },
  headingView: {
    bottom: vw(12),
  },
  uploadPhoto: {
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 5,
  },
  subText: {
    color: colors.checkedCheckboxBgColor,
    fontWeight: 500,
    fontSize: vw(16),
    left: 10,
  },
  profileText: {
    color: colors.grayText,
    fontWeight: 400,
    fontSize: vw(14),
    left: 10,
  },
  formView: {
    top: vw(12),
    gap: 20,
  },
  customButtonStyle: {
    width: '90%',
    alignSelf: 'center',
    
  },
  disabledButton: {
    backgroundColor: colors.disabledButtonColor,
  },
  containerView: {
    justifyContent: 'space-between',
    flex: 1,
  },

  iconContainer: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{translateY: -10}],
  },
  dropdown: {
    height: vw(50),
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: vw(8),
  },
  placeholderStyle: {
    fontSize: vw(12),
    color: colors.lightGrey,
  },
  selectedTextStyle: {
    fontSize: vw(16),
  },
  iconStyle: {
    position: 'absolute',
    right: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    width: vw(20),
    height: vw(20),
    tintColor: colors.darkBlue,
  },
  inputSearchStyle: {
    height: vw(40),
    fontSize: vw(16),
  },
  label: {
    fontSize: vw(12),
    left: 4,
    bottom: vw(2),
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: vw(8),
    paddingHorizontal: vw(15),
    marginBottom: 4,
    borderRadius: 10,
    backgroundColor: colors.grayBackground,
  },
  icon: {
    marginRight: vw(10),
    top: 10,
  },
  optionText: {
    fontSize: vw(16),
  },
});
