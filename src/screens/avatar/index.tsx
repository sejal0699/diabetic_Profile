import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {styles} from './styles';
import BackArrow from '../../components/backArrow';
import strings from '../../utils/strings';
import {Icons, Images} from '../../assets';
import CustomButton from '../../components/customButton';
import {colors} from '../../themes';
import {vw} from '../../utils/dimension';
import {ScreenNames} from '../../navigation/ScreenNames';

const AvatarModal = () => {
  const [selectedAvatarIndex, setSelectedAvatarIndex] = useState(null);
  const navigation = useNavigation();
  const {handleSubmit} = useForm({});
  const avatars = [
    Images.avatar10,
    Images.avatar1,
    Images.avatar2,
    Images.avatar3,
    Images.avatar4,
    Images.avatar5,
    Images.avatar6,
    Images.avatar7,
    Images.avatar8,
    Images.avatar9,
    Images.avatar3,
    Images.avatar5,
  ];

  const handlePress = async () => {
    (navigation as any).navigate(ScreenNames.SetupProfile);
  };

  const handleAvatarPress = async (index: any) => {
    console.log(index);
    await AsyncStorage.setItem('selectedAvatar', JSON.stringify(index));
    setSelectedAvatarIndex(selectedAvatarIndex === index ? null : index);
  };

  const renderItem = ({item, index}: any) => (
    <View style={styles.avatarContainer}>
      <TouchableOpacity onPress={() => handleAvatarPress(index)}>
        <Image
          source={item}
          style={{
            width: vw(100),
            height: vw(100),
            resizeMode: 'cover',
            borderWidth: selectedAvatarIndex === index ? 2 : 0,
            borderColor: colors.checkedCheckboxBgColor,
            borderRadius: 90,
          }}
        />
      </TouchableOpacity>
      {selectedAvatarIndex === index && (
        <View style={styles.checkIcon}>
          <Image source={Icons.pinkCheckbox} />
        </View>
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <BackArrow />
      <View style={styles.headingView}>
        <Text style={styles.heading}>{strings.setupHeading}</Text>
        <Text style={styles.subheading}>{strings.setupSubHeading}</Text>
      </View>
      <View style={styles.containerView}>
        <FlatList
          data={avatars}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
          contentContainerStyle={styles.avatarView}
        />
        <View>
          <CustomButton
            title="Continue"
            onPress={handlePress}
            style={[
              styles.customButtonStyle,
              // isDisabled && styles.disabledButton,
            ]}
            // disabled={isDisabled}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AvatarModal;
