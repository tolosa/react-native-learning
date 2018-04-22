import React, { Component } from 'react';
import { View, Text, FlatList, TouchableHighlight, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';

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

// TODO: duplicated values, populate from StackNavigator data
const navListData = [{key: 'Banana'}, {key: 'Greeting'}]

class HomeScreen extends Component {
  renderItem = ({item}) => {
    // TODO: make elements look interactive
    return (
      <TouchableHighlight style={{padding: 7}}
        onPress={() => this.props.navigation.navigate(item.key)}>
        <Text>{item.key}</Text>
      </TouchableHighlight>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Go to demo:</Text>
        <FlatList
          data={navListData}
          renderItem={this.renderItem}
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
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
