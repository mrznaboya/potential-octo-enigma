import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.boxOneStyle} />
      <View style={styles.boxTwoStyle} />
      <View style={styles.boxThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    height: 200,
    borderWidth: 3,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  boxOneStyle: {
    height: 50,
    width: 50,
    backgroundColor: "red",
    alignSelf: "flex-start",
  },
  boxTwoStyle: {
    height: 50,
    width: 50,
    backgroundColor: "green",
    top: 50,
  },
  boxThreeStyle: {
    height: 50,
    width: 50,
    backgroundColor: "purple",
    alignSelf: "flex-right",
  },
});

export default BoxScreen;
