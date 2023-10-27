import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  // Don't do this!
  //   let counter = 0;
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          // Dont' do this!
          //   counter++;
          // counter = counter + 1;
          setCounter(counter + 1);
          //   console.log(counter);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          // Don't do this!
          //   counter--;
          // counter = counter - 1;
          setCounter(counter - 1);
          //   console.log(counter);
        }}
      />
      <Text>Current Count: {counter} </Text>
    </View>
  );
};

const styles = StyleSheet.create();

export default CounterScreen;
