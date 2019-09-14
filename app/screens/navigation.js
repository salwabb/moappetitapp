import { createStackNavigator } from 'react-navigation-stack';
import { Button } from 'react-native-material-ui';
import InitialScreen from './initialScreen';
import LoginScreen from './loginForm';
import RegisterScreen from './registrationForm';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import{ createAppContainer } from 'react-navigation';
//import Constants from 'expo-constants';
//import loginAPI from './app/HasuraAPI/loginAPI'
import { TextField } from 'react-native-materialui-textfield';

/*const AppNavigator = createStackNavigator({
    Initial: InitialScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
    }, {
    initialRouteName: 'Initial',
    });*/

const AppNavigator = createStackNavigator({
    // For each screen that you can navigate to, create a new entry like this:
    Initial: {
        screen: InitialScreen,
      navigationOptions: ({ navigation }) => ({
      }),
    },
    Login: {
        screen: LoginScreen,
      navigationOptions: () => ({
        headerTintColor: 'rgba(12, 57, 14, 0.85)',
      }),
    },
    Register: {
        screen: RegisterScreen,
      navigationOptions: () => ({
        headerTintColor: 'rgba(12, 57, 14, 0.85)',
      }),
    },
  });

const Container = createAppContainer(AppNavigator);

export default Container;
