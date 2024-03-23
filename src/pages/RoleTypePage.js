import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const RoleTypePage = ({ navigation }) => {
  const handleNext = (roleType) => {
    // Save role type to state or context
    navigation.navigate('SalaryRangePage', { roleType });
  };

  return (
    <View style={styles.container}>
      <Text>Job Role Type:</Text>
      <View style={styles.buttonContainer}>
        <Button title="Freelancer" onPress={() => handleNext('freelancer')} />
        <Button title="Intern" onPress={() => handleNext('intern')} />
        <Button title="Co-founder" onPress={() => handleNext('co-founder')} />
        <Button title="Full-time" onPress={() => handleNext('full-time')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default RoleTypePage;
