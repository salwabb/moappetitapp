 import React from 'react';
import { StyleSheet, View, ImageBackground,  KeyboardAvoidingView, Image, Text} from 'react-native';
import {Button} from 'react-native-material-ui';
import styles from './styles.js';
import { TextField } from 'react-native-materialui-textfield';
import loginAPI from '../hasuraAPI/loginAPI';

export default class LoginScreen extends React.Component {

    // Initializing state
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    // Handling change when user enters text for email
    handleEmailChange = email => {
        this.setState({email})
    }

    // Handling change when user enters text for password
    handlePasswordChange = password => {
        this.setState({password})
    }

    // Rendering to the UI the Input options and form button
    render() {
        return (
            <ImageBackground source={require('../assets/OpeningPageBackground.jpg')} resizeMode='cover'   style={styles.backgroundImage} 
>{/* Thamima: Changes */} 
<KeyboardAvoidingView style={styles.KBAV} behavior="position" enabled>
            <View style={styles.container}>
     
            <Text style={styles.CircleMoAppetit}>MoeAppetit</Text>
            <View style={styles.buttonHolder}>
                  <Button 
                style={{ container: styles.buttonStyleDown}} 
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
         
         <View style={styles.fieldsArea}>
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
            <View>
                <Button style={{ container: styles.buttonStyle2}} text="Login" raised={true} primary={true} onPress={ () => loginAPI(this.state.email, this.state.password)}/>
            </View>
        </View>
        </View>
        </KeyboardAvoidingView>
        </ImageBackground>
        )
    }
   
}

