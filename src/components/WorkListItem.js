import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WorkListItem = ({ jobRole, company, location, experience, employmentType, postedDate, salary }) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainBox}>
        <View style={styles.detailsBox}>
          <View style={styles.textBox}>
            <Text style={styles.text}>{jobRole}</Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.text}>{company}</Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.text}>{location}</Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.text}>{experience}</Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.text}>{employmentType}</Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.text}>Posted {postedDate}</Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.text}>{salary}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainBox: {
    backgroundColor: 'blue',
    padding: 16,
    borderRadius: 8,
    width: 400,
    overflow: 'hidden',
  },
  detailsBox: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  textBox: {
    backgroundColor: 'rgba(0,0,8,6)',
    padding: 5,
    borderRadius: 99,
    marginBottom: 4,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});

export default WorkListItem;
