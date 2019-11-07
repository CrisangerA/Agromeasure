import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import { Style, Colors, Size } from '../Layout'
import Navigation from '../components/Navigation'

export default function CreateTerreno(props) {
  return (
    <ScrollView style={Style.container}>
      <Navigation navigation={props.navigation} />
      <View style={Style.form}>
        <Text style={[Style.title, { marginBottom: Size.col1}]}> Registrar nueva hectárea </Text>
        <TextInput placeholder="Tamaño" placeholderTextColor={Colors.Withe} style={Style.input} keyboardType="number-pad" />
        <TextInput placeholder="Tipo de Tierra" placeholderTextColor={Colors.Withe} style={Style.input} keyboardType="default" />
        <TextInput placeholder="Temperatura" placeholderTextColor={Colors.Withe} style={Style.input} keyboardType="number-pad" />
        <TextInput placeholder="Humedad" placeholderTextColor={Colors.Withe} style={Style.input} keyboardType="number-pad" />
        <TouchableOpacity onPress={() => props.navigation.navigate('Semilla')}>
          <View style={Style.button}>
            <Text style={Style.buttonText}>Guardar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})