import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView, ImageBackground, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Image from '../assets/bg-singin.jpg';
import { Size, height, Colors, Style } from '../Layout';

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
    this.props.navigation.navigate('A');
  }

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <StatusBar barStyle='dark-content' backgroundColor={Colors.Button} />
        <ImageBackground source={Image} style={s.bg}>
          <Text style={s.t}>
            Agromeasure
          </Text>
          <View style={{ alignItems: 'center', marginTop: Size.col25 }}>
            <View style={s.inputIcon}>
              <TextInput
                value={this.state.u}
                onChangeText={(t) => this.setState({ u: t })}
                placeholder="Username"
                placeholderTextColor={Colors.Withe}
                style={[Style.input, { width: Size.col10, marginLeft: 0, paddingLeft: 45 }]}
              />
              <Icon name="person-pin" size={30} style={s.iconInput} />
            </View>
            <View style={s.inputIcon}>
              <TextInput
                value={this.state.p}
                onChangeText={(t) => this.setState({ p: t })}
                placeholder="Password"
                placeholderTextColor={Colors.Withe}
                style={[Style.input, { width: Size.col10, marginLeft: 0, paddingLeft: 45 }]}
              />
              <Icon name="lock" size={30} style={s.iconInput} />
            </View>
            <TouchableOpacity style={s.b} onPress={() => this.Authenticate()}>
              <Text style={Style.buttonText}>Login</Text>
            </TouchableOpacity>
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
    borderColor: Colors.Black
  },
  inputIcon: {
    //flexDirection: 'row',
    width: Size.col10,
    height: Size.col1,
    marginBottom: Size.col05
  },
  iconInput: {
    position: 'absolute',
    left: 10,
    top: 8,
    color: Colors.Withe
  }
});