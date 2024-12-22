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
  },
  avatarContainer: {
    width: '33.33%',
    padding: 10,
    position: 'relative',
  },
  checkIcon: {
    position: 'absolute',
    alignSelf: 'center',
  },
  containerView: {
    justifyContent: 'space-between',
    flex: 1,
  },
  avatarView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
