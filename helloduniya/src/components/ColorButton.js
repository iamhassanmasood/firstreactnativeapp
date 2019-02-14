import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableHighlight
} 
from 'react-native'
const ColorButton = ({ backgroundColor, onSelect=f=>f }) =>(
    <TouchableHighlight 
    style = {styles.button}
    onPress = {() => onSelect(backgroundColor)}
    underlayColor= "orange"
    >
    <View style={styles.row}>
      <View style = {[styles.sample , {backgroundColor}]}>
      <Text style = {styles.text}> {backgroundColor} </Text>
      </View>
    </View>
    </TouchableHighlight>
) 

const styles = StyleSheet.create({
    button : {
      margin: 10,
      padding: 10,
      borderRadius: 10,
      borderWidth: 2,
      alignSelf: 'stretch',
      backgroundColor: 'rgba(255, 255, 255, .8)'
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center'
  
  
    },
    sample: {
      borderRadius: 10,
      margin: 5,
      backgroundColor: 'white'
    }, 
    text: {
      fontSize: 30,
    }
  
  })

  export default ColorButton