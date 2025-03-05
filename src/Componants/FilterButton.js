import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

const FilterButton = ({ label, onPress, selected }) => (
  <TouchableOpacity
    style={[styles.filterButton, selected && styles.selectedFilterButton]}
    onPress={onPress}
  >
    <Text style={[styles.filterButtonText, selected && styles.selectedText]}>
      {label}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  filterButton: {
    justifyContent: "center",
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 10,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: "#2a595b",
    maxHeight: 40,
  },
  selectedFilterButton: {
    justifyContent: "center",
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginHorizontal: 5,
    maxHeight: 40,
    backgroundColor: "#2a595b",
  },
  filterButtonText: {
    color: "#2a595b",
    fontSize: 16,
    fontWeight: "bold",
  },
  selectedText: {
    justifyContent: "center",
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginHorizontal: 5,
    maxHeight: 40,
    color: "white",
  },
});

export default FilterButton;
