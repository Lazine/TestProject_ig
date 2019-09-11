/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Container, Content, Icon, Thumbnail } from 'native-base';
import CardComponent from '../CardComponent';
import Stories from '../Stories';
import MessagePage from './messagePage';

export default class HomeTab extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-home" style={{ color: tintColor }} focused="true" />
    ),
    headerLeft: (
      <TouchableOpacity>
        <Icon name="ios-camera" style={{ paddingLeft: 15 }} />
      </TouchableOpacity>
    ),
    title: 'homeTabTitle',
    headerRight: (
      <TouchableOpacity onPress={() => navigation.push('MessagePage')}>
        <Icon name="ios-send" style={{ paddingRight: 15, color: '#000' }} />
      </TouchableOpacity>
    ),
  });

  // goToMessagePage = () => {
  //   this.props.navigate('MessagePage');
  // };

  render() {
    const { navigation } = this.props;
    const itemData = [
      {
        image: require('../../assets/feed_images/4.jpg'),
        likes: '101',
        date: '3 days ago',
        tags: ['food', 'happy', 'instafood'],
        article:
          'Ea do Lorem occaecat laborum do. Minim ullamco ipsum minim eiusmod dolore cupidatat magna exercitation amet proident qui. Est do irure magna dolor adipisicing do quis labore excepteur. Commodo veniam dolore cupidatat nulla consectetur do nostrud ea cupidatat ullamco labore. Consequat ullamco nulla ullamco minim.',
      },
      {
        image: require('../../assets/feed_images/5.jpg'),
        likes: '21',
        date: '4 days ago',
        tags: [],
        article:
          'Minim ullamco ipsum minim eiusmod dolore cupidatat magna exercitation amet proident qui. Est do irure magna dolor adipisicing do quis labore excepteur. Commodo veniam dolore cupidatat nulla consectetur do nostrud ea cupidatat ullamco labore. Consequat ullamco nulla ullamco minim.',
      },
      {
        image: require('../../assets/feed_images/8.jpg'),
        likes: '33',
        date: '7 days ago',
        tags: ['food', 'dessert', 'instafood'],
        article:
          'ipsum minim eiusmod dolore cupidatat magna exercitation amet proident qui. Est do irure magna dolor adipisicing do quis labore excepteur. Commodo veniam dolore cupidatat nulla consectetur do nostrud ea cupidatat ullamco labore. Consequat ullamco nulla ullamco minim.',
      },
      {
        image: require('../../assets/feed_images/7.jpg'),
        likes: '48',
        date: '2019/02/04',
        tags: ['food', 'pizza', 'foodie'],
        article:
          'Consequat ullamco nulla ullamco minim. Minim ullamco ipsum minim eiusmod dolore cupidatat magna exercitation amet proident qui. Est do irure magna dolor adipisicing do quis labore excepteur. Commodo veniam dolore cupidatat nulla consectetur do nostrud ea cupidatat ullamco labore. Consequat ullamco nulla ullamco minim.',
      },
      {
        image: require('../../assets/feed_images/6.jpg'),
        likes: '55',
        date: '2019/02/03',
        tags: ['food', 'foodie'],
        article:
          'ullamco nulla ullamco minim. Minim ullamco ipsum minim eiusmod dolore cupidatat magna exercitation amet proident qui. Est do irure magna dolor adipisicing do quis labore excepteur. Commodo veniam dolore cupidatat nulla consectetur do nostrud ea cupidatat ullamco labore. Consequat ullamco nulla ullamco minim.',
      },
    ];

    const storiesData = [
      {
        image: require('../../assets/StoriesHeaderThumbnails/1.jpg'),
        name: 'politecat',
      },
      {
        image: require('../../assets/StoriesHeaderThumbnails/2.jpg'),
        name: 'crycat3345678',
      },
      {
        image: require('../../assets/StoriesHeaderThumbnails/3.jpg'),
        name: 'doge',
      },
      {
        image: require('../../assets/StoriesHeaderThumbnails/4.jpg'),
        name: 'dooöoog',
      },
      {
        image: require('../../assets/StoriesHeaderThumbnails/5.jpg'),
        name: 'pōõh',
      },
      {
        image: require('../../assets/StoriesHeaderThumbnails/6.jpg'),
        name: 'dognicehat',
      },
      {
        image: require('../../assets/StoriesHeaderThumbnails/7.jpg'),
        name: 'chichen',
      },
      {
        image: require('../../assets/StoriesHeaderThumbnails/8.jpg'),
        name: 'isthisa??',
      },
      {
        image: require('../../assets/StoriesHeaderThumbnails/9.jpg'),
        name: 'cryFroggy',
      },
    ];

    // 1. 可以用for迴圈，要先建立空陣列再跑迴圈

    // let list = [];
    // for (let i = 0, len = itemData.length; i < len; i++ ){
    //   list.push(<CardComponent {...itemData[i]}/>);
    // }

    // 2. 或是用map讓他逐一跑過每個項目
    const list = itemData.map((item, i) => <CardComponent  key={i} {...itemData[i]}/>);

    const stories = storiesData.map((item, i) => <Stories  key={i} {...storiesData[i]}/>);

    return (
      <View style={styles.container}>
        <Content>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center', height: 80, borderBottomWidth: 0.4, borderBottomColor: '#c4c4c4' }} >
              {stories}
            </ScrollView>
          {list}

          {/* 把層級提高！！不需要列出全部項目只需要list */}
          {/* <CardComponent
            image={itemData[0].image}
            likes={itemData[0].likes}
            date={itemData[0].date}
            tags={itemData[0].tags}
            article={itemData[0].article}
          />
          <CardComponent
            image={itemData[1].image}
            likes={itemData[1].likes}
            date={itemData[1].date}
            tags={itemData[1].tags}
            article={itemData[1].article}
          />
          <CardComponent
            image={itemData[2].image}
            likes={itemData[2].likes}
            date={itemData[2].date}
            tags={itemData[2].tags}
            article={itemData[2].article}
          />
          <CardComponent
            image={itemData[3].image}
            likes={itemData[3].likes}
            date={itemData[3].date}
            tags={itemData[3].tags}
            article={itemData[3].article}
          /> */}

        </Content>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
