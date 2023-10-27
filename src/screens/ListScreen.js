import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    // { name: "Friend # 1", key: '1' }, Method 1
    { name: "Friend # 1", age: "18" },
    { name: "Friend # 2", age: "20" },
    { name: "Friend # 3", age: "21" },
    { name: "Friend # 4", age: "40" },
    { name: "Friend # 5", age: "30" },
    { name: "Friend # 6", age: "35" },
    { name: "Friend # 7", age: "18" },
    { name: "Friend # 8", age: "20" },
    { name: "Friend # 9", age: "17" },
  ];

  return (
    <FlatList
      // horizontal
      // showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name} // Method 2
      data={friends}
      // element === { item: { name: 'Friend #1' }, index: 0 }
      // item === { name: 'Friend #1' }
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age: {item.age}
          </Text>
        );
      }}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
