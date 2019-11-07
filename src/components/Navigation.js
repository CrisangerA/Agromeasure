import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, StatusBar } from 'react-native'
import { Size, Colors } from '../Layout'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Navigation(props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.Button} />
      <TouchableOpacity style={styles.buttonRight} onPress={() => props.navigation.toggleDrawer()}>
        <Icon name="bars" size={30} color={Colors.Withe} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: Size.col12,
    height: Size.col15,
    backgroundColor: Colors.Button,
    justifyContent: 'center'
  },
  buttonRight: {
    width: Size.col15,
    height: Size.col15,
    paddingRight: Size.col05,
    justifyContent: 'center',
    marginLeft: Size.col11    
  }
})
