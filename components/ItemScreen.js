import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class ItemScreen extends Component {
  static navigationOptions =  ({ navigation }) => {
    return {
      title: navigation.getParam('name', 'Item'),
    };
  };

  render(){
    const { navigation } = this.props
    const name = navigation.getParam('name', null)
    const price = navigation.getParam('price', null)
    const image = navigation.getParam('image', null)

    return (
      <View>
        <Text>{name}</Text>
        <Text>{price}€</Text>

        <Image
          source={{ uri: image }} style={{height:300, width: 300}}/>
      </View>
    )
  }
}
