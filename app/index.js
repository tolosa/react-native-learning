import React, { Component } from 'react';
import { View, Text, FlatList, TouchableHighlight, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { ListItem } from 'react-native-elements'

import Greeting from './components/Greeting';
import Banana from './components/Banana';
import Blink from './components/Blink';
import ButtonDemo from './components/ButtonDemo';
import PizzaTranslator from './components/PizzaTranslator';
import FlexBasics from './components/FlexBasics';

// TODO: duplicated values, populate from StackNavigator data
const navListData = [
  {
    key: 'ButtonDemo',
    description: 'Simple button and alert demo',
  },
  {
    key: 'Banana',
    description: 'A SFW banana picture',
  },
  {
    key: 'Blink',
    description: 'Blinking text demo',
  },
  {
    key: 'PizzaTranslator',
    description: 'Translate text to pizza language',
  },
  {
    key: 'Greeting',
    description: 'Greets you',
  },
]

class HomeScreen extends Component {
  renderItem({item}) {
    const screen = item.key
    const description = item.description
    return (
      <ListItem
        title={screen}
        subtitle={description}
        onPress={() => this.props.navigation.navigate(screen)}
      />
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
    ButtonDemo: {
      screen: ButtonDemo,
    },
    Banana: {
      screen: Banana,
    },
    Blink: {
      screen: Blink,
    },
    PizzaTranslator: {
      screen: PizzaTranslator,
    },
    Greeting: {
      screen: Greeting,
    },
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
