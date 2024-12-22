import React, {useState, useRef, useEffect} from 'react';
import {View,Text,TextInput,TouchableOpacity,KeyboardAvoidingView,Platform} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './styles';
import BackArrow from '../../components/backArrow';
import strings from '../../utils/strings';
import CustomButton from '../../components/customButton';
import {ScreenNames} from '../../navigation/ScreenNames';

interface NavigationProps {
  navigation: any;
}

const OTP = ({navigation}: NavigationProps) => {
  const [code, setCode] = useState(['', '', '', '', '']);
  const [errorMessage, setErrorMessage] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const inputRefs = useRef<TextInput[]>([]);
  const [resend, setIsResend] = useState(false);
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    const allFilled = code.every(digit => digit.length > 0);
    setButtonDisabled(!allFilled);
  }, [code]);

  useEffect(() => {
    let interval: any;
    if (resend && timer > 0) {
      interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsResend(false);
    }
    return () => clearInterval(interval);
  }, [resend, timer]);

  const handleTextChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
    if (text && index < 4) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !code[index]) {
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleSubmit = () => {
    const enteredCode = code.join('');
    const defaultOTP = '12345';
    if (enteredCode !== defaultOTP) {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      navigation.navigate(ScreenNames.SetupProfile);
    } else {
      setErrorMessage('');
      setAttempts(0);
      navigation.navigate(ScreenNames.SetupProfile);
    }
  };

  const handleResendCode = () => {
    if (!resend) {
      setIsResend(true);
      setTimer(60);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <BackArrow />
        <View style={styles.contentContainer}>
          <Text style={styles.heading}>{strings.otpheading}</Text>
          <Text style={styles.subHeader}>{strings.otpSubHeading}</Text>
          <Text style={styles.subheading}>{strings.otpCodeHeading}</Text>
          <View style={styles.box}>
            <View style={styles.codeInputContainer}>
              {code.map((value, index) => (
                <TextInput
                  key={index}
                  style={styles.codeInput}
                  keyboardType="numeric"
                  maxLength={1}
                  value={value}
                  onChangeText={text => handleTextChange(text, index)}
                  onKeyPress={e => handleKeyPress(e, index)}
                  ref={input => {inputRefs.current[index] = input;}}
                />
              ))}
            </View>
          </View>

          <TouchableOpacity onPress={handleResendCode} disabled={resend}>
            <Text style={styles.textCode}>
              {resend
                ? `Resend in 00:${timer < 10 ? `0${timer}` : timer}`
                : 'Resend'}
            </Text>
          </TouchableOpacity>
        </View>

        <CustomButton
          title="Verify"
          onPress={handleSubmit}
          style={[styles.customButtonStyle]}
        />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default OTP;
