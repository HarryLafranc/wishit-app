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
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './components/HomeScreen';
import ItemScreen from './components/ItemScreen';

const RootStack = createStackNavigator({
    Home: HomeScreen,
    Item: ItemScreen,
  });

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

// export default class App extends Component {
//   componentDidMount () {
//     StatusBar.setHidden(false, 'slide');
//     StatusBar.setBarStyle('light-content', true);
//   }
//
//   render() {
//     return (
//       <NavigatorIOS
//         initialRoute={{
//           component: Home,
//           title: 'WishIt',
//           translucent: false,
//           titleTextColor: "#FFFFFF",
//           barTintColor: '#96331d'
//         }}
//         style={{flex: 1}}
//       />
//     );
//   }
// }

// Some workaround
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
