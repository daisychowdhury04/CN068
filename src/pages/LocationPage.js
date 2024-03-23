import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const LocationPage = ({ navigation }) => {
  const [locationType, setLocationType] = useState('');

  const handleNext = (selectedLocation) => {
    setLocationType(selectedLocation);
    // Save location type to state or context
    navigation.navigate('DescriptionPage', { locationType: selectedLocation });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Job Location:</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Remote"
          onPress={() => handleNext('remote')}
          color={locationType === 'remote' ? '#007bff' : '#ccc'}
        />
        <Button
          title="Office Work"
          onPress={() => handleNext('office')}
          color={locationType === 'office' ? '#007bff' : '#ccc'}
        />
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default LocationPage;
