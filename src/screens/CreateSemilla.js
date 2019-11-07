import React, { useState } from 'react'
import { Text, StyleSheet, View, ScrollView, TouchableOpacity, TextInput, Picker } from 'react-native'
import Navigation from '../components/Navigation'
// Assets
import { Style, Size, Colors } from '../Layout'

export default function CreateSemilla(props) {
  const [semilla, setSemilla] = useState('Tipo de Semilla')
  const [agua, setAgua] = useState('Fuente de Agua');
  return (
    <ScrollView>
      <Navigation navigation={props.navigation} />
      <View style={Style.form}>
        <Text style={[Style.title, { marginBottom: Size.col1 }]}> Calcular siembra </Text>
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
