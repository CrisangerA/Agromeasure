import React from 'react';
import { Text, StyleSheet, View, StatusBar, Image, TouchableOpacity, TextInput } from 'react-native';
import { Size, Colors, Style } from '../Layout';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Settings() {
    return (
        <View>
            <View style={{ marginBottom: Size.col1, shadowColor: Colors.Black, shadowRadius: 10, shadowOffset: { height: 20, width: 20 }, elevation: 5 }}>
                <StatusBar barStyle='dark-content' backgroundColor={Colors.Button} />
                <Image source={require('../assets/Semillas.jpg')} style={Style.imageHeader} />
                <Text style={{ position: 'absolute', color: Colors.Withe, fontSize: Size.title, left: 200, top: 50 }}>Mi Finca</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.Text}>Encargado:</Text>
                <TextInput style={Style.input} value="Cristian Alejandro Caicedo" placeholderTextColor={Colors.Withe} />
                <Text style={styles.Text}>Dirección:</Text>
                <TextInput style={Style.input} value="KM 18 Vía Cali - Jamundi" placeholderTextColor={Colors.Withe} />
                <View style={{ flexDirection: 'row', marginLeft: Size.col05 }}>
                    <Icon name="grid-on" size={30} color={Colors.Black} />
                    <Text style={[styles.Text, { marginLeft: Size.col05 / 2 }]}>Terrenos: 10</Text>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: Size.col05 }}>
                    <Icon name="bubble-chart" size={30} color={Colors.Black} />
                    <Text style={[styles.Text, { marginLeft: Size.col05 / 2 }]}>Semillas: 12</Text>
                </View>
            </View>
            <View style={[styles.container, { marginTop: Size.col2 }]}>
                <TouchableOpacity style={[Style.button, { marginBottom: Size.col05 }]}>
                    <Text style={Style.buttonText}>Configuración</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.button}>
                    <Text style={Style.buttonText}>Salir</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: Size.col1,
        marginBottom: Size.col05
    },
    Text: {
        fontSize: Size.text,
        marginLeft: Size.col05,
        marginBottom: Size.col05 / 2
    }
});
