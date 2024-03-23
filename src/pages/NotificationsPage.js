 import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const NotificationsPage = () => {
  // Sample data for notifications
  const [notifications, setNotifications] = useState([
    { id: '1', title: 'New message', description: 'You have a new message from John Doe' },
    { id: '2', title: 'Reminder', description: 'Your appointment is tomorrow at 10:00 AM' },
    { id: '3', title: 'Meeting', description: 'Team meeting at 2:00 PM today' },
    // Add more sample notifications as needed
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.notificationContainer}>
            <Text style={styles.notificationTitle}>{item.title}</Text>
            <Text style={styles.notificationDescription}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  notificationContainer: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  notificationDescription: {
    fontSize: 16,
  },
});

export default NotificationsPage;