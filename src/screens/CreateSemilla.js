import React, { useState } from 'react'
import { Text, StyleSheet, View, ScrollView, TouchableOpacity, TextInput, Picker, Image, StatusBar } from 'react-native';
import Navigation from '../components/Navigation'
// Assets
import { Style, Size, Colors } from '../Layout'

export default function CreateSemilla(props) {
  const [semilla, setSemilla] = useState('Tipo de Semilla')
  const [agua, setAgua] = useState('Fuente de Agua');
  return (
    <ScrollView>
      <View style={{ marginBottom: Size.col05, shadowColor: Colors.Black, shadowRadius: 10, shadowOffset: { height: 20, width: 20 }, elevation: 5 }}>
        <StatusBar barStyle='dark-content' backgroundColor={Colors.Button} />
        <Image source={require('../assets/Semillas.jpg')} style={Style.imageHeader} />
        <Text style={{ position: 'absolute', color: Colors.Withe, fontSize: Size.title, left: 100, top: 50 }}>Nueva semilla</Text>
      </View>
      <View style={Style.form}>        
        <View style={Style.input}>
          <Picker
            selectedValue={agua}
            onValueChange={(itemValue, itemIndex) => setAgua(itemValue)}>
            <Picker.Item label="Tipo de Semilla" value="Tipo de Semilla" />
            <Picker.Item label="Hortaliza" value="Hortaliza" />
            <Picker.Item label="Flor" value="Flor" />
            <Picker.Item label="Fruta" value="Fruta" />
            <Picker.Item label="Vegetal" value="Vegetal" />
            <Picker.Item label="Comestibles" value="Comestibles" />
          </Picker>
        </View>

        <TextInput
          placeholder="Temperatura"
          placeholderTextColor={Colors.Withe}
          style={Style.input}
          keyboardType="number-pad" />
        <TextInput
          placeholder="Luz"
          placeholderTextColor={Colors.Withe}
          style={Style.input}
          keyboardType="number-pad" />
        <TextInput
          placeholder="Altitud"
          placeholderTextColor={Colors.Withe}
          style={Style.input}
          keyboardType="number-pad" />

        <View style={Style.input}>
          <Picker
            selectedValue={agua}
            onValueChange={(itemValue, itemIndex) => setAgua(itemValue)}>
            <Picker.Item label="Seleccionar Terreno" value="Seleccionar Terreno" />
            <Picker.Item label="Hectarea 1" value="Hectarea 1" />
            <Picker.Item label="Flores" value="Flores" />
            <Picker.Item label="Zona 3" value="Zona 3" />
            <Picker.Item label="Hectarea 2" value="Hectarea 2" />
            <Picker.Item label="Humedal" value="Humedal" />
          </Picker>
        </View>

        <View style={Style.input}>
          <Picker
            selectedValue={agua}
            onValueChange={(itemValue, itemIndex) => setAgua(itemValue)}>
            <Picker.Item label="Fuente de Agua" value="Fuente de Agua" />
            <Picker.Item label="Regadera" value="Regadera" />
            <Picker.Item label="Poso" value="Poso" />
            <Picker.Item label="Algibe" value="Algibe" />
            <Picker.Item label="Tuveria" value="Tuveria" />
            <Picker.Item label="Regadera" value="Regadera" />
          </Picker>
        </View>

        <TouchableOpacity onPress={() => props.navigation.navigate('Confirmar')}>
          <View style={Style.button}>
            <Text style={Style.buttonText}>Calcular</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})
