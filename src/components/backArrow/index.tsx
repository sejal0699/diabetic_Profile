import {View,TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {Icons} from '../../assets';
import { styles } from './styles';

const BackArrow = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.backBox}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Image source={Icons.backArrowIcon} style={styles.backIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BackArrow


