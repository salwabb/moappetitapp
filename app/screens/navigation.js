import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import InitialScreen from './initialScreen';
import LoginScreen from './loginForm';
import RegisterScreen from './registrationForm';
import{ createAppContainer } from 'react-navigation';


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
