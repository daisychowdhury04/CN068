import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SkillsPage = ({ navigation }) => {
  const [skills, setSkills] = useState('');

  const handleNext = () => {
    // Save skills to state or context
    navigation.navigate('RoleTypePage');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Skill Requirements:</Text>
      <TextInput
        style={styles.input}
        multiline
        value={skills}
        onChangeText={setSkills}
        placeholder="Enter required skills"
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
    height: 100,
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

export default SkillsPage;
