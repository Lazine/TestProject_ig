/* eslint-disable prettier/prettier */
import React, {Fragment} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MainScreen from './src/Components/MainScreen';

export default class App extends React.Component {
  render() {
    return (
      <MainScreen />
    );
  }

}

// const AppNavigator = StackNavigator({
//   Main: {
//     screen: MainScreen
//   },
// });

// const AppContainer = createAppContainer(AppNavigator);

// export default AppContainer;

