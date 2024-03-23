import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState(''); // State for full name input
  const navigation = useNavigation();

  const [loaded] = useFonts({
    UrbanistRegular: require('../fonts/Urbanist-Bold.ttf'),
    // Import other font weights and styles if needed
  });

  // Function to handle Signup
  const handleSignup = () => {
    navigation.navigate('NewRegisterOTPVerification');
  };

  // Function to handle Google Signup
  const handleGoogleSignup = () => {
    // Implement your Google Signup logic here
    console.log('Signup with Google button pressed');
  };

  // Function to handle registration
  const handleLogin = () => {
    // Implement your registration logic here
    navigation.navigate('Login');
  };

  const handleScreenPress = () => {
    // Function to dismiss the keyboard
    Keyboard.dismiss();
  };

  const handleTermsConditionsPrivacyPolicyPress = () => {
    // Implement the logic for when the link is pressed
    console.log('Link pressed');
  };

  return (
    <TouchableWithoutFeedback onPress={handleScreenPress}>
      <SafeAreaView style={styles.container}>
        <View style={styles.paddingHorizontal}>
          {/* Logo */}
          <View style={styles.Signupimgview}>
            <Image
              style={styles.Signupimgst}
              source={require('../images/RegisterPageImg.png')}
            />
          </View>
          {/* Title */}
          <Text style={styles.Signuptext}>Register</Text>
          {/* Full Name Input */}
          <View style={styles.nameinputContainer}>
            <MaterialIcons name="person" style={styles.nameinputIcon} />
            <TextInput
              placeholder="Full Name"
              style={styles.nameinput}
              value={fullName}
              onChangeText={(text) => setFullName(text)}
            />
          </View>
          {/* Email Input */}
          <View style={styles.emailinput}>
            <MaterialIcons name="alternate-email" style={styles.emailicon} />
            <TextInput
              placeholder="Email ID"
              style={styles.emailtext}></TextInput>
          </View>
          {/* Password Input */}
          <View style={styles.passwordInput}>
            <MaterialIcons name="lock" style={styles.emailicon} />
            <TextInput
              placeholder="Password"
              style={styles.passwordText}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                style={styles.eyeIcon}
              />
            </TouchableOpacity>
          </View>
          {/*  Link */}
          <View style={styles.conditionTextContainer}>
            <Text style={styles.conditionText}>
              By signing up, you’re agree to our {'\n'}
              <Text
                style={styles.linkText}
                onPress={handleTermsConditionsPrivacyPolicyPress}>
                Terms & Conditions and {''} 
              </Text>
              <Text
                style={styles.linkText}
                onPress={handleTermsConditionsPrivacyPolicyPress}>
                Privacy Policy
              </Text>
            </Text>
          </View>

          {/* Signup Button */}
          <TouchableOpacity style={styles.SignupButton} onPress={handleSignup}>
            <Text style={styles.SignupButtonText}>Signup</Text>
          </TouchableOpacity>
          {/* Google Signup Button */}
          <TouchableOpacity
            style={styles.googleButton}
            onPress={handleGoogleSignup}>
            <Image
              style={styles.googleIcon}
              source={require('../images/google_icon.png')}
            />
            <Text style={styles.googleButtonText}>Signup with Google</Text>
          </TouchableOpacity>
          {/* Registration Link */}
          <View style={styles.loginTextContainer}>
            <Text style={styles.loginText}>Joined us before?</Text>
            <TouchableOpacity onPress={handleLogin}>
              <Text style={styles.loginLink}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
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
  Signupimgview: {
    alignItems: 'center',
  },
  Signupimgst: {
    height: 300,
    width: 300,
  },
  Signuptext: {
    fontFamily: 'UrbanistRegular',
    fontSize: 48,
    color: '#000',
    marginBottom: 30,
  },
  paddingHorizontal: {
    paddingHorizontal: 25,
  },
  nameinputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    position: 'relative',
  },
  nameinputIcon: {
    color: '#B0B0B0',
    fontSize: 31,
    marginRight: 10,
  },
  nameinput: {
    flex: 1,
    paddingVertical: 0,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    fontFamily: 'UrbanistRegular',
  },
  emailicon: {
    color: '#B0B0B0',
    fontSize: 31,
    marginRight: 10,
  },
  emailinput: {
    flexDirection: 'row',
    marginBottom: 20,
    position: 'relative',
  },
  emailtext: {
    flex: 1,
    paddingVertical: 0,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    fontFamily: 'UrbanistRegular',
  },
  passwordInput: {
    flexDirection: 'row',
    marginBottom: 10,
    position: 'relative',
  },
  passwordText: {
    flex: 1,
    paddingVertical: 0,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    marginBottom: 0, // Adjust the spacing as per your design
    fontFamily: 'UrbanistRegular',
  },
  eyeIcon: {
    position: 'absolute',
    right: 5,
    fontSize: 24,
    color: '#B0B0B0',
  },
  SignupButton: {
    backgroundColor: '#0065FF', // Change the background color as per your design
    paddingVertical: 15, // Adjust the padding to make the buttons have the same height
    paddingHorizontal: 20,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  SignupButtonText: {
    color: '#fff', // Change the text color as per your design
    fontSize: 18,
    fontFamily: 'UrbanistRegular',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 4,
  },
  googleIcon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  googleButtonText: {
    fontSize: 18,
    color: '#000', // Change the color as per your design
    marginLeft: 5,
    fontFamily: 'UrbanistRegular',
  },
  loginTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  loginText: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'UrbanistRegular',
  },
  loginLink: {
    color: '#0065FF',
    fontFamily: 'UrbanistRegular',
    fontSize: 16,
  },
conditionTextContainer: {
    marginVertical: 10,
    paddingHorizontal: 20,
    textAlign: 'center', // Align text to center
  },
  conditionText: {
    textAlign: 'center', // Align text to center
    fontSize: 16,
  },
  linkText: {
    color: '#0065FF', // Color for the links
    fontFamily: 'UrbanistRegular',
  },
});

export default RegisterScreen;
