import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

// Added by Mamadou
// Rendering to the UI the post Registration screen with the login button and informing the user that they need to validate their email
export default class MainScreen extends React.Component {
  render() {
      return (
          <View style={styles.container}>
              <View><Text style={styles.textStyle}>Welcome to the main screen</Text></View>
          </View>
      );
  }
}

// Style Container
const styles = StyleSheet.create({
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
});

// END: Added by Mamadou