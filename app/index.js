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

// Home screen
// TODO: move to separate file
const navListData = [
  {
    key: 'Button Demo',
    description: 'Simple button and alert',
    screen: ButtonDemo,
  },
  {
    key: 'Banana Demo',
    description: 'A SFW banana picture',
    screen: Banana,
  },
  {
    key: 'Blink Demo',
    description: 'Blinking text',
    screen: Blink,
  },
  {
    key: 'Pizza Translator Demo',
    description: 'Translate text to pizza language',
    screen: PizzaTranslator,
  },
  {
    key: 'Greetings Demo',
    description: 'Greets you',
    screen: Greeting,
  },
]

class HomeScreen extends Component {
  renderItem = ({item}) => {
    const screen = item.key
    const description = item.description
    const {navigation} = this.props
    return (
      <ListItem
        title={screen}
        subtitle={description}
        onPress={() => navigation.navigate(screen)}
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

// Stack navigation
const navigatorData = {
  Home: {
    screen: HomeScreen,
  }
}

for(let val of navListData) {
  const {key, screen} = val
  navigatorData[key] = { screen: screen }
}

const RootStack = StackNavigator(navigatorData, { initialRouteName: 'Home'})

export default class App extends Component {
  render() {
    return <RootStack />
  }
}

// Styles
// TODO: learn how to manage styles across different controls
// TODO: move to separate file
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
