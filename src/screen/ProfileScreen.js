import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const [userData, setUserData] = useState({
    name: 'ramgopal',
    email: 'ramgopal@example.com',
    password: '1234',
  });

  const [editingField, setEditingField] = useState(null);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [tempName, setTempName] = useState('');
  const [tempEmail, setTempEmail] = useState('');
  const navigation = useNavigation();
  const [selectedProfile, setSelectedProfile] = useState('male');
  const [showOptionsModal, setShowOptionsModal] = useState(false);

  const toggleGender = () => {
    setShowOptionsModal(true);
  };

  const selectMale = () => {
    setSelectedProfile('male');
  };

  const selectFemale = () => {
    setSelectedProfile('female');
  };

  const selectFireman = () => {
    setSelectedProfile('fireman');
  };

  const selectMonster = () => {
    setSelectedProfile('monster');
  };

  const selectDeveloper = () => {
    setSelectedProfile('developer');
  };

  const [loaded] = useFonts({
    UrbanistRegular: require('../fonts/Urbanist-Bold.ttf'),
    // Import other font weights and styles if needed
  });
  const handleLogout = () => {
    navigation.navigate('Login');
  };

  const handleSettings = () => {
    console.log('setting');
  };

  const handleEditIconPress = (field) => {
    setEditingField(field);
    setOldPassword('');
    setNewPassword('');
    setConfirmPassword('');
    if (field === 'name') {
      setTempName(userData.name);
    } else if (field === 'email') {
      setTempEmail(userData.email);
    }
  };

  const handleSaveEdit = () => {
    if (editingField === 'password' && newPassword !== confirmPassword) {
      // Passwords don't match, handle accordingly (e.g., show error message)
      return;
    }

    if (editingField === 'password' && oldPassword !== userData.password) {
      // Old password is incorrect, handle accordingly (e.g., show error message)
      return;
    }

    if (editingField === 'password') {
      // Update password
      setUserData({ ...userData, password: newPassword });
    } else if (editingField === 'name') {
      // Update name
      setUserData({ ...userData, name: tempName });
    } else if (editingField === 'email') {
      // Update email
      setUserData({ ...userData, email: tempEmail });
    }

    setEditingField(null); // Close the modal after saving
  };

  const renderPasswordWithAsterisks = (password) => {
    return '*'.repeat(password.length);
  };

  return (
    <View style={styles.container}>
      {/* Profile Picture */}
      <TouchableOpacity style={styles.profileContainer} onPress={toggleGender}>
        <Image
          source={
            selectedProfile === 'male'
              ? require('../images/MaleUserProfile.gif')
              : selectedProfile === 'female'
              ? require('../images/FemaleUserProfile.gif')
              : selectedProfile === 'fireman'
              ? require('../images/FiremanUserProfile.gif')
              : selectedProfile === 'monster'
              ? require('../images/MonsterUserProfile.gif')
              : require('../images/DeveloperUserProfile.gif')
          }
          style={styles.profilePicture}
        />

        <Icon name="edit" size={24} color="black" style={styles.editIcon} />
      </TouchableOpacity>
      <View style={styles.fieldContainer}>
        <View style={styles.field}>
          <Text style={styles.label}>Name:</Text>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{userData.name}</Text>
            <TouchableOpacity onPress={() => handleEditIconPress('name')}>
              <Icon name="edit" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.fieldContainer}>
        <View style={styles.field}>
          <Text style={styles.label}>Email Address:</Text>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{userData.email}</Text>
            <TouchableOpacity onPress={() => handleEditIconPress('email')}>
              <Icon name="edit" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.fieldContainer}>
        <View style={styles.field}>
          <Text style={styles.label}>Password:</Text>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              {renderPasswordWithAsterisks(userData.password)}
            </Text>
            <TouchableOpacity onPress={() => handleEditIconPress('password')}>
              <Icon name="edit" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Logout Button */}
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
        <Icon name="arrow-right" size={24} color="black" />
      </TouchableOpacity>

      {/* Setting Button */}
      <TouchableOpacity onPress={handleSettings} style={styles.settingButton}>
        <Text style={styles.settingText}>Settings</Text>
        <Icon name="arrow-right" size={24} color="black" />
      </TouchableOpacity>

      <Modal
        visible={showOptionsModal}
        transparent={true}
        animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.gridContainer}>
              <TouchableOpacity onPress={selectMale}>
                <Image
                  source={require('../images/MaleUserProfile.gif')}
                  style={styles.gridImage}
                />
              </TouchableOpacity>
              {/* Add other profile picture options similarly */}
              <TouchableOpacity onPress={selectFemale}>
                <Image
                  source={require('../images/FemaleUserProfile.gif')}
                  style={styles.gridImage}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={selectFireman}>
                <Image
                  source={require('../images/FiremanUserProfile.gif')}
                  style={styles.gridImage}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={selectMonster}>
                <Image
                  source={require('../images/MonsterUserProfile.gif')}
                  style={styles.gridImage}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={selectDeveloper}>
                <Image
                  source={require('../images/DeveloperUserProfile.gif')}
                  style={styles.gridImage}
                />
              </TouchableOpacity>
              {/* Add more profile picture options if needed */}
            </View>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowOptionsModal(false)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        visible={editingField !== null}
        transparent={true}
        animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {editingField === 'password' ? (
              <>
                <TextInput
                  style={styles.input}
                  placeholder="Old Password"
                  value={oldPassword}
                  onChangeText={setOldPassword}
                  secureTextEntry={true}
                />
                <TextInput
                  style={styles.input}
                  placeholder="New Password"
                  value={newPassword}
                  onChangeText={setNewPassword}
                  secureTextEntry={true}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry={true}
                />
              </>
            ) : (
              <>
                {editingField === 'name' && (
                  <TextInput
                    style={styles.input}
                    placeholder="Name"
                    value={tempName}
                    onChangeText={setTempName}
                  />
                )}
                {editingField === 'email' && (
                  <TextInput
                    style={styles.input}
                    placeholder="Email Address"
                    value={tempEmail}
                    onChangeText={setTempEmail}
                  />
                )}
              </>
            )}
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={handleSaveEdit}
                style={styles.saveButton}>
                <Text style={styles.savebuttonText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setEditingField(null)}
                style={styles.cancelButton}>
                <Text style={styles.cancelbuttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
  },
  fieldContainer: {
    marginVertical: 10,
  },
  field: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 18,
    // fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'UrbanistRegular',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '90%', // Adjust width as needed
    borderWidth: 1,
    borderColor: 'black',
  },
  input: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  cancelButton: {
    flex: 1, // Take up half of the container width
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginRight: 5, // Add some margin between buttons
    marginLeft: 5,
  },
  saveButton: {
    flex: 1, // Take up half of the container width
    borderRadius: 5,
    backgroundColor: '#007bff',
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginLeft: 5, // Add some margin between buttons
    marginRight: 5,
  },
  savebuttonText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'UrbanistRegular',
  },
    cancelbuttonText: {
    color: 'black',
    textAlign: 'center',
    fontFamily: 'UrbanistRegular',
  },


  logoutButton: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  settingButton: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  settingText: {
    color: 'black',
    textAlign: 'center',
    fontFamily: 'UrbanistRegular',
    fontSize: 15,
  },

  logoutText: {
    color: 'red', // Example color
    fontSize: 16,
    fontFamily: 'UrbanistRegular',
  },
  profileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 4,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20, // Add padding to the grid
    backgroundColor: '#f2f2f2', // Background color of the grid
  },

  gridImage: {
    width: 100,
    height: 100,
    margin: 10, // Adjust spacing between images
  },
  closeButton: {
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 10, // Increase the vertical padding
    paddingHorizontal: 20, // Increase the horizontal padding
    borderWidth: 1,
    borderColor: 'black',
  },
  closeButtonText: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'UrbanistRegular',
  },
});

export default ProfileScreen;
