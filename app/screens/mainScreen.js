import React from 'react';
import { StyleSheet, View, ImageBackground, KeyboardAvoidingView, Image, Text} from 'react-native';
import {AsyncStorage} from 'react-native';
import {Button} from 'react-native-material-ui';
import styles from '../screens/styles';
import { Icon } from 'native-base';
import { Header } from 'react-native-elements';




// Added by Mamadou Store Token
// Rendering to the UI the post Registration screen with the login button and informing the user that they need to validate their email
export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        auth: '',
      };
    }

switchToContactUs = async() =>
{
   this.props.navigation.navigate('ContactUs');
}


switchToAboutUs = async() =>
{
  this.props.navigation.navigate('AboutUs');
}

  getValue = async () => {
    try {
      const auth = await AsyncStorage.getItem('token');
        console.log("Token: " +auth)
    }
    catch (error) {
        console.log("error")
    }
  }
  
//Store Token End 

  render() {
      return (
        <ImageBackground source={require('../assets/OpeningPageBackground.jpg')} resizeMode='cover'style={styles.backgroundImage}>
                <Header
                    leftComponent={<Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />}
                    />
              <View>
              <Button style={ {container: styles.buttonStyle2}} text="About US" raised={true} primary={true} onPress={ () => this.switchToAboutUs()}/>
              </View>
              <View>
              <Button style={{ container: styles.buttonStyle2}} text="Contact Us" raised={true} primary={true} onPress={ () => this.switchToContactUs()}/>            
              </View>
           </ImageBackground>
      );
  }
}

// Style Container
/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
      color: 'rgba(12, 57, 14, 0.85)',
      alignItems: 'center',
      textAlign: 'center',
  }
}); */

// END: Added by Mamadou