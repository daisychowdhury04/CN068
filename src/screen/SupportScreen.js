import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const SupportScreen = () => {
  const [problem, setProblem] = useState('');

  const handleSubmit = () => {
    // You can implement your submit logic here, like sending the problem to a server
    console.log('Problem submitted:', problem);
    // Reset the input field after submission
    setProblem('');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../images/support.gif')} style={styles.image} />
      <TextInput
        value={problem}
        onChangeText={setProblem}
        placeholder="Describe your problem..."
        multiline
        style={styles.input}
      />
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
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
  image: {
    width: '50%',
    height: 150,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SupportScreen;
