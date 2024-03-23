// JobListGenerator.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const JobListGenerator = () => {
  const navigation = useNavigation(); // Initialize navigation hook

  const [formData, setFormData] = useState({
    jobRole: '',
    company: '',
    location: '',
    experience: '',
    employmentType: '',
    postedDate: '',
    salary: ''
  });

  const [jobList, setJobList] = useState([]);

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = () => {
    const newJobItem = { ...formData };
    setJobList([...jobList, newJobItem]);
    setFormData({
      jobRole: '',
      company: '',
      location: '',
      experience: '',
      employmentType: '',
      postedDate: '',
      salary: ''
    });
  };

  const goToOtherPage = () => {
    navigation.navigate('JobListPage', { jobList }); 
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Job Role"
          value={formData.jobRole}
          onChangeText={(text) => handleChange('jobRole', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Company"
          value={formData.company}
          onChangeText={(text) => handleChange('company', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Location"
          value={formData.location}
          onChangeText={(text) => handleChange('location', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Experience"
          value={formData.experience}
          onChangeText={(text) => handleChange('experience', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Employment Type"
          value={formData.employmentType}
          onChangeText={(text) => handleChange('employmentType', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Posted Date"
          value={formData.postedDate}
          onChangeText={(text) => handleChange('postedDate', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Salary"
          value={formData.salary}
          onChangeText={(text) => handleChange('salary', text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Generate Job List</Text>
        </TouchableOpacity>
        {/* Button to navigate to OtherPage */}
        <TouchableOpacity style={styles.button} onPress={goToOtherPage}>
          <Text style={styles.buttonText}>Go to JobList Page</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  formContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default JobListGenerator;
