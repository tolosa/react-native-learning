import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class ReactNativeLearning extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello world!</Text>
        <Bananas />
      </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
