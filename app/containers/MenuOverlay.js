import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Button } from 'react-native-elements';

class Drawer extends Component {
  render() {
    return (
        <View>
            <Button title="Search" onPress={() => this.props.navigation.navigate('Home')} />
            <Button title="Saved" onPress={() => this.props.navigation.navigate('Saved')} />
            <Button title="About" onPress={() => this.props.navigation.navigate('About')} />
        </View>
    );
  }
}