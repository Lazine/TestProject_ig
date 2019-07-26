import React, { Component } from 'react';
import { Text, View, StyleSheet, List, ListItem, FlatList } from 'react-native';

import { Icon } from "native-base";

class MessagePage extends Component {
  static navigationOptions = {
    headerLeft: (
      <Icon
        name="ios-arrow-back"
        style={{ paddingLeft: 15 }}
        onPress={() => this.props.navigation.goBack()}
      />
    ),
    title: "Message"
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>MessagePage</Text>
        <List>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <ListItem
                roundAvatar
                title={`${item.name.first} ${item.name.last}`}
                subtitle={item.email}
                avatar={{ uri: item.picture.thumbnail }}
              />
            )}
          />
        </List>
      </View>
    );
  }
}
export default MessagePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

