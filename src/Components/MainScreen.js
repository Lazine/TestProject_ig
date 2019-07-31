import React, { Component } from 'react';
import { Platform } from 'react-native';
import HomeTab from './AppTabNavigator/HomeTab';
import SearchTab from './AppTabNavigator/SearchTab';
import AddMediaTab from './AppTabNavigator/AddMediaTab';
import LikesTab from './AppTabNavigator/LikesTab';
import ProfileTab from './AppTabNavigator/ProfileTab';
import MessagePage from './AppTabNavigator/messagePage';

import { Icon } from 'native-base';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

export class MainScreen extends Component {
  render() {
    return <AppNavigator />;
  }
}

const HomeScreen = createStackNavigator(
{
  HomeTab: {
    screen: HomeTab,
  },
  MessagePage: {
    screen: MessagePage,
  },
},
);

const AppTabNavigator = createBottomTabNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
				tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-home" style={{ color: tintColor }} focused='true' />
        )},
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
  },
  {
    initialRouteName: 'HomeScreen',
  }
);

// AppTabNavigator.navigationOptions = {
//   HomeTab: HomeTab.navigationOptions.navigation,
//   title: HomeTab.navigationOptions.title,
//   headerRight: HomeTab.navigationOptions.headerRight,
//   headerLeft: HomeTab.navigationOptions.headerLeft,
// };

// const AppNavigator = createStackNavigator({
//   All: {
//     screen: AppTabNavigator,
//   },
//   MessagePage: {
//     screen: MessagePage,
//   },
// });

const AppContainer = createAppContainer(AppTabNavigator);

export default AppContainer;
