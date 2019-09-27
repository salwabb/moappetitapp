import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import InitialScreen from './initialScreen';
import LoginScreen from './loginForm';
import RegisterScreen from './registrationForm';
import PostRegisterScreen from './postRegisterScreen';
import MainScreen from './mainScreen';
import{ createAppContainer } from 'react-navigation';
import HomeScreen from '../components/Homescreen';
import AboutScreen from '../components/Aboutscreen';
import { StyleSheet, Text, View } from 'react-native';
import AccountScreen from '../components/Accountscreen';



// Added by Salwa

export default class Navigation extends React.Component {
  render() {
    return <AppContainer />;
  }
}
const AppNavigator = createDrawerNavigator({
   
    // For each screen that you can navigate to, create a new entry like this:
    // Initial screen when app is opened
    Initial: {
        screen: InitialScreen,
      navigationOptions: () => ({
      }),
    },
    // Login screen with option to return back to Initail Screen
    Login: {
        screen: LoginScreen,
      // navigationOptions: () => ({
      //   headerTintColor: 'rgba(12, 57, 14, 0.85)',
      // }),
    },
    // Registration screen with option to return back to Initial Screen
    Register: {
        screen: RegisterScreen,
      // navigationOptions: () => ({
      //   headerTintColor: 'rgba(12, 57, 14, 0.85)',
      // }),
    },
    // Post Registration screen with option to login after verifying email
    PostRegister: {
      screen: PostRegisterScreen,
    // navigationOptions: () => ({
    //   headerTintColor: 'rgba(12, 57, 14, 0.85)',
    //   headerLeft: null,
    //   gesturesEnabled: false,
    // }),
  },
  Main: {
    screen: MainScreen,
   // navigationOptions: () => ({
    //headerTintColor: 'rgba(12, 57, 14, 0.85)',
  //}),
},
Home: {
  screen: HomeScreen
},
About: {
  screen: AboutScreen
},

Account: {
  screen: AccountScreen
}
}, {
initialRouteName: "Initial",
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