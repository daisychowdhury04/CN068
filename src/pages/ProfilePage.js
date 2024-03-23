import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import Modal from 'react-native-modal';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from expo-icons

const ProfilePage = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('John Doe');
  const [profession, setProfession] = useState('Software Developer');
  const [bio, setBio] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleSubmit = () => {
    // Handle submission of edited profile details
    Alert.alert('Profile Updated', 'Profile details updated successfully!');
    toggleModal(); // Close the modal after submission
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleModal}>
        <Image
          source={require('./assets/default_profile_picture.png')} 
          style={styles.profilePicture}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleModal} style={styles.editButton}>
        <Ionicons name="pencil" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.profileBox}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Name</Text>
          <Text style={styles.sectionContent}>{name}</Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Role</Text>
          <Text style={styles.sectionContent}>{profession}</Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Bio</Text>
          <Text style={styles.sectionContent}>{bio}</Text>
        </View>
      </View>
      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Edit Profile Details</Text>
  
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
  
          <TextInput
            style={styles.input}
            placeholder="Profession"
            value={profession}
            onChangeText={setProfession}
          />
   
          <TextInput
            style={[styles.input, styles.bioInput]}
            placeholder="Bio"
            multiline
            numberOfLines={4}
            value={bio}
            onChangeText={setBio}
          />
     
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  editButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileBox: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    width: '100%',
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  sectionContent: {
    fontSize: 16,
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#ccc', // Light gray color
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  bioInput: {
    height: 80,
    textAlignVertical: 'top', // Align text to top
  },
  submitButton: {
    backgroundColor: '#007bff', // Blue color
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff', // White color
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ProfilePage;
