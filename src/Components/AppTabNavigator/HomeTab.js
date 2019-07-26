import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Container, Content, Icon } from 'native-base';
import CardComponent from '../CardComponent';

export default class HomeTab extends Component {

  static navigationOptions = {
  	headerLeft: <Icon name="ios-camera" style={{ paddingLeft: 15 }} />,
  	title: 'homeTabTitle',
  	headerRight: <Icon name="ios-send" style={{ paddingRight: 15 }} />,
  	tabBarIcon: ({ tintColor }) => (
  		<Icon name="ios-home" style={{ color: tintColor }} />
  	),
  }

  // static navigationOptions = ({ navigation }) => {
  //   const params = navigation.state.params || {};

  //   return {
  //     title: "homeTabTitle",
  //     headerLeft: <Icon name="ios-camera" style={{ paddingLeft: 15 }} />,
  //     headerRight: (
  //       <Icon
  //         name="ios-send"
  //         style={{ paddingRight: 15 }}
  //         onPress={() => navigation.navigate( "MessagePage")}
  //       />
  //     ),
  //     tabBarIcon: ({ tintColor }) => (
  //       <Icon name="ios-home" style={{ color: tintColor }} />
  //     );
  //   };
  // };
  
  render() {

    const hashtagText = {
      "one":
        {
          name: ['food','happy','instafood']
        },
      "two": {
          name: []
      },
    };

    return (
      <View style={styles.container}>
        <Content>
          <CardComponent imageSource="1" likes="101" date="3 days ago" hashtag={hashtagText.one.name}/>
          <CardComponent imageSource="2" likes="21" date="5 days ago" hashtag={hashtagText.two.name}/>
          <CardComponent imageSource="3" likes="301" date="4 days ago" />
          <CardComponent imageSource="4" likes="41" date="2019/02/04" />
        </Content>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
