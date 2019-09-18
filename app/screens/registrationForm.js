import React from 'react';
import {View, StyleSheet} from 'react-native';
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
            <View>
                <Button style={{ container: styles.buttonStyle}} text="Register" raised={true} primary={true} />
            </View>
        </View>
        )
    }
   
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    buttonStyle: {
        backgroundColor: 'rgba(12, 57, 14, 0.85)',
    },
  });