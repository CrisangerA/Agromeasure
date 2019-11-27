import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, View, ScrollView, TextInput, TouchableOpacity, Image, ToastAndroid, StatusBar } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Picker, Item, Label, Input } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Geolocation from '@react-native-community/geolocation';
import { Style, Colors, Size } from '../Layout'
import Loading from '../components/Loading';

export default function CreateTerreno(props) {
  const [IsLoading, setIsLoading] = useState(false);

  const [tipoTierra, setTipoTierra] = useState('Tipo de tierra');
  const [temp, setTemp] = useState('');
  const [humed, setHumed] = useState('');

  function GetPosition() {
    setIsLoading(true);
    Geolocation.requestAuthorization;
    Geolocation.getCurrentPosition(
      async p => {
        await GetWeather(p.coords.latitude, p.coords.longitude);
      },
      e => {
        ToastAndroid.show(e.code + ' ' + e.message, 100);
        setIsLoading(false);
      },
      { enableHighAccuracy: true, timeout: 3000, maximumAge: 1000 }
    );
  }

  async function GetWeather(lat, lon) {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9f9f6038bdcc557d9daea58d21dcc828&units=metric`;
    try {
      let r = await fetch(url)
      let d = await r.json();
      setTemp(d.main.temp + ' °C');
      setHumed(d.main.humidity + '%');
      setIsLoading(false);
    } catch (e) {
      ToastAndroid.show(JSON.stringify(e), 1000);
      setIsLoading(false);
    }
  }

  if (IsLoading) {
    return (<Loading />)
  } else {
    return (
      <View style={Style.container}>
        <NavigationEvents onDidFocus={payload => GetPosition()} />
        <View style={{ marginBottom: Size.col05, shadowColor: Colors.Black, shadowRadius: 10, shadowOffset: { height: 20, width: 20 }, elevation: 5 }}>
          <StatusBar barStyle='dark-content' backgroundColor={Colors.Button} />
          <Image source={require('../assets/verdura3.jpg')} style={Style.imageHeader} />
          <Text style={{ position: 'absolute', color: Colors.Withe, fontSize: Size.title, left: 100, top: 50 }}>Nuevo terreno</Text>
        </View>
        <ScrollView>
          <View style={Style.form}>
            <TextInput placeholder="Nombre" placeholderTextColor={Colors.Withe} style={Style.input} />
            <TextInput placeholder="Tamaño" placeholderTextColor={Colors.Withe} style={Style.input} keyboardType="number-pad" />

            <View style={Style.input}>
              <Picker
                mode='dropdown'                
                selectedValue={tipoTierra}
                onValueChange={(itemValue, itemIndex) => setTipoTierra(itemValue)}>
                <Picker.Item value='N' label='Humífero' />
                <Picker.Item value='R' label='Limoso' />
                <Picker.Item value='N' label='Arcilloso' />
                <Picker.Item value='N' label='Seca' />
              </Picker>
            </View>

            <TextInput placeholder="Humedad" placeholderTextColor={Colors.Withe} style={Style.input} keyboardType="number-pad" />

            <TextInput placeholder="Tamaño" placeholderTextColor={Colors.Withe} style={Style.input} keyboardType="number-pad" />
            <TextInput placeholder="Tipo de Tierra" placeholderTextColor={Colors.Withe} style={Style.input} keyboardType="default" />

            <View style={s.rowInputs}>
              <View style={s.inputIcon}>
                <TextInput
                  value={temp.toString() ? temp.toString() : '0'}
                  onChangeText={(t) => setTemp(t)}
                  placeholder="Temperatura"
                  placeholderTextColor={Colors.Withe}
                  style={[Style.input, { width: Size.col45 + (Size.col05 / 2), marginLeft: 0, paddingLeft: 45 }]}
                />
                <Icon name="cloud" size={30} style={s.iconInput} />
              </View>
              <View style={s.inputIcon}>
                <TextInput
                  value={humed.toString() ? humed.toString() : '0'}
                  onChangeText={(t) => setHumed(t)}
                  placeholder="Humedad"
                  placeholderTextColor={Colors.Withe}
                  style={[Style.input, { width: Size.col45, marginLeft: 0, paddingLeft: 45 }]}
                />
                <Icon name="brightness-6" size={30} style={s.iconInput} />
              </View>
            </View>

            <TouchableOpacity onPress={() => props.navigation.navigate('Semilla')}>
              <View style={Style.button}>
                <Text style={Style.buttonText}>Guardar</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const s = StyleSheet.create({
  rowInputs: {
    flexDirection: 'row',
    width: Size.col10
  },
  inputIcon: {
    flexDirection: 'row',
    width: Size.col5,
    height: Size.col1,
    marginLeft: Size.col05,
    marginBottom: Size.col05
  },
  iconInput: {
    position: 'absolute',
    left: 10,
    top: 8,
    color: Colors.Withe
  }
})