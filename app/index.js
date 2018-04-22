import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';

// TODO: find a way to load all files in folder
import Greeting from './components/Greeting';
import Banana from './components/Banana';
import Blink from './components/Blink';
import ButtonDemo from './components/ButtonDemo';
import PizzaTranslator from './components/PizzaTranslator';
import FlexBasics from './components/FlexBasics';

// TODO: no longer used, remove after adding all pages in navigator
class ReactNativeLearning extends Component {
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

class HomeScreen extends Component {
  render() {
    return (
      // TODO: use somelist control instead of buttons
      <View style={styles.container}>
        <Text>Go to demo:</Text>
        <Button
          title='Banana'
          onPress={() => this.props.navigation.navigate('Banana')}
        />
        <Button
          title='Greeting'
          onPress={() => this.props.navigation.navigate('Greeting', { name: 'Leo' })}
        />
      </View>
    )
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Banana: {
      screen: Banana,
    },
    Greeting: {
      screen: Greeting,
    }
  },
  {
    initialRouteName: 'Home',
  }
)

export default class App extends Component {
  render() {
    return <RootStack />
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
