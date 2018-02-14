import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  _translate(text) { // TODO: learn conventions for private methods
    return text.split(' ').map((word) => word && '🍕').join(' ');
  }
  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder='Type here to translate!'
          onChangeText={(text) => this.setState({text})} />
        <Text style={{padding: 10, fontSize: 30}}>
          {this._translate(this.state.text)}
        </Text>
      </View>
    );
  }
}
