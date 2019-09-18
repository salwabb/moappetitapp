import React from 'react';
import { StyleSheet, View, ImageBackground, Image, Text} from 'react-native';
import {Button} from 'react-native-material-ui';
//import loginAPI from './app/HasuraAPI/loginAPI'
import { TextField } from 'react-native-materialui-textfield';
// LoginForm componenet
export default class RegistrationForm extends React.Component {

    // Initializing state
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
        };
    }

    // Handling change when user enters text for name
    handleNameChange = name => {
        this.setState({name})
    }

    // Handling change when user enters text for email
    handleEmailChange = email => {
        this.setState({email})
    }

    // Handling change when user enters text for password
    handlePasswordChange = password => {
        this.setState({password})
    }

    // Handling change when user enters text for confirmation password
    handlePassword2Change = password2 => {
        this.setState({password2})
    }


    handleSubmit = () => { //Thamima
        //show Send registration request to api  and then show email sent message
        this.props.navigation.navigate('EmailHasBeenSent');//Thamima
    }

    /*handleSubmit = () => {
        this.props.onSubmit({...this.state})
    }*/

    /*validateForm = () => {
        if (this.state.email.length >= 7 && this.state.passowrd.length >= 8) {
            return true
        }
        else {
            return false
        }
    }*/

    // Rendering to the UI the Input options and form button
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
                            style={{ container: styles.buttonStyleDown}} 
                            primary={true} 
                            text="Register" 
                            raised={true} 
                            onPress={() => this.props.navigation.navigate('Register')}/>
                     </View>
                     <View style={styles.fieldsArea}>
    
            <TextField tintColor='rgba(12, 57, 14, 0.85)'
            required
            value= {this.state.name}
            onChangeText={this.handleNameChange}
            label="Name"
                        />
<TextField tintColor='rgba(12, 57, 14, 0.85)'
            required
            value= {this.state.email}
            onChangeText={this.handleEmailChange}
            label="Email"
            />
            <TextField tintColor='rgba(12, 57, 14, 0.85)'
            required
            secureTextEntry={true}
            value= {this.state.password}
            onChangeText={this.handlePasswordChange}
            label="Password"
            />
            <TextField tintColor='rgba(12, 57, 14, 0.85)'
            required
            secureTextEntry={true}
            value= {this.state.password2}
            onChangeText={this.handlePassword2Change}
            label="Comfirm Password"
            />
             {/* Thamima: Changes: onPress Event */} 
            <View>
              <Button style={{ container: styles.buttonStyle2}} onPress={this.handleSubmit} text="Register" raised={true} primary={true} />
              </View>
        </View>
        </View>
        </ImageBackground>
        )
    }
   
}
const styles = StyleSheet.create({
    fieldsArea: 
    {
        flex: 4,
        marginBottom: 10,
        backgroundColor: "white",
        width: "100%"
    },
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
    buttonStyle2:
    {
    backgroundColor: 'rgba(132,132,132, 0.85)',



    },
    
    buttonStyleDown: {
        flex: 2,
          backgroundColor: 'rgba(232,232,232, 0.85)',
          width: '20%',
        height: 40,
      
      },
    buttonStyle: {
      flex: 2,
        backgroundColor: 'rgba(12, 57, 14, 0.85)',
        width: '20%',
      height: 40,
    
    },
  });

  