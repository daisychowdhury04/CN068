import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Modal, TouchableOpacity } from 'react-native';

const GigScreen = ({ navigation }) => {
  const [jobTitle, setJobTitle] = useState('');
  const [skills, setSkills] = useState('');
  const [roleType, setRoleType] = useState('');
  const [minSalary, setMinSalary] = useState('');
  const [maxSalary, setMaxSalary] = useState('');
  const [location, setLocation] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [isRoleTypeModalVisible, setIsRoleTypeModalVisible] = useState(false);
  const [isLocationTypeModalVisible, setIsLocationTypeModalVisible] = useState(false);

  const handleSave = () => {
    // Save job details to state or context
    // You can also add logic to save the data to a backend server or local storage
    navigation.navigate('JobDetailsPage');
  };

  const renderRoleTypeModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={isRoleTypeModalVisible}
        onRequestClose={() => setIsRoleTypeModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={() => { setRoleType('Intern'); setIsRoleTypeModalVisible(false); }}>
              <Text style={styles.modalOption}>Intern</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setRoleType('Freelancer'); setIsRoleTypeModalVisible(false); }}>
              <Text style={styles.modalOption}>Freelancer</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setRoleType('Co-Founder'); setIsRoleTypeModalVisible(false); }}>
              <Text style={styles.modalOption}>Co-Founder</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setRoleType('Full-time'); setIsRoleTypeModalVisible(false); }}>
              <Text style={styles.modalOption}>Full-time</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };

  const renderLocationTypeModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={isLocationTypeModalVisible}
        onRequestClose={() => setIsLocationTypeModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={() => { setLocation('Remote'); setIsLocationTypeModalVisible(false); }}>
              <Text style={styles.modalOption}>Remote</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setLocation('On-site'); setIsLocationTypeModalVisible(false); }}>
              <Text style={styles.modalOption}>On-site</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };
return (
    <ScrollView contentContainerStyle={styles.container}>
      {renderRoleTypeModal()}
      {renderLocationTypeModal()}
      <Text style={styles.title}>Job Details</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Job Title</Text>
        <TextInput
          style={[styles.input, styles.boldText]}
          value={jobTitle}
          onChangeText={setJobTitle}
          placeholder="Enter job title"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Skills</Text>
        <TextInput
          style={[styles.input, styles.boldText]}
          value={skills}
          onChangeText={setSkills}
          placeholder="Enter required skills"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Role Type</Text>
        <TouchableOpacity onPress={() => setIsRoleTypeModalVisible(true)}>
          <TextInput
            style={[styles.input, styles.boldText]}
            value={roleType}
            placeholder="Select role type"
            editable={false}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Salary Range</Text>
        <View style={styles.salaryContainer}>
          <TextInput
            style={[styles.input, styles.boldText, styles.salaryInput]}
            value={minSalary}
            onChangeText={setMinSalary}
            placeholder="Min"
            keyboardType="numeric"
          />
          <Text style={styles.salarySeparator}>-</Text>
          <TextInput
            style={[styles.input, styles.boldText, styles.salaryInput]}
            value={maxSalary}
            onChangeText={setMaxSalary}
            placeholder="Max"
            keyboardType="numeric"
          />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Location</Text>
        <TouchableOpacity onPress={() => setIsLocationTypeModalVisible(true)}>
          <TextInput
            style={[styles.input, styles.boldText]}
            value={location}
            placeholder="Select location type"
            editable={false}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Job Description</Text>
        <TextInput
          style={[styles.input, styles.boldText, styles.descriptionInput]}
          multiline
          value={jobDescription}
          onChangeText={setJobDescription}
          placeholder="Enter job description"
        />
      </View>
      <Button title="Save" onPress={handleSave} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: '#f0f0f0', // Background color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333', // Text color
  },
  inputContainer: {
    marginBottom: 20, // Increased margin for better separation
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: '#666', // Text color
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 10,
    backgroundColor: '#fff', // Input background color
  },
  salaryContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Align salary inputs vertically centered
  },
  salaryInput: {
    flex: 1,
    marginRight: 10,
  },
  salarySeparator: {
    fontSize: 18,
    alignSelf: 'center',
    color: '#666', // Text color
  },
  descriptionInput: {
    height: 100,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#fff', // Input background color
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff', // Modal content background color
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    width: '80%', // Adjusted width for better visibility
  },
  modalOption: {
    fontSize: 18,
    paddingVertical: 10,
    paddingHorizontal: 20,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    color: '#333', // Text color
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default GigScreen;
