import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class Account extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Contact Screen</Text>
        <Button
          title="Go to About"
          onPress={() => this.props.navigation.navigate('About')}/>
      </View>
    )
  }
}