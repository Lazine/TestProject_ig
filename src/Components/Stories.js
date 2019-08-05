/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import { Container, Content, Icon, Thumbnail } from 'native-base';


export default class Stories extends Component {
  render() {
		return (
			<TouchableOpacity style={styles.box}>
				<Thumbnail
					style={{  borderColor: 'pink', borderWidth: 2 }}
					source={this.props.image} />
				<Text numberOfLines={1} style={styles.text}>{this.props.name}</Text>
			</TouchableOpacity>
		);
  }
}

const styles = StyleSheet.create({
  box: {
		justifyContent:'center',
		alignItems: 'center',
		width: 60,
		marginHorizontal: 5,
	},
	text: {
		fontSize: 11,
		fontWeight: '200',
	}
});
