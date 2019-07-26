import React, { Component } from 'react';
import { Platform } from 'react-native';
import HomeTab from './AppTabNavigator/HomeTab';
import SearchTab from './AppTabNavigator/SearchTab';
import AddMediaTab from './AppTabNavigator/AddMediaTab';
import LikesTab from './AppTabNavigator/LikesTab';
import ProfileTab from './AppTabNavigator/ProfileTab';
import MessagePage from './AppTabNavigator/messagePage';

import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

export class MainScreen extends Component {
  render() {
    return <AppNavigator />;
  }
}

const AppTabNavigator = createBottomTabNavigator(
  {
    HomeTab: {
      screen: HomeTab,
    },
    SearchTab: {
      screen: SearchTab,
    },
    AddMediaTab: {
      screen: AddMediaTab,
    },
    LikesTab: {
      screen: LikesTab,
    },
    ProfileTab: {
      screen: ProfileTab,
    }
  },
  {
    tabBarPosition: "bottom",
    tabBarOptions: {
      style: {
        ...Platform.select({
          android: {
            backgroundColor: "white"
          },
        }),
      },
      activeTintColor: "#000",
      inactiveTintColor: "#d1cece",
      showLabel: false,
      showIcon: true,
    },
    animationEnabled: true,
    swipeEnabled: true,
  }
);

AppTabNavigator.navigationOptions = {
  HomeTab: HomeTab.navigationOptions.navigation,
  title: HomeTab.navigationOptions.title,
  headerRight: HomeTab.navigationOptions.navigation,
};

const AppNavigator = createStackNavigator({
  All: {
    screen: AppTabNavigator,
  },
  MessagePage: {
    screen: MessagePage,
  },
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
