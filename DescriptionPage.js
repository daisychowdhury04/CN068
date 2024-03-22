import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const JobDescriptionPage = ({ navigation }) => {
  const [jobDescription, setJobDescription] = useState('');

  const handleSubmit = () => {
    // Submit job details and navigate to confirmation page
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Job Description:</Text>
      <TextInput
        multiline
        style={styles.input}
        value={jobDescription}
        onChangeText={setJobDescription}
        placeholder="Enter job description"
      />
      <Button title="Submit" onPress={handleSubmit} />
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
    height: 150,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default JobDescriptionPage;
