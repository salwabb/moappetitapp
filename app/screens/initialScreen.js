import React from 'react';
import styles from './styles.js';
import { StyleSheet, View, ImageBackground, KeyboardAvoidingView, Image, Text} from 'react-native';
import { Button } from 'react-native-material-ui';


export default class InitialScreen extends React.Component {
  render() {
      return (
      
<ImageBackground source={require('../assets/OpeningPageBackground.jpg')} resizeMode='cover'   style={styles.backgroundImage} 
>{/* Thamima: Changes */} 
<KeyboardAvoidingView style={styles.KBAV} behavior="position" enabled>
          <View style={styles.container}>
     
          <Text style={styles.CircleMoAppetit}>MoeAppetit</Text>
          <View style={styles.buttonHolder}>
                <Button 
              style={{ container: styles.buttonStyle}} 
              primary={true} 
              text="Login" 
              raised={true} 
              onPress={() => this.props.navigation.navigate('Login')}/>
              <Button 
              style={{ container: styles.buttonStyle}} 
              primary={true} 
              text="Register" 
              raised={true} 
              onPress={() => this.props.navigation.navigate('Register')}/>
              </View>
             </View>
             {/* Thamima: Changes */}  
             </KeyboardAvoidingView>
          </ImageBackground>
          
      );
  }
}
