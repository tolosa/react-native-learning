import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// TODO: find a way to load all files in folder
import Greeting from './components/Greeting';
import Banana from './components/Banana';
import Blink from './components/Blink';
import ButtonDemo from './components/ButtonDemo';
import PizzaTranslator from './components/PizzaTranslator';
import FlexBasics from './components/FlexBasics';

export default class ReactNativeLearning extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello world!</Text>
        <Greeting name='Leonardo' />
        <Banana />
        <Blink text="I'm blinking!" />
        <PizzaTranslator />
        <ButtonDemo />
      </View>
    );
  }
}

// TODO: learn how to manage styles across different controls
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
