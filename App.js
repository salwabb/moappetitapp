import React from 'react';
import { StyleSheet, View, Spacer } from 'react-native';
import {Button} from 'react-native-material-ui';
import LoginForm from'./app/screens/loginForm';
import { createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { showLoginForm: false };
    this.showLoginForm = this.showLoginForm.bind(this);
  }
  
  showLoginForm = () => {
    this.setState({showLoginForm: true})
  }

  /*
  addUser = () => {
    this.setState({showLoginForm: false})
  }*/

  render() {
  if(this.state.showLoginForm) return (<LoginForm />)

  return (
    <View style={styles.container}>
      <View><Button  style={{ container: styles.buttonStyle}} text="Login" raised={true} onPress={this.showLoginForm} /></View>
      <View><Button style={{ container: styles.buttonStyle}} text="Register" raised={true} /></View>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
  buttonStyle: {
    width: 100,
    height: 40,
    backgroundColor: 'rgba(12, 57, 14, 0.85)',
  }
});
