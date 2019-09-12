/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert, Animated, TouchableWithoutFeedback } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
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

  constructor(props) {
    super(props);
    this.handlePressIn = this.handlePressIn.bind(this);
    this.handlePressOut = this.handlePressOut.bind(this);
    this.animatedValue = new Animated.Value(1);
  }

  // componentWillMount() {
  //   this.animatedValue = new Animated.Value(1);
  // }

 alertFun(){
    Alert.alert(
      'oh you click me !!',
      '',
      [
        {text: 'Nah', onPress: () => console.log('Ask me later pressed')},
        {
          text: 'sorry',
          onPress: () => console.log('Ask me later pressed'),
          style: 'cancel',
        },
      ],
      { cancelable: true });
  }

  handlePressIn() {
    Animated.spring(this.animatedValue, {
      toValue: 0.5,
      // 摩擦力，默認為7.
      // 張力，默認40。
    }).start();
    setTimeout(() => { this.alertFun(); }, 500);
  }

  handlePressOut() {
    Animated.spring(this.animatedValue, {
      toValue: 1,
      friction: 3,
      tension: 40,
    }).start();
  }

  render() {
    const animatedStyle = {
      transform: [{ scale: this.animatedValue}],
    };

    return (
      <View style={styles.container}>
        <Text>MessagePage</Text>
        <TouchableWithoutFeedback onPressIn={this.handlePressIn} onPressOut={this.handlePressOut}>
          <Animated.View style={[styles.button, animatedStyle]}>
            <Text style={styles.alink}>click me!!!</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
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
  button:{
    backgroundColor: '#fc0',
    width: 220,
    height: 70,
    borderRadius: 8,
    justifyContent:'center',
    alignItems:'center',
    marginTop: 10,
  },
  alink: {
    color: '#fff',
    fontSize: 40,
  },
});

