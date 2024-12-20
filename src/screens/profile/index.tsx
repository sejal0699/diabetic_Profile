import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {styles} from './styles';
import {useForm} from 'react-hook-form';
import CustomTextInput from '../../components/CustomTextInput';
import {SafeAreaView} from 'react-native-safe-area-context';
import CountryPicker from 'react-native-country-picker-modal';
import BackArrow from '../../components/backArrow';
import {Icons} from '../../assets';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import strings from '../../utils/strings';
import { ScreenNames } from '../../navigation/ScreenNames';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  phoneNumber: Yup.string()
    .required('Phone number is required')
    .matches(/^\d{10}$/, 'Phone number must be 10 digits'),

    email: Yup.string()
    .required('Email is required')
    .email('Invalid email address')
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[cC][oO][mM]$/,
      'Email must be in the format "something@domain.com"',
    ),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(/[\W_]/,'Password must contain at least one special character (e.g., !, @, #, $, etc.)',
    ),
});

const Profile = () => {
  const [isPickerVisible, setPickerVisible] = useState(false);
  const [countryCode, setCountryCode] = useState('US');
  const [callingCode, setCallingCode] = useState('1');
  const [isChecked, setIsChecked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const toggleCheckbox = () => setIsChecked(!isChecked);
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phoneNumber: '',
      password: '',
    },
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });

  useEffect(() => {
    setIsDisabled(!isValid || !isChecked);
  }, [isValid, isChecked]);

  const onSubmit = data=> {
    console.log(data);
    navigation.navigate(ScreenNames.SetupProfile);
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackArrow />
      <Text style={styles.heading}>{strings.heading}</Text>
      <Text style={styles.subheading}>{strings.subHeadingString}</Text>
      <View style={styles.formView}>
        <CustomTextInput
          control={control}
          name="name"
          placeholder="Name"
          errorMessage={errors.name?.message}
        />

        <View style={styles.phoneInput}>
          <TouchableOpacity
            onPress={() => setPickerVisible(true)}
            style={styles.flagView}>
            <CountryPicker
              withFlag
              withCallingCode
              withFilter
              withCountryNameButton={false}
              countryCode={countryCode}
              visible={isPickerVisible}
              onSelect={country => {
                setCountryCode(country.cca2);
                setCallingCode(country.callingCode[0]);
                setPickerVisible(false);
              }}
              onClose={() => setPickerVisible(false)}
              containerButtonStyle={styles.containerStyle}
            />
            <Text style={styles.phoneText}>+{callingCode}</Text>
            <Image source={Icons.downArrowIcon} style={styles.backIcon} />
          </TouchableOpacity>
          <View style={styles.phoneView}>
            <CustomTextInput
              control={control}
              name="phoneNumber"
              placeholder="Phone Number"
              errorMessage={errors.phoneNumber?.message}
            />
          </View>
        </View>

        <CustomTextInput
          control={control}
          name="email"
          placeholder="Email"
          errorMessage={errors.email?.message}
        />

        <CustomTextInput
          control={control}
          name="password"
          placeholder="Password"
          errorMessage={errors.password?.message}
          rightIconSource={Icons.eyeIcon}
          secureTextEntry={!isPasswordVisible}
          onRightIconPress={() => setPasswordVisible(!isPasswordVisible)}
          customIconContainerStyle={styles.iconContainer}
        />
      </View>

      <View style={styles.checkboxContainer}>
        <TouchableOpacity
          onPress={toggleCheckbox}
          style={[styles.checkbox, isChecked && styles.checkedCheckbox]}>
          {isChecked && (
            <Image source={Icons.tickIcon} style={[styles.checkmark]} />
          )}
        </TouchableOpacity>
        <Text style={styles.checkboxText}>
          {strings.termsText}{' '}
          <Text style={styles.termsText}>{strings.subText}</Text>
        </Text>
      </View>

      <CustomButton
        title="Continue"
        onPress={handleSubmit(onSubmit)}
        style={[styles.customButtonStyle, isDisabled && styles.disabledButton]}
        disabled={isDisabled}
      />


    </SafeAreaView>
  );
};

export default Profile