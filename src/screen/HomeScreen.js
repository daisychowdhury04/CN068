import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import WorkScreen from './WorkScreen';
import ProfileScreen from './ProfileScreen';
import GigScreen from './GigScreen';
import SupportScreen from './SupportScreen';
import FAQScreen from './FAQScreen';
import FeedbackScreen from './FeedbackScreen';
import ImageSlider from './ImageSlider';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


const HomeScreen = () => {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation, route }) => ({
        headerTitle: getHeaderTitle(route),
        headerStyle: {
          backgroundColor: '#fff', // Customize as needed
        },
        headerTitleStyle: {
          fontWeight: 'bold', // Customize as needed
        },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons
              name="menu"
              size={24}
              color="black"
              style={{ marginLeft: 10 }}
            />
          </TouchableOpacity>
        ),
      })}>
      <Drawer.Screen
        name="HomeTabs"
        component={HomeTabs}
        options={({ route }) => ({
          drawerLabel: getDrawerLabel(route.name),
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons
              name={getDrawerIconName(route.name, focused)}
              size={size}
              color={color}
            />
          ),
        })}
      />
      <Drawer.Screen
        name="Support"
        component={SupportScreen}
        options={({ route }) => ({
          drawerLabel: getDrawerLabel(route.name),
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons
              name={getDrawerIconName(route.name, focused)}
              size={size}
              color={color}
            />
          ),
          headerTitle: 'Support', // Change the header title for Support screen
        })}
      />
      <Drawer.Screen
        name="FAQ"
        component={FAQScreen}
        options={({ route }) => ({
          drawerLabel: getDrawerLabel(route.name),
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons
              name={getDrawerIconName(route.name, focused)}
              size={size}
              color={color}
            />
          ),
          headerTitle: 'FAQ', // Change the header title for FAQ screen
        })}
      />
      <Drawer.Screen
        name="Feedback"
        component={FeedbackScreen}
        options={({ route }) => ({
          drawerLabel: getDrawerLabel(route.name),
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons
              name={getDrawerIconName(route.name, focused)}
              size={size}
              color={color}
            />
          ),
          headerTitle: 'Feedback', // Change the header title for Feedback screen
        })}
      />
    </Drawer.Navigator>
  );
};

const HomeTabs = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="WorkScreen"
        component={WorkScreen}
        options={{
          tabBarLabel: 'WorkList',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ticket-sharp" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="GigScreen"
        component={GigScreen}
        options={{
          tabBarLabel: 'Gig',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="navigate-circle-sharp" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="accessibility-sharp" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Home = () => {
  const images = [
    "https://i.ibb.co/CwzjJF1/black-orange-minimalist-we-are-hiring-poster.jpg",
    "https://i.ibb.co/7YMBqsB/grey-and-orange-minimalist-we-are-hiring-poster-1.jpg",
    "https://i.ibb.co/Pc2PvCD/grey-and-orange-minimalist-we-are-hiring-poster-2.jpg",
    "https://i.ibb.co/2SFkLTp/grey-and-orange-minimalist-we-are-hiring-poster-3.jpg"
    

  ];

  return (
    <View style={styles.container}>
      <ImageSlider images={images} />
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});

const getDrawerLabel = (routeName) => {
  switch (routeName) {
    case 'HomeTabs':
      return 'Home';
    case 'Support':
      return 'Support';
    case 'FAQ':
      return 'FAQ';
    case 'Feedback':
      return 'Feedback';
    default:
      return 'Unknown';
  }
};

const getDrawerIconName = (routeName, focused) => {
  switch (routeName) {
    case 'HomeTabs':
      return focused ? 'home' : 'home-outline';
    case 'Support':
      return focused ? 'help-circle' : 'help-circle-outline';
    case 'FAQ':
      return focused ? 'help' : 'help-outline';
    case 'Feedback':
      return focused ? 'chatbox' : 'chatbox-outline';
    default:
      return 'home-outline';
  }
};

const getHeaderTitle = (route) => {
  // If the current route doesn't have a name, we shouldn't display the title
  const routeName = route.state?.routes[route.state.index]?.name ?? 'Home';

  switch (routeName) {
    case 'Home':
      return 'Home Page';
    case 'BookMyBus':
      return 'Book My Bus Page';
    case 'Profile':
      return 'Profile Page';
    case 'TrackMyBus':
      return 'Track My Bus Page';
    case 'Support': // Adding Support screen title
      return 'Support';
    case 'FAQ': // Adding FAQ screen title
      return 'FAQ';
    case 'Feedback': // Adding Feedback screen title
      return 'Feedback';
    default:
      return 'Your App';
  }
};

export default HomeScreen;
