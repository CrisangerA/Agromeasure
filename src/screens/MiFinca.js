import React, { Component } from 'react'
import { Text, StyleSheet, View, StatusBar, Image, TouchableOpacity } from 'react-native';
// Assets
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Style, Size, Colors } from '../Layout'

export default function MiFinca(props) {
    return (
        <View>
            <View style={{ marginBottom: Size.col05, shadowColor: Colors.Black, shadowRadius: 10, shadowOffset: { height: 20, width: 20 }, elevation: 5 }}>
                <StatusBar barStyle='dark-content' backgroundColor={Colors.Button} />
                <Image source={require('../assets/Semillas.jpg')} style={Style.imageHeader} />
                <Text style={{ position: 'absolute', color: Colors.Withe, fontSize: Size.title, left: 200, top: 50 }}>Mi Finca</Text>
            </View>
            <View style={styles.options}>
                <Option title="Zonas" icon="grid-on" clic={props.navigation} route="T"/>
                <Option title="Semillas" icon="bubble-chart" clic={props.navigation} route="S"/>
            </View>
        </View>
    )
}

function Option(props) {
    return (
        <TouchableOpacity style={styles.button} onPress={() => props.clic.navigate(props.route)}>
            <Icon name={props.icon} size={30} color={Colors.Withe} /><Text style={styles.buttonText}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    options: {
        height: Size.col12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: Colors.Button,
        width: Size.col6,
        height: 80,
        borderRadius: Size.border * 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: Size.col05,
        flexDirection: 'row'
    },
    buttonText: {
        color: Colors.Withe,
        fontSize: Size.textButton,
        marginLeft: 15
    }
})