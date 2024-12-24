import {StyleSheet} from 'react-native';
import {colors} from '../../themes';

export const styles = StyleSheet.create({
  listHeader: {backgroundColor: '#eee', color: '#222', height: 44, padding: 12},
  title: {fontSize: 18, fontWeight: 'bold', paddingTop: 10},
  message: {
    fontSize: 14,
    paddingBottom: 15,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  engine: {position: 'absolute', right: 0},
  body: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  sectionContainer: {marginTop: 32, paddingHorizontal: 24},
  sectionTitle: {fontSize: 24, fontWeight: '600', color: colors.black},
  sectionDescription: {marginTop: 8, fontSize: 18, fontWeight: '400'},
  highlight: {fontWeight: '700'},
  footer: {
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
