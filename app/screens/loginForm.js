import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-material-ui';
import { TextField } from 'react-native-materialui-textfield';
import loginAPI from '../hasuraAPI/loginAPI';
import googleAPI from '../hasuraAPI/googleAPI';
<script src="https://apis.google.com/js/platform.js" async defer></script>
import {AsyncStorage} from 'react-native';


// Added by Salwa
export default class LoginScreen extends React.Component {
    // Added by MAMADOU
    // Initializing state
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
            emailError: '',
            passwordLengthError: '',
            isFormValid: false
        };
    }
        
    // Only check this.validateForm() function if any of the states of the fields changed
    componentDidUpdate(_prevProps, prevState) {
        if (
          this.state.email !== prevState.email ||
          this.state.password !== prevState.password ||
          this.state.emailError !== prevState.emailError
          ) {
          this.validateForm();
        }
      }

      emailIsValid = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      }
    // Handling change when user enters text for email
    handleEmailChange = email => {
        this.setState({email})
        if (this.emailIsValid(email)) {
            this.setState({emailError: ''})
        }
        else {
            this.setState({emailError: 'Invalid Email'})
        }
    }

    // Handling change when user enters text for password
    handlePasswordChange = password => {
        this.setState({password})
        if (password.length < 8) {
            this.setState({passwordLengthError: 'Password must be at least 8 characters'})
        }
        else {
            this.setState({passwordLengthError: ''})
        }
    }
    
 // Handlig change when error is generated from LoginAPI
    setLoginError = error => {
        // If there's an error display that, otherwise send to new screen to tell the user to verify email address and then login
        this.setState({error})
        console.log(this.state)
        if(error === '') {
            this.props.navigation.navigate('Main')
        }
    }

// function to validate that the input is correct
    validateForm = () => {
        console.log(this.state);
        const emails = this.state.email.split('@');
        if (
            this.state.password.length > 0 &&
            emails.length >= 2 &&
            emails[0] &&
            emails[1]
          ) {
            this.setState({ isFormValid: true, emailError: '', passwordLengthError: ''});
          } 
        else {
          this.setState({ isFormValid: false });
        }
      };

    handleSubmit = async () => {
        let loginResponse = await loginAPI(this.state)
        const loginResult = await loginResponse.json()
        console.log(loginResult)
        if(loginResponse.status !== 200) {
            console.log(loginResult.message)
            this.setLoginError(loginResult.message)
        }
        else {
            console.log("Auth Token: " +loginResult.auth_token)
            await AsyncStorage.setItem('token', loginResult.auth_token);
            this.setLoginError('')
        }
      }
    // Added By Mamadou Store Token
    setValue = async () => {
        try {
          await AsyncStorage.setItem('token', loginResult.auth_token);
          console.log("set Value run:" +auth)
        } catch (e) {
            console.log("setVAlue: " +loginResult.auth_token)
        }
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

    // Rendering to the UI the Input options and form button
    render() {
        return (
        <View style={styles.container}>
            <TextField tintColor='rgba(12, 57, 14, 0.85)'
            required
            value= {this.state.email}
            error= {this.state.emailError}
            onChangeText={this.handleEmailChange}
            label="Email"
            />
            <TextField tintColor='rgba(12, 57, 14, 0.85)'
            required
            secureTextEntry={true}
            value= {this.state.password}
            error= {this.state.passwordLengthError}
            onChangeText={this.handlePasswordChange}
            label="Password"
            />
            <View>
                <Button 
                style={{ container: styles.buttonStyle}} 
                text="Login" 
                raised={true} 
                primary={true} 
                onPress={ () => this.handleSubmit() }
                disabled={!this.state.isFormValid}
                />
                {/* On press button sends it to the loginAPI where the API from Hasura is stored*/}
            </View>
            {/* Temporary Button - Jordan Dickerson */}
            <View>
                <Button style={{ container: styles.buttonStyle}} text="Google Login" raised={true} primary={true} onPress={ () => googleAPI()}/>
            </View>
            <View><Text style={styles.errorStyle}>{this.state.error}</Text></View>
            {/* Temporary Button end */}
        </View>
        )
    }
   
}
//added Mamadou

// Style Container
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    buttonStyle: {
        backgroundColor: 'rgba(12, 57, 14, 0.85)',
    },
    errorStyle: {
        alignItems: 'center',
        color: 'red',
        textAlign: 'center',
    }
  });
// END: Added by Salwa