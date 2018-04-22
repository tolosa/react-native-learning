import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Greeting extends Component {
  static navigationOptions = ({ navigation }) => {
    return { title: `Greeting demo for ${navigation.state.params.name}` }
  }
  render() {
    return (
      <Text>Hello {this.props.navigation.state.params.name}!</Text>
    )
  }
}
