import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import{ createAppContainer } from 'react-navigation';
import HomeScreen from '../components/Homescreen';
import AboutScreen from '../components/Aboutscreen';
import DebugScreen from '../components/Debugscreen';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './mainScreen';
import RegisterScreen from './registrationForm';
import PostRegisterScreen from './postRegisterScreen';

import LoginScreen from './loginForm';

export default class navigation extends React.Component {
  render() {
    return <AppContainer />;
  }
}

class Hidden extends React.Component {
  render() {
    return null;
  }
}
const AppNavigator = createDrawerNavigator({

Home: {
  screen: HomeScreen
},

Debug: {
  screen: DebugScreen
},


Login: {
  screen: LoginScreen,
navigationOptions: ({navigation}) => ({
  headerTintColor: 'rgba(12, 57, 14, 0.85)',
  drawerLabel: <Hidden />,
  drawerLockMode: "locked-closed",
}),
},

  // Post Registration screen with option to login after verifying email
  PostRegister: {
    screen: PostRegisterScreen,
  navigationOptions: () => ({
    headerTintColor: 'rgba(12, 57, 14, 0.85)',
    drawerLabel: <Hidden />,
    drawerLockMode: "locked-closed",
  }),
},

 // Registration screen with option to return back to Initial Screen
 Register: {
  screen: RegisterScreen,
navigationOptions: () => ({
  headerTintColor: 'rgba(12, 57, 14, 0.85)',
  drawerLabel: <Hidden />,
  drawerLockMode: "locked-closed",
}),
},



About: {
  screen: AboutScreen
},

Main: {
  screen: MainScreen,
//   navigationOptions: () => ({
//   headerTintColor: 'rgba(12, 57, 14, 0.85)',
// }),
},

}, {
initialRouteName: "Login",
contentOptions: {
  activeTintColor: '#e91e63'
}
  });

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
// Stores the navigation for the entire app
const AppContainer = createAppContainer(AppNavigator);

// END: Added by Salwa