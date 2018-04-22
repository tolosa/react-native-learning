import React, { Component } from 'react';
import { Text, Button, View } from 'react-native';

export default class Greeting extends Component {
  static navigationOptions = ({ navigation }) => {
    return { title: `Greeting demo for ${navigation.state.params.name}` }
  }
  render() {
    return (
      <View>
        <Text>Hello {this.props.navigation.state.params.name}!</Text>
        <Button
          title='Change name'
          onPress={() => this.props.navigation.setParams({name: 'Juan'})}
        />
      </View>
    )
  }
}
