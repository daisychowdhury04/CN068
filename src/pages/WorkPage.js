import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WorkPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Work Page</Text>
      {/* Add your work content here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default WorkPage;
