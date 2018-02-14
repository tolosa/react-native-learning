import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

export default class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 700);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : ' ';
    return (
      <Text style={styles.blinking}>{display}</Text>
    );
  }
}

const styles = StyleSheet.create({
  blinking: {
    color: 'red',
    fontWeight: 'bold',
  }
});
