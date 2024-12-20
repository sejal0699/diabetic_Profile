import {StyleSheet} from 'react-native';
import {colors} from '../../themes';
import {vw} from '../../utils/dimension';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    padding: 20,
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
    left:10
  },
  profileText: {
    color: colors.grayText,
    fontWeight: 400,
    fontSize: vw(14),
    left:10
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
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: 12,
    color:colors.lightGrey
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    position: 'absolute',
    right: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    width: 20,
    height: 20,
    tintColor: colors.darkBlue,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  label: {
    fontSize: 12,
    left: 4,
    bottom: 2,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    // borderColor:colors.green,
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 10,
  },
  icon: {
    marginRight: 10,
    top: 10,
  },
  optionText: {
    fontSize: 16,
  },
});
