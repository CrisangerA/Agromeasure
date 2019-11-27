import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, StatusBar } from 'react-native'
import { Size, Colors, Style } from '../Layout';

export default class Terreno extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View>
                <View style={{ marginBottom: Size.col05, shadowColor: Colors.Black, shadowRadius: 10, shadowOffset: { height: 20, width: 20 }, elevation: 5 }}>
                    <StatusBar barStyle='dark-content' backgroundColor={Colors.Button} />
                    <Image source={JSON.stringify(navigation.getParam('image', 'default value'))} style={Style.imageHeader} />
                </View>
                <View style={{marginLeft: Size.col1}}>
                    <Text style={{fontSize: Size.title}}>
                        {navigation.getParam('title', 'default value')}
                    </Text>
                    <Text style={Style.text}>
                        {navigation.getParam('description', 'default value')}
                    </Text>
                    <Text style={Style.text}>
                        {navigation.getParam('date', 'default value')}
                    </Text>
                    <Text style={Style.text}>
                        {navigation.getParam('state', 'default value')}
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({})