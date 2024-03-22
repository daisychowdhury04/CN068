// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TitlePage from './TitlePage';
import SkillsPage from './SkillsPage';
import RoleTypePage from './RoleTypePage';
import SalaryRangePage from './SalaryRangePage';
import LocationPage from './LocationPage';
import DescriptionPage from './DescriptionPage';
import  NotificationsPage from './NotificationsPage';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TitlePage">
        <Stack.Screen name="TitlePage" component={TitlePage} />
        <Stack.Screen name="SkillsPage" component={SkillsPage} />
        <Stack.Screen name="RoleTypePage" component={RoleTypePage} />
        <Stack.Screen name="SalaryRangePage" component={SalaryRangePage} />
        <Stack.Screen name="LocationPage" component={LocationPage} />
        <Stack.Screen name="DescriptionPage" component={DescriptionPage} />
        <Stack.Screen name="NotificationsPage" component={NotificationsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
