// FAQScreen.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Modal } from 'react-native';

const FAQScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFAQ, setSelectedFAQ] = useState(null);

  // Define your FAQ data (question and answer)
  const faqs = [
   {
      question: 'How do I reset my password if I"ve forgotten it?',
      answer: 'Click "Forgot Password," enter your email, follow the link in the email to reset.',
    },
    {
      question: 'What should I do if I encounter an error message while using the software?',
      answer: 'Note down the error, refresh or restart, check documentation, contact support if needed.',
    },
    {
      question: 'How can I update my account information or preferences?',
      answer: 'Log in, navigate to settings, update profile/password/preferences, save changes.',
    },
    // Add more FAQ items as needed
  ];

  const openFAQDialog = (faq) => {
    setSelectedFAQ(faq);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Frequently Asked Questions</Text>
      {faqs.map((faq, index) => (
        <TouchableOpacity
          key={index}
          style={styles.faqItem}
          onPress={() => openFAQDialog(faq)}
        >
          <Text style={styles.faqQuestion}>{faq.question}</Text>
        </TouchableOpacity>
      ))}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalQuestion}>{selectedFAQ?.question}</Text>
            <Text style={styles.modalAnswer}>{selectedFAQ?.answer}</Text>
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  faqItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  faqQuestion: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  modalQuestion: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalAnswer: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default FAQScreen;
