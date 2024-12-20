import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import BackArrow from '../../components/backArrow';
import {Icons, Images} from '../../assets';
import strings from '../../utils/strings';
import CustomTextInput from '../../components/CustomTextInput';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import * as Yup from 'yup';
import {Dropdown} from 'react-native-element-dropdown';
import GalleryModal from '../../components/GalleryModal';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {request, PERMISSIONS} from 'react-native-permissions';
import {colors} from '../../themes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Username must be at least 3 characters')
    .required('Name is required'),
  birthday: Yup.string().required('Birthday is required'),
  gender: Yup.string().required('Gender is required'),
  referralCode: Yup.string(),
});

const SetupProfile = () => {
  const navigation = useNavigation();
  const [isDisabled, setIsDisabled] = useState(true);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState('');
  const [profileImage, setProfileImage] = useState(Images.profileImage);
  const [isFocus, setIsFocus] = useState(false);
  const [values, setValues] = useState(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItems, setSelectedItems] = useState({});
  const {control,handleSubmit,formState: {errors, isValid},setValue} = useForm({
   resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });

  const saveProfileImage = async uri => {
    try {
      await AsyncStorage.setItem('profileImage', uri);
    } catch (error) {
      console.error('Error saving profile image:', error);
    }
  };

  const loadProfileImage = async () => {
    try {
      const uri = await AsyncStorage.getItem('profileImage');
      if (uri) {
       setProfileImage(uri);
      }
    } catch (error) {
      console.error('Error loading profile image:', error);
    }
  };

  useEffect(() => {
    loadProfileImage();
  }, []);

  const data = [
    {label: 'Male', value: '1'},
    {label: 'Female', value: '2'},
    {label: 'Others', value: '3'},
  ];

  const requestPermission = async permissionType => {
    console.log(permissionType);
    try {
      const result = await request(permissionType);
      return result === 'granted';
    } catch (error) {
      console.error('Permission request error:', error);
      return false;
    }
  };

  const handleImagePick = async source => {
    let hasPermission;
    if (source === 'gallery') {
      hasPermission = await requestPermission(PERMISSIONS.IOS.PHOTO_LIBRARY);
    } else if (source === 'camera') {
      hasPermission = await requestPermission(PERMISSIONS.IOS.CAMERA);
    } else {
      console.warn('Invalid source selected!');
      return;
    }
    const options = {
      mediaType: 'photo',
      includeBase64: false,
    };

    const callback = response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.error('ImagePicker Error: ', response.error);
      } else if (!response.assets || response.assets.length === 0) {
        console.error('No assets found in the response');
      } else {
        const selectedImage = response.assets[0];
        setProfileImage(selectedImage.uri);
        saveProfileImage(selectedImage.uri);
        setModalVisible(false);
      }
      setModalVisible(false);
    };
    if (source === 'gallery') {
      launchImageLibrary(options, callback);
    } else {
      launchCamera(options, callback);
    }
  };
  useEffect(() => {
    setIsDisabled(!isValid);
  }, [isValid]);

  const renderLabel = () => {
    if (values || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: 'blue'}]}>Gender</Text>
      );
    }
    return null;
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = date => {
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    setDate(formattedDate);
    setValue('birthday', formattedDate);
    setDatePickerVisibility(false);
  };
  const onSubmit = data => {
    console.log(data);
  };
  const handleSelection = item => {
    console.log(item);
    setSelectedItems({[item.value]: true});
    setValues(item.value);
    setIsDropdownVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackArrow />
      <View style={styles.headingView}>
        <Text style={styles.heading}>{strings.setupHeading}</Text>
        <Text style={styles.subheading}>{strings.setupSubHeading}</Text>
      </View>
      <View style={styles.profileSection}>
        <View style={styles.profilePictureContainer}>
          {profileImage &&
          typeof profileImage === 'string' &&
          profileImage.trim() !== '' ? (
            <Image source={{uri: profileImage}} style={styles.profilePicture} />
          ) : (
            <Image source={profileImage} style={styles.profilePicture} />
          )}
        </View>
        <View style={styles.uploadPhoto}>
          <Text style={styles.profileText}>{strings.profile}</Text>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={styles.subText}>{strings.uploadText}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.containerView}>
        <View style={styles.formView}>
          <CustomTextInput
            control={control}
            name="username"
            placeholder="Username"
            errorMessage={errors.username?.message}
            rightIconSource={errors.username ? Icons.checkIcon : Icons.crossIcon}
            customIconContainerStyle={styles.iconContainer}
          />
          <CustomTextInput
            control={control}
            name="birthday"
            placeholder="Birthday"
            value={date}
            errorMessage={errors.birthday?.message}
            rightIconSource={Icons.calenderIcon}
            onRightIconPress={() => setDatePickerVisibility(true)}
            customIconContainerStyle={styles.iconContainer}
          />
          <Controller
            control={control}
            name={'gender'}
            render={({field: {onChange}}) => (
              <View>
                {renderLabel()}
                <Dropdown
                  style={styles.dropdown}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={data}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder="Select items"
                  value={values}
                  onChange={item => {
                    onChange(item.value);
                    setIsDropdownVisible(false);
                    handleSelection(item);
                  }}
                  renderItem={item => (
                    <View style={{padding: 10, borderRadius: 10}}>
                      <TouchableOpacity
                        style={[
                          styles.optionContainer,
                          selectedItems[item.value] && {
                            borderColor: colors.green,
                            borderWidth: 1,
                          },
                        ]}
                        onPress={() => handleSelection(item)}>
                        <Text
                          style={[
                            styles.optionText,
                            selectedItems[item.value] && {color: colors.green},
                          ]}>
                          {item.label}
                        </Text>
                        <View style={styles.iconContainer}>
                          {selectedItems[item.value] ? (
                            <Image
                              source={Icons.checkIcon}
                              style={styles.icon}
                            />
                          ) : (
                            <Image
                              source={Icons.circleIcon}
                              style={styles.icon}
                            />
                          )}
                        </View>
                      </TouchableOpacity>
                    </View>
                  )}
                />
              </View>
            )}
          />
          <CustomTextInput
            control={control}
            name="Referral Code (Optional)"
            placeholder="Referral Code (Optional)"
            errorMessage={errors.referralCode?.message}
          />
        </View>
        <View>
          <CustomButton
            title="Continue"
            onPress={handleSubmit(onSubmit)}
            style={[
              styles.customButtonStyle,
              isDisabled && styles.disabledButton,
            ]}
            disabled={isDisabled}
          />
        </View>
      </View>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        display={'inline'}
      />
      <GalleryModal
        visible={modalVisible}
        closeModal={() => setModalVisible(false)}
        onImagePick={handleImagePick}
      />
    </SafeAreaView>
  );
};

export default SetupProfile;
