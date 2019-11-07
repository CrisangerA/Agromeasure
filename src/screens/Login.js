import React, { useState } from 'react';
import { Text, View, ScrollView, TextInput, TouchableOpacity, ImageBackground, StatusBar, } from 'react-native';
import { Style, Colors, Size, height } from '../Layout';

export default function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <ScrollView style={Style.container}>
            <StatusBar barStyle="light-content" backgroundColor={Colors.Button} />            
            <View>
                <ImageBackground source={require('../assets/image-login.jpg')} style={{ width: Size.col12, height: height, marginBottom: Size.col1 }} >
                    <Text style={Style.title}> Agromeasure </Text>
                    <View style={[Style.form, { marginTop: Size.col10 }]}>
                        <TextInput
                            placeholder="Correo electronico o Usuario"
                            placeholderTextColor={Colors.Withe}
                            onChangeText={(text) => setEmail(text)}                            
                            style={Style.input}
                            value={email}
                        />
                        <TextInput                            
                            placeholder="Contraseña"
                            placeholderTextColor={Colors.Withe}
                            onChangeText={(text) => setPassword(text)}
                            style={Style.input}
                            value={password}
                            secureTextEntry
                        />
                        <TouchableOpacity onPress={() => props.navigation.navigate('Terreno')}>
                            <View style={Style.button}>
                                <Text style={Style.buttonText}>Ingresar</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        </ScrollView>
    )
}