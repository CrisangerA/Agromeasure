import React, { useState } from 'react'
import { Text, StyleSheet, View, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import Navigation from '../components/Navigation'
import { Style, Size } from '../Layout'

export default function ConfirmSiembra(props) {
  const [inicio, setInicio] = useState('27 Octubre 2019');
  const [fin, setFin] = useState('15 Agosto 2020');

  function getCorsa() {
    let geoOption = {}
    navigator.geolocation.getCurrentPosition(geoSuccess,geoFailure,geoOption)
  }

  function geoSuccess(position) {

  }

  function geoFailure(err) {
    
  }

  return (
    <ScrollView style={Style.container}>
      <Navigation navigation={props.navigation} />
      <Text style={[Style.title, { marginBottom: Size.col1 }]}> Confirmar Siembra </Text>
      <View style={{ flexDirection: 'row' }}>
        <Text style={[Style.text, { marginLeft: Size.col1 }]}>Fecha de inicio</Text>
        <TextInput style={[Style.input, { width: Size.col6 }]} value={inicio} editable={false} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={[Style.text, { marginLeft: Size.col1 }]}>Fecha de final</Text>
        <TextInput style={[Style.input, { width: Size.col6 }]} value={fin} editable={false} />
      </View>
      <View style={Style.form}>
        <Text style={[Style.text, { textAlign: 'center', marginBottom: Size.col1 }]}>
          Su producto estara para cosechar en la fecha estimada
        </Text>
        <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
          <View style={Style.button}>
            <Text style={Style.buttonText}>Calcular</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})
