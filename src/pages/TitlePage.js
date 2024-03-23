import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const TitlePage = ({ navigation }) => {
  const [jobTitle, setJobTitle] = useState('');

  const handleNext = () => {
    // Save job title to state or context
    navigation.navigate('SkillsPage');
  };

  const handleNotifications = () => {
    // Navigate to notifications page
    console.log("Navigating to NotificationsPage");
    navigation.navigate('NotificationsPage');
  };

  return (
    <View style={styles.container}>
      <Button title="Notifications" onPress={handleNotifications} />
      <Text style={styles.label}>Job Title:</Text>
      <TextInput
        style={styles.input}
        value={jobTitle}
        onChangeText={setJobTitle}
        placeholder="Enter job title"
      />
      <View style={styles.buttonContainer}>
        <Button title="Next" onPress={handleNext} />
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
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
  },
});

export default TitlePage;
