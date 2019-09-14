import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-material-ui';
//import loginAPI from './app/HasuraAPI/loginAPI'
import { TextField } from 'react-native-materialui-textfield';
// LoginForm componenet
export default class LoginForm extends React.Component {

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

    loginAPI = async (email, password) => {
        try {
            var requestOptions = {
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json"
                }
            };
            
            var body = {
                "provider": "email",
                "data": {
                    "email": email,
                    "password": password
                }
            };
            requestOptions.body = JSON.stringify(body)
            const response = await fetch("https://auth.moappetit.com/v1/login", requestOptions)
            const result = await response.json() // result.auth_token will return the auth token for current session
            console.log(result)
        } catch (e) { console.log(e) }
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
        <View style={styles.container}>
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
                <Button style={{ container: styles.buttonStyle}} text="Login" type="password" raised={true} primary={true} onPress={ () => this.loginAPI(this.state.email, this.state.password)}/>
            </View>
        </View>
        )
    }
   
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 50,
    },
    buttonStyle: {
        backgroundColor: 'rgba(12, 57, 14, 0.85)',
      }
  });