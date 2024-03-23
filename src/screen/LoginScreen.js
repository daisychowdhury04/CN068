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
  ActivityIndicator,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); // State to control the loading indicator
  const navigation = useNavigation();

    const [loaded] = useFonts({
    UrbanistRegular: require('../fonts/Urbanist-Bold.ttf'),
    // Import other font weights and styles if needed
  });

  // Function to handle login
  const handleLogin = () => {
    setLoading(true); // Set loading to true to show the loading indicator
    setTimeout(() => {
      navigation.navigate('Home');
      setLoading(false); // Set loading back to false after navigation
    }, 1000);
  };

  // Function to handle Google login
  const handleGoogleLogin = () => {
    console.log('Login with Google button pressed');
  };

  // Function to handle registration
  const handleRegister = () => {
    navigation.navigate('Register');
  };

  const handleForgetPassword = () => {
    navigation.navigate('ForgetPassword');
  };

  const handleScreenPress = () => {
    Keyboard.dismiss();
  };

  const handleCloseSuccessPopup = () => {
    setShowSuccessPopup(false);
  };

  return (
    <TouchableWithoutFeedback onPress={handleScreenPress}>
      <SafeAreaView style={styles.container}>
        <View style={styles.paddingHorizontal}>
          {/* Logo */}
          <View style={styles.loginimgview}>
            <Image
              style={styles.loginimgst}
              source={require('../images/LoginPageImg.png')}
            />
          </View>
          {/* Title */}
          <Text style={styles.logintext}>Login</Text>
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
          {/* Forgot Password */}
          <TouchableOpacity
            style={styles.forgetPassword}
            onPress={() => handleForgetPassword()}>
            <Text style={styles.forgetPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
          {/* Login Button */}
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          )}
          {/* OR Separator */}
          <View style={styles.orContainer}>
            <View style={styles.orLine} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.orLine} />
          </View>
          {/* Google Login Button */}
          <TouchableOpacity
            style={styles.googleButton}
            onPress={handleGoogleLogin}>
            <Image
              style={styles.googleIcon}
              source={require('../images/google_icon.png')}
            />
            <Text style={styles.googleButtonText}>Login with Google</Text>
          </TouchableOpacity>
          {/* Registration Link */}
          <View style={styles.registerTextContainer}>
            <Text style={styles.registerText}>New to Logistics? </Text>
            <TouchableOpacity onPress={handleRegister}>
              <Text style={styles.registerLink}>Register</Text>
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
  loginimgview: {
    alignItems: 'center',
  },
  loginimgst: {
    height: 300,
    width: 300,
  },
  logintext: {
    fontFamily: 'UrbanistRegular',
    fontSize: 48,
    color: '#000',
    marginBottom: 30,
  },
  paddingHorizontal: {
    paddingHorizontal: 25,
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
  forgetPassword: {
    alignItems: 'flex-end',
  },
  forgetPasswordText: {
    color: '#007bff', // Change the color as per your design
    fontSize: 16,
    fontFamily: 'UrbanistRegular',
  },
  loginButton: {
    backgroundColor: '#0065FF', // Change the background color as per your design
    paddingVertical: 15, // Adjust the padding to make the buttons have the same height
    paddingHorizontal: 20,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  loginButtonText: {
    color: '#fff', // Change the text color as per your design
    fontSize: 18,
    fontFamily: 'UrbanistRegular',
  },

  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#000',
    marginHorizontal: 10,
  },
  orText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
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
  registerTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  registerText: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'UrbanistRegular',
  },
  registerLink: {
    color: '#0065FF',
    fontFamily: 'UrbanistRegular',
    fontSize: 16,
  },
});

export default LoginScreen;
