import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class ReactNativeLearning extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello world!</Text>
        <Greeting name='Leonardo' />
        <Bananas />
        <Blink text="I'm blinking!" />
      </View>
    );
  }
}

// TODO: learn how to define components into separate files
class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

class Bananas extends Component {
  render() {
    let image = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={image} style={{width: 193, height: 110}}/>
    );
  }
}

class Blink extends Component {
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

// TODO: find a way to show in main page without breaking layout
class FlexBasics extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
    )
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
  blinking: {
    color: 'red',
    fontWeight: 'bold',
  }
});
