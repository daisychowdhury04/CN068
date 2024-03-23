import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import WorkListItem from "../components/WorkListItem";

const JobListPage = ({ route }) => {
  const [searchText, setSearchText] = useState("");
  const { jobList } = route.params;

  const handleSearch = () => {
    // Handle search logic
  };

  const handleFilter = () => {
    // Handle filter logic
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search jobs"
            value={searchText}
            onChangeText={setSearchText}
            onSubmitEditing={handleSearch}
          />
          <TouchableOpacity
            onPress={handleFilter}
            style={styles.filterIconContainer}
          >
            <Icon
              name="filter" // Icon name from FontAwesome
              size={30}
              color="#000"
              style={styles.filterIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.joblistcss}>
        {jobList.map((job, index) => (
          <View style={styles.workListItemContainer} key={index}>
            <WorkListItem {...job} />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  filterIconContainer: {
    backgroundColor: "lightgray",
    borderRadius: 20,
    padding: 5,
  },
  filterIcon: {
    marginLeft: 5,
  },
  joblistcss: {
    flexDirection: "column",
  },
  workListItemContainer: {
    marginBottom: 10, // Add margin between WorkListItem components
  },
});

export default JobListPage;
