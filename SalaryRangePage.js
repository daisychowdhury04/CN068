import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal, TouchableOpacity, StyleSheet } from 'react-native';

const SalaryRangePage = ({ navigation }) => {
  const [minSalary, setMinSalary] = useState('');
  const [maxSalary, setMaxSalary] = useState('');
  const [salaryType, setSalaryType] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleNext = () => {
    // Save salary range and type to state or context
    navigation.navigate('LocationPage', { minSalary, maxSalary, salaryType });
  };

  const handleSelectSalaryType = (type) => {
    setSalaryType(type);
    setShowDropdown(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.dropdownButton} onPress={() => setShowDropdown(true)}>
        <Text style={styles.dropdownButtonText}>{salaryType || 'Select Salary Type'}</Text>
      </TouchableOpacity>
      <Modal visible={showDropdown} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.dropdown}>
            <TouchableOpacity onPress={() => handleSelectSalaryType('Project-based')}>
              <Text style={styles.dropdownItem}>Project-based</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSelectSalaryType('Monthly')}>
              <Text style={styles.dropdownItem}>Monthly</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSelectSalaryType('Not Decided')}>
              <Text style={styles.dropdownItem}>Not Decided</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Text style={styles.label}>Salary Range:</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={minSalary}
          onChangeText={setMinSalary}
          placeholder="Minimum salary"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          value={maxSalary}
          onChangeText={setMaxSalary}
          placeholder="Maximum salary"
          keyboardType="numeric"
        />
      </View>
      <Button title="Next" onPress={handleNext} disabled={!minSalary || !maxSalary || !salaryType} />
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
  dropdownButton: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    width: '100%',
    alignItems: 'center',
  },
  dropdownButtonText: {
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  dropdown: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 4,
  },
  dropdownItem: {
    fontSize: 16,
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 10,
  },
});

export default SalaryRangePage;
