/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Text, View, StyleSheet, List, ListItem, FlatList } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Icon } from 'native-base';

class MessagePage extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: (
      <Icon
        name="ios-arrow-back"
        style={{ paddingLeft: 15 }}
        onPress={() => navigation.goBack()}
      />
    ),
    title: 'Message',
  });
  
  render() {
    return (
      <View style={styles.container}>
        <Text>MessagePage</Text>
      </View>
    );
  }
}
export default MessagePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

