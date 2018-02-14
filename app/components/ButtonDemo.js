import React, { Component } from 'react';
import { Button, Alert } from 'react-native';

export default class ButtonDemo extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!');
  }
  render() {
    return (
      <Button
        onPress={this._onPressButton}
        title='Press Me' />
    );
  };
}
