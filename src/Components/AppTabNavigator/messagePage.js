/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert, Animated, TouchableWithoutFeedback } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Icon } from 'native-base';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

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
          onPress: () => this.setState( preState => ({ animatedValue: preState.animatedValue + 1 })),
          style: 'cancel',
        },
      ],
      { cancelable: true });
  }

  handlePressIn() {
    Animated.spring(this.animatedValue, {
      toValue: 0.5,
      friction: 1,// 摩擦力，默認為7.
      tension: 80,// 張力，默認40。
    }).start();
    setTimeout(() => { this.alertFun(); }, 1400);
  }

  render() {
    const animatedStyle = {
      transform: [{ scale: this.animatedValue}],
    };

    return (
      <View style={styles.container}>
        <Text>MessagePage</Text>
        <TouchableWithoutFeedback onPressIn={this.handlePressIn}>
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

