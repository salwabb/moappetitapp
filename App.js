import React from 'react';
import { StyleSheet, View, Spacer } from 'react-native';
import {Button} from 'react-native-material-ui';
import LoginForm from'./app/screens/loginForm';
import RegistrationForm from './app/screens/registrationForm';
//import { createStackNavigator } from 'react-navigation';
import Container from './app/screens/navigation';
import Constants from 'expo-constants';

/*const AppNavigator = createStackNavigator({
  Initial: InitialForm,
  Login: LoginForm, 
  Register: RegistrationForm,
}, {
  initialRouteName: 'Initial',
})*/



export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { showLoginForm: false, showRegistrationForm: false };
    this.showLoginForm = this.showLoginForm.bind(this);
    this.showRegistrationForm = this.showRegistrationForm.bind(this);
  }
  
  showLoginForm = () => {
    this.setState({showLoginForm: true})
  }

  showRegistrationForm = () => {
    this.setState({showRegistrationForm: true})
  }

  render() {
   return <Container />
  if(this.state.showLoginForm) return (<LoginForm />)

  if(this.state.showRegistrationForm) return (<RegistrationForm />)

  return (
    <View style={styles.container}>
      <View><Button  style={{ container: styles.buttonStyle}} primary={true} text="Login" raised={true} onPress={this.showLoginForm} /></View>
      <View><Button style={{ container: styles.buttonStyle}} primary={true} text="Register" raised={true} onPress={this.showRegistrationForm}/></View>
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
