import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
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

  static propTypes = {
    data: PropTypes.obj,
  };
  
  render() {

    const itemData = [
        {
          // image: require('../../assets/feed_images/4.jpg'),
          likes: "101",
          date: "3 days ago",
          tags: ['food','happy','instafood'],
          article: "Ea do Lorem occaecat laborum do. Minim ullamco ipsum minim eiusmod dolore cupidatat magna exercitation amet proident qui. Est do irure magna dolor adipisicing do quis labore excepteur. Commodo veniam dolore cupidatat nulla consectetur do nostrud ea cupidatat ullamco labore. Consequat ullamco nulla ullamco minim."
        },
        {
          // image: require('../../assets/feed_images/5.jpg'),
          likes: "21",
          date: "4 days ago",
          tags: [],
          article: "Minim ullamco ipsum minim eiusmod dolore cupidatat magna exercitation amet proident qui. Est do irure magna dolor adipisicing do quis labore excepteur. Commodo veniam dolore cupidatat nulla consectetur do nostrud ea cupidatat ullamco labore. Consequat ullamco nulla ullamco minim."
        },
        {
          // image: require('../../assets/feed_images/8.jpg'),
          likes: "33",
          date: "7 days ago",
          tags: ['food','dessert','instafood'],
          article: "ipsum minim eiusmod dolore cupidatat magna exercitation amet proident qui. Est do irure magna dolor adipisicing do quis labore excepteur. Commodo veniam dolore cupidatat nulla consectetur do nostrud ea cupidatat ullamco labore. Consequat ullamco nulla ullamco minim."
        },
        {
          // image: require('../../assets/feed_images/7.jpg'),
          likes: "48",
          date: "2019/02/04",
          tags: ['food','pizza','foodie'],
          article: "Consequat ullamco nulla ullamco minim. Minim ullamco ipsum minim eiusmod dolore cupidatat magna exercitation amet proident qui. Est do irure magna dolor adipisicing do quis labore excepteur. Commodo veniam dolore cupidatat nulla consectetur do nostrud ea cupidatat ullamco labore. Consequat ullamco nulla ullamco minim."
        },
        {
          image: require('../../assets/feed_images/6.jpg'),
          likes: "55",
          date: "2019/02/03",
          tags: ['food','foodie'],
          article: "ullamco nulla ullamco minim. Minim ullamco ipsum minim eiusmod dolore cupidatat magna exercitation amet proident qui. Est do irure magna dolor adipisicing do quis labore excepteur. Commodo veniam dolore cupidatat nulla consectetur do nostrud ea cupidatat ullamco labore. Consequat ullamco nulla ullamco minim."
        },
    ];

    return (
      <View style={styles.container}>
        <Content>
          <CardComponent image="1" likes={itemData[0].likes} date={itemData[0].date} hashtag={itemData[0].tags} article={itemData[0].article}/>
          <CardComponent image="2" likes={itemData[1].likes} date={itemData[1].date} hashtag={itemData[1].tags} article={itemData[1].article}/>
          <CardComponent image="3" likes={itemData[2].likes} date={itemData[2].date} hashtag={itemData[2].tags} article={itemData[2].article}/>
          <CardComponent image="4" likes={itemData[3].likes} date={itemData[3].date} hashtag={itemData[3].tags} article={itemData[3].article}/>
          <CardComponent data={itemData} />
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
