import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const SecondScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Second Screen</Text>
      <Text>Hi we love you guys</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SecondScreen;
