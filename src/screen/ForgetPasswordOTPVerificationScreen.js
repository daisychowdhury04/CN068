import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import {
  View,
  Text,
  TextInput,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import WrongOtpPopup from '../components/WrongOtpPopup';

const ForgetPasswordOTPVerificationScreen = () => {
  const [otp, setOtp] = useState('');
  const [showWrongOtpPopup, setShowWrongOtpPopup] = useState(false); // State for controlling the popup visibility
  const navigation = useNavigation();

  const [loaded] = useFonts({
    UrbanistRegular: require('../fonts/Urbanist-Bold.ttf'),
  });

  const handleVerifyOTPSubmit = () => {
    if (otp === '1234') {
      navigation.navigate('NewPassword');
    } else {
      setShowWrongOtpPopup(true); // Show the wrong OTP popup if the entered OTP is incorrect
    }
  };

  const handleResendOTP = () => {
    // Logic to resend OTP
    console.log('Resend OTP');
  };

  const handleBackToForgetPassword = () => {
    navigation.goBack();
  };

  const handleScreenPress = () => {
    // Function to dismiss the keyboard
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleScreenPress}>
      <SafeAreaView style={styles.container}>
        <View style={styles.paddingHorizontal}>
          {/* Logo */}
          <View style={styles.ForgetPasswordimgview}>
            <Image
              style={styles.ForgetPasswordimgst}
              source={require('../images/ForgotPasswordPageImg.png')}
            />
          </View>
          {/* Title */}
          <Text style={styles.forgetpasswordtext}>OTP Verification</Text>
          {/* OTP Input */}
          <View style={styles.inputContainer}>
            <View style={styles.emailinput}>
              <MaterialIcons name="vpn-key" style={styles.emailicon} />
              <TextInput
                placeholder="Enter OTP"
                style={styles.emailtext}
                value={otp}
                onChangeText={setOtp}
              />
            </View>
            {/* Resend OTP Text */}
            <TouchableOpacity onPress={handleResendOTP}>
              <Text style={styles.resendText}>Resend OTP</Text>
            </TouchableOpacity>
          </View>
          {/* Submit Button */}
          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleVerifyOTPSubmit}>
            <Text style={styles.submitButtonText}>Verify OTP</Text>
          </TouchableOpacity>
          {/* Back to Forget Password Link */}
          <View style={styles.rememberyourpasswordTextContainer}>
            <Text style={styles.rememberyourpasswordText}>Back to </Text>
            <TouchableOpacity onPress={handleBackToForgetPassword}>
              <Text style={styles.loginLink}>Forget Password</Text>
            </TouchableOpacity>
          </View>
        </View>
        <WrongOtpPopup visible={showWrongOtpPopup} onClose={() => setShowWrongOtpPopup(false)} />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    justifyContent: 'center',
  },
  ForgetPasswordimgview: {
    alignItems: 'center',
  },
  ForgetPasswordimgst: {
    height: 300,
    width: 300,
  },
  forgetpasswordtext: {
    fontFamily: 'UrbanistRegular',
    fontSize: 32,
    color: '#000',
    marginBottom: 30,
  },
  paddingHorizontal: {
    paddingHorizontal: 25,
  },
  inputContainer: {
    marginBottom: 20,
  },
  emailicon: {
    color: '#B0B0B0',
    fontSize: 31,
    marginRight: 10,
  },
  emailinput: {
    flexDirection: 'row',
    position: 'relative',
  },
  emailtext: {
    flex: 1,
    paddingVertical: 0,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    fontFamily: 'UrbanistRegular',
  },
  resendText: {
    color: '#0065FF',
    fontSize: 16,
    fontFamily: 'UrbanistRegular',
    marginTop:10 ,
    marginLeft:'auto',
  },
  submitButton: {
    backgroundColor: '#0065FF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'UrbanistRegular',
  },
  rememberyourpasswordTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  rememberyourpasswordText: {
    fontSize: 16,
    fontFamily: 'UrbanistRegular',
  },
  loginLink: {
    color: '#0065FF',
    fontSize: 16,
    marginLeft: 5,
    fontFamily: 'UrbanistRegular',
  },
});

export default ForgetPasswordOTPVerificationScreen;
