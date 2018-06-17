import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class Item extends Component {
  render(){
    return (
      <View style={styles.item}>
        <View style={styles.leftSection}>
          <Text style={styles.itemName}>{this.props.name}</Text>
          <Text>{this.props.price}€</Text>
        </View>

        <View style={styles.rightSection}>
          <Image
            source={{ uri: this.props.image }}
            style={styles.itemImage}/>
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  item: {
    flex:1,
    height:70,
    borderBottomWidth: 1,
    borderColor: '#dadada',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftSection: {
    flex: 1,
    left:30,
    justifyContent: 'flex-start',
  },
  rightSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    right:10
  },
  itemName: {
    fontWeight: 'bold',
    fontSize:20
  },
  itemImage: {
    width:50,
    height:50,
  }
});
