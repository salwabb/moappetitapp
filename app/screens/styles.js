import React from 'react';
import { StyleSheet, View, ImageBackground,  KeyboardAvoidingView, Image, Text} from 'react-native';
export default StyleSheet.create({
  
  TextField:
  {
    
  },
  KBAV:
  {
    flex: 1,
    paddingTop: 0,
    alignItems: 'center',
    marginLeft: -100,
    marginRight: -100,
    paddingLeft: 0,
    paddingRight: 0,
  },
    fieldsArea: 
    {
        flex: 4,
        marginBottom: 0,
        paddingBottom: 0,
        backgroundColor: "white",
        width: "60%"
    },
    CircleMoAppetit:
    {
      
      textAlign: 'center',
      textAlignVertical: 'center',
      backgroundColor: 'rgba(12, 57, 14, 0.85)', 
      fontSize:22,
      lineHeight: 0, 
      paddingTop: 65,
      fontFamily: "Bradley Hand",
      width: 150,
      height: 150,
      color: "#E8E8E8",
  
      borderRadius: 75,
      borderWidth: 0,
      overflow: "hidden",
    },
    buttonHolder: 
    {
      flex: 1,
      flexDirection: 'row',
      justifyContent: "space-between",
      width: "60%"
  
    },
    backgroundImage: {  // Thamima Changes
      width: '100%',//
     height: '100%', //
    }, //
    container: {
     flex: 1,
      paddingTop: 20,
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: 20,
      paddingRight: 20
    },
    buttonStyle2:
    {
    backgroundColor: 'rgba(132,132,132, 0.85)'
    },
    buttonStyleDown: {
        flex: 2,
          backgroundColor: 'rgba(232,232,232, 0.85)',
          width: '60%',
        height: 40,
      
      },
    buttonStyle: {
      flex: 2,
        backgroundColor: 'rgba(12, 57, 14, 0.85)',
        width: '60%',
      height: 40,
    
    },
  });

  