///Thamima: Whole File Created
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-material-ui';
//import loginAPI from './app/HasuraAPI/loginAPI'
import { TextField } from 'react-native-materialui-textfield';
export default class EmailHasBeenSentScreen extends React.Component {

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
    /* (Thamima)Notes from meeting:
    go to figma...
    senior projects file in google docs, its the one look like the design in figma,
    use that image, put that in the home screens and put that in the background
    try to follow that...
    make sure you always use material-ui...
    Have to code the design...
    */

    handleBack = () => {
        //here and show Send registration request to api  and then show email sent message
        this.props.navigation.navigate('Initial');
    }


    // Rendering to the UI the Input options and form button
    render() {
        return (
        <View style={styles.container}>
            <Text value='Email Sent'>An email has been Sent to {this.state.email}{'\n'}</Text>
            
            <View>
                <Button style={{ container: styles.buttonStyle}} text="Go Back" onPress={this.handleBack}  raised={true} primary={true} />
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