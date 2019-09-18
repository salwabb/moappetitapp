import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-material-ui';
import { TextField } from 'react-native-materialui-textfield';
import loginAPI from '../hasuraAPI/loginAPI';
import googleAPI from '../hasuraAPI/googleAPI';
<script src="https://apis.google.com/js/platform.js" async defer></script>

// Added by Salwa
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

    // Rendering to the UI the input options and submit button
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
                {/* On press button sends it to the loginAPI where the API from Hasura is stored*/}
                <Button style={{ container: styles.buttonStyle}} text="Login" raised={true} primary={true} onPress={ () => loginAPI(this.state.email, this.state.password)}/>
            </View>
            {/* Temporary Button - Jordan Dickerson */}
            <View>
                <Button style={{ container: styles.buttonStyle}} text="Google Login" raised={true} primary={true} onPress={ () => googleAPI()}/>
            </View>
            {/* Temporary Button end */}
        </View>
        )
    }
   
}

// Style Container
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    buttonStyle: {
        backgroundColor: 'rgba(12, 57, 14, 0.85)',
    },
  });
// END: Added by Salwa