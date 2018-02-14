import React, { Component } from 'react';
import { Image } from 'react-native';

export default class Banana extends Component {
  render() {
    let image = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={image} style={{width: 193, height: 110}}/>
    );
  }
}
