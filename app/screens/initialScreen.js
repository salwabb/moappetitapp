import React from 'react';
import { StyleSheet, View, ImageBackground, Image, Text} from 'react-native';
import { Button } from 'react-native-material-ui';


export default class InitialScreen extends React.Component {
  render() {
      return (
      
<ImageBackground source={require('../assets/OpeningPageBackground.jpg')} resizeMode='cover'   style={styles.backgroundImage} 
>{/* Thamima: Changes */} 
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
          </ImageBackground>
          
      );
  }
}

const styles = StyleSheet.create({
  CircleMoAppetit:
  {
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: 'rgba(12, 57, 14, 0.85)', 
    fontSize: 40,
    lineHeight:20 - 4, 
    paddingTop: 100,
    fontFamily: "Bradley Hand",
    width: 200,
    height: 200,
    color: "#E8E8E8",

    borderRadius: 100,
    borderWidth: 0,
    overflow: "hidden",
  },
  
  buttonStyleDown: {
    flex: 2,
      backgroundColor: 'rgba(232,232,232, 0.85)',
      width: '20%',
    height: 40,
  
  },
  buttonHolder: 
  {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-between"

  },
  backgroundImage: {  // Thamima Changes
    width: '100%',//
   height: '100%', //
  }, //
  container: {
   flex: 1,
    paddingTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  buttonStyle: {
    flex: 2,
      backgroundColor: 'rgba(12, 57, 14, 0.85)',
      width: '20%',
    height: 40,
  
  },
});

