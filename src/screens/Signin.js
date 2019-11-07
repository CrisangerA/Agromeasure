import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView, ImageBackground, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import Image from '../assets/bg-singin.jpg';
import { Size, height, Colors } from '../Layout';

export default class Singin extends Component {
  constructor() {
    super();
    this.state = {
      u: '',
      p: '',
      users: [
        { name: 'crisanger', passw: '12345' },
        { name: 'cristian', passw: '12345' },
        { name: 'michel', passw: '12345' },
        { name: 'alexis', passw: '12345' },
      ]
    }
  }

  Authenticate() {
    this.props.navigation.navigate('D');
  }

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <ImageBackground source={Image} style={s.bg}>
          <Text style={s.t}>
            Agromeasure
          </Text>
          <View style={{ alignItems: 'center', marginTop: Size.col25 }}>
            <TextInput
              value={this.state.u}
              onChangeText={(t) => this.setState({ u: t })}
              placeholder="Username"
              placeholderTextColor={Colors.Black}
              onSubmitEditing={() => { this.password.focus(); }}
              keyboardType="email-address"
              style={s.i} />
            <TextInput
              ref={(input) => { this.password = input; }}
              value={this.state.p}
              onChangeText={(t) => this.setState({ p: t })}
              placeholder="Password"
              placeholderTextColor={Colors.Black}
              secureTextEntry
              keyboardType="numbers-and-punctuation"
              onSubmitEditing={() => this.Authenticate()}
              style={s.i} />
            <View style={s.s}>
              <TouchableOpacity style={s.b} onPress={() => this.Authenticate()}>
                <Text>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    );
  }
}

const s = StyleSheet.create({
  bg: {
    width: Size.col12,
    height,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  t: {
    fontSize: Size.title + (Size.title / 3),
    color: Colors.Withe,
  },
  i: {
    backgroundColor: 'chartreuse',
    borderRadius: Size.border,
    width: Size.col10,
    height: Size.col1,
    marginBottom: Size.col05,
    paddingLeft: Size.col05,
    opacity: .8
  },
  b: {
    backgroundColor: 'chartreuse',
    width: Size.col8,
    height: Size.col1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Size.border,
    opacity: .8
  },
  s: {
    shadowColor: Colors.Black,
    shadowOffset: { width: 20, height: 20 },
    shadowOpacity: 1,
    shadowRadius: 1,
  }
});