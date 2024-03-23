import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from './src/screen/LoginScreen';
import RegisterScreen from './src/screen/RegisterScreen';
import ForgetPasswordScreen from './src/screen/ForgetPasswordScreen';
import ForgetPasswordOTPVerificationScreen from './src/screen/ForgetPasswordOTPVerificationScreen';
import NewPasswordScreen from './src/screen/NewPasswordScreen';
import NewRegisterOTPVerificationScreen from './src/screen/NewRegisterOTPVerificationScreen';
import HomeScreen from './src/screen/HomeScreen';
import ProfileScreen from './src/screen/ProfileScreen';
import WorkScreen from './src/screen/WorkScreen';
import GigScreen from './src/screen/GigScreen';
import SupportScreen from './src/screen/SupportScreen';
import FAQScreen from './src/screen/FAQScreen';
import FeedbackScreen from './src/screen/FeedbackScreen';

const Stack = createStackNavigator();

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/logo.gif')} // Adjust the path to your image
        style={styles.image}
      />
    </View>
  );
};

const App = () => {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    async function checkFirstLaunch() {
      setTimeout(() => {
        setIsAppReady(true);
      }, 100); // Adjust timing as needed
    }
    checkFirstLaunch();
  }, []);

  return (
    <NavigationContainer>
      {isAppReady ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen
            name="ForgetPassword"
            component={ForgetPasswordScreen}
          />
          <Stack.Screen
            name="ForgetPasswordOTPVerification"
            component={ForgetPasswordOTPVerificationScreen}
          />
          <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
          <Stack.Screen
            name="NewRegisterOTPVerification"
            component={NewRegisterOTPVerificationScreen}
          />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="GigScreen" component={GigScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="WorkScreen" component={WorkScreen} />
          <Stack.Screen name="Support" component={SupportScreen} />
          <Stack.Screen name="FAQ" component={FAQScreen} />
          <Stack.Screen name="Feedback" component={FeedbackScreen} />
        </Stack.Navigator>
      ) : (
        <SplashScreen />
      )}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: '20%',
    height: '50%',
    resizeMode: 'contain', // or adjust resizeMode as needed
  },
});

export default App;
