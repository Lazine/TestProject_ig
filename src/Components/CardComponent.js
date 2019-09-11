/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';

export default class CardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // heartPressStatus: true,
      commitPressStatus: true,
      sharePressStatus: true,
      liked: true,
    };
  }

  lastTap = null;
  handleDoubleTap = () => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;
    if (this.lastTap && now - this.lastTap < DOUBLE_PRESS_DELAY) {
      this.toggleLike();
    } else {
      this.lastTap = now;
    }
  };

  toggleLike = () => this.setState(state => ({ liked: !state.liked }));

  render() {
    // const images = {
    //   '1': require('../assets/feed_images/4.jpg'),
    //   '2': require('../assets/feed_images/5.jpg'),
    //   '3': require('../assets/feed_images/8.jpg'),
    //   '4': require('../assets/feed_images/7.jpg'),
    // };

    const hashtagText = this.props.tags;
    const hashtags = hashtagText.map((item, i) => <Text key={i}>#{item}</Text>);
    // .reduce((acc, cur) => cur && acc !== null ? ['#',acc,'#',cur ] : [''] )
    // (accumulator,currentValue)

    return (
      <Card transparent>
        <CardItem style={{ paddingLeft: 10, paddingVertical: 4, height: 50 }}>
          <Left>
            <Thumbnail small source={require('../assets/me.jpg')} />
            <Body>
              <Text>eatFood</Text>
              <Text note>Jan 15, 2018</Text>
            </Body>
          </Left>
        </CardItem>
        <TouchableWithoutFeedback onPress={this.handleDoubleTap}>
          {/* {(this.state.liked)? <Icon name="ios-heart" style ={}/> : null} */}
          <Image source={this.props.image} style={styles.photo} />
        </TouchableWithoutFeedback>
        <CardItem style={{ paddingLeft: 10, height: 48 }}>
          {/* <Left> */}
          <TouchableOpacity style={styles.button} onPress={this.toggleLike}>
            <Icon
              name="ios-heart"
              style={this.state.liked ? styles.icon : styles.iconActive}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              this.setState({
                commitPressStatus: !this.state.commitPressStatus,
              })
            }
          >
            <Icon
              name="ios-text"
              style={
                this.state.commitPressStatus ? styles.icon : styles.iconTouch
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              this.setState({ sharePressStatus: !this.state.sharePressStatus })
            }
          >
            <Icon
              name="ios-paper-plane"
              style={
                this.state.sharePressStatus ? styles.icon : styles.iconTouch
              }
            />
          </TouchableOpacity>
          {/* </Left> */}
        </CardItem>
        <CardItem style={{ paddingLeft: 10, paddingTop: 0, paddingBottom: 0 }}>
          <Text style={{ fontWeight: '900' }}>{this.props.likes} likes</Text>
        </CardItem>
        <CardItem style={{ paddingLeft: 10, paddingBottom: 8 }}>
          <Body>
            <Text style={{ marginBottom: 14 }}>
              <Text style={{ fontWeight: '900' }}>eatFood </Text>
              {this.props.article}
            </Text>
            <View>
              <Text style={{ color: '#2af' }}>{hashtags}</Text>
            </View>
            <Text style={{ fontWeight: '400', color: '#c4c4c4' }}>
              {this.props.date}
            </Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  photo: {
    height: 300,
    width: '100%',
    flex: 1,
  },
  button: {
    marginRight: 6,
  },
  icon: {
    color: '#c4c4c4',
    width: 24,
    fontSize: 24,
    // marginHorizontal: 4,
  },
  iconActive: {
    color: '#e68',
    width: 24,
    fontSize: 24,
  },
  iconTouch: {
    color: '#000',
    width: 24,
    fontSize: 24,
  },
});
