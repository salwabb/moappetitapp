import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import InitialScreen from './initialScreen';
import LoginScreen from './loginForm';
import RegisterScreen from './registrationForm';
import EmailHasBeenSentScreen from './emailHasBeenSent';
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
  ///Thamima
  EmailHasBeenSent: {//Thamima
    screen: EmailHasBeenSentScreen,//Thamima
  navigationOptions: () => ({//Thamima
    headerTintColor: 'rgba(12, 57, 14, 0.85)',//Thamima
  }),
  ////Thamima
},
  });

const Container = createAppContainer(AppNavigator);

export default Container;
