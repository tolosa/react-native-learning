import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Greeting extends Component {
  static navigationOptions = {
    title: 'Greeting demo',
  }
  render() {
    return (
      <Text>Hello {this.props.navigation.state.params.name}!</Text>
    )
  }
}
