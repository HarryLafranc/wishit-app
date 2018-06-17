/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  NavigatorIOS
} from 'react-native';

import Item from './Item';

export default class App extends Component {
  componentDidMount () {
    StatusBar.setHidden(false, 'slide');
    StatusBar.setBarStyle('light-content', true);
  }

  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: Home,
          title: 'WishIt',
          translucent: false,
          titleTextColor: "#FFFFFF",
          barTintColor: '#96331d'
        }}
        style={{flex: 1}}
      />
    );
  }
}

export class Home extends Component {

  render () {
    return (
        <View>
          <FlatList
          style={styles.list}
          data={[
            {key: "1", name: 'Apple TV', price: 219, image: 'https://store.storeimages.cdn-apple.com/4667/as-images.apple.com/is/image/AppleInc/aos/published/images/a/pp/apple/tv/apple-tv-hero-select-201709?wid=1076&amp;amp;hei=1070&amp;amp;fmt=jpeg&amp;amp;qlt=80&amp;amp;op_usm=0.5,0.5&amp;amp;.v=1504814112595'},
            {key: "2", name: 'HomePod', price: 349, image: 'https://store.storeimages.cdn-apple.com/4667/as-images.apple.com/is/image/AppleInc/aos/published/images/h/om/homepod/hero/homepod-hero-select-201801?wid=1868&amp;hei=882&amp;fmt=png-alpha&amp;qlt=80&amp;.v=1516219268727'},
            {key: "3", name: 'Magic Keyboard', price: 169, image: 'https://store.storeimages.cdn-apple.com/4667/as-images.apple.com/is/image/AppleInc/aos/published/images/M/RM/MRMH2F/MRMH2F'},
            {key: "4", name: 'Magic Mouse', price: 119, image: 'https://store.storeimages.cdn-apple.com/4667/as-images.apple.com/is/image/AppleInc/aos/published/images/M/RM/MRME2/MRME2?wid=220&hei=156&fmt=jpeg&qlt=95&op_usm=0.5,1.5&.v=1520531651846'},
            {key: "5", name: 'Tesla Model 3', price: 54999, image: 'https://amp.businessinsider.com/images/5a861bcdd0307263058b4662-750-500.jpg'},
            {key: "6", name: 'Aspirateur robot', price: 349, image: 'https://www.bestofrobots.fr/media/catalog/product/cache/1/image/500x/9df78eab33525d08d6e5fb8d27136e95/r/o/robot-aspirateur-irobot-roomba-615.jpg'},
            {key: "7", name: 'iPhone XI', price: 1599, image: 'https://cnet4.cbsistatic.com/img/KN3fTk0cA2Cyc0Qzp7wgeB-W44U=/830x467/2017/10/31/81562c51-c57b-40f6-9dff-5aebf57e8f46/iphone-x-12.jpg'},
            {key: "8", name: 'iMac Pro', price: 8999, image: 'https://store.storeimages.cdn-apple.com/4667/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ma/imacpro/27/imacpro-27-retina-config-hero?wid=1200&hei=630&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1512501389796'},
            {key: "9", name: 'Apple TV', price: 219, image: 'https://store.storeimages.cdn-apple.com/4667/as-images.apple.com/is/image/AppleInc/aos/published/images/a/pp/apple/tv/apple-tv-hero-select-201709?wid=1076&amp;amp;hei=1070&amp;amp;fmt=jpeg&amp;amp;qlt=80&amp;amp;op_usm=0.5,0.5&amp;amp;.v=1504814112595'},
            {key: "10", name: 'HomePod', price: 349, image: 'https://store.storeimages.cdn-apple.com/4667/as-images.apple.com/is/image/AppleInc/aos/published/images/h/om/homepod/hero/homepod-hero-select-201801?wid=1868&amp;hei=882&amp;fmt=png-alpha&amp;qlt=80&amp;.v=1516219268727'},
            {key: "11", name: 'Magic Keyboard', price: 169, image: 'https://store.storeimages.cdn-apple.com/4667/as-images.apple.com/is/image/AppleInc/aos/published/images/M/RM/MRMH2F/MRMH2F'},
            {key: "12", name: 'Magic Mouse', price: 119, image: 'https://store.storeimages.cdn-apple.com/4667/as-images.apple.com/is/image/AppleInc/aos/published/images/M/RM/MRME2/MRME2?wid=220&hei=156&fmt=jpeg&qlt=95&op_usm=0.5,1.5&.v=1520531651846'},
            {key: "13", name: 'Tesla Model 3', price: 54999, image: 'https://amp.businessinsider.com/images/5a861bcdd0307263058b4662-750-500.jpg'},
            {key: "14", name: 'Aspirateur robot', price: 349, image: 'https://www.bestofrobots.fr/media/catalog/product/cache/1/image/500x/9df78eab33525d08d6e5fb8d27136e95/r/o/robot-aspirateur-irobot-roomba-615.jpg'},
            {key: "15", name: 'iPhone XI', price: 1599, image: 'https://cnet4.cbsistatic.com/img/KN3fTk0cA2Cyc0Qzp7wgeB-W44U=/830x467/2017/10/31/81562c51-c57b-40f6-9dff-5aebf57e8f46/iphone-x-12.jpg'},
            {key: "16", name: 'iMac Pro', price: 8999, image: 'https://store.storeimages.cdn-apple.com/4667/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ma/imacpro/27/imacpro-27-retina-config-hero?wid=1200&hei=630&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1512501389796'},
          ]}
          renderItem={({item}) => <Item name={item.name} price={item.price} image={item.image} />}
        />
        </View>
    );
  }
}

var styles = StyleSheet.create({
  list: {
    marginBottom: 64
  }
});
