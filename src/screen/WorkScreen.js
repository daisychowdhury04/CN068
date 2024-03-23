import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import jobsData from './jobsData.json';

const WorkScreen = () => {
  const [sortedJobs, setSortedJobs] = useState(jobsData);
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  const sortJobs = (field) => {
    let sorted = [...sortedJobs];
    if (sortBy === field && sortOrder === 'ASC') {
      sorted.reverse();
      setSortOrder('DESC');
    } else {
      sorted.sort((a, b) => (a[field] < b[field] ? -1 : 1));
      setSortOrder('ASC');
    }
    setSortBy(field);
    setSortedJobs(sorted);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => sortJobs('title')} style={styles.headerItem}>
          <Text style={styles.headerText}>Title</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => sortJobs('type')} style={styles.headerItem}>
          <Text style={styles.headerText}>Type</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => sortJobs('salary')} style={styles.headerItem}>
          <Text style={styles.headerText}>Salary</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => sortJobs('location')} style={styles.headerItem}>
          <Text style={styles.headerText}>Location</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={sortedJobs}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text>Type: {item.type}</Text>
            <Text>Salary: {item.salary}</Text>
            <Text>Location: {item.location}</Text>
            <View style={styles.separator} />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  headerItem: {
    flex: 1,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  itemContainer: {
    padding: 10,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
});

export default WorkScreen;
