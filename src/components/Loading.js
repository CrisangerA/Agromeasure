import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { Colors, Size } from '../Layout';

export default function Loading() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size={Size.col4} color={Colors.Button} />            
            <Text style={{ fontSize: Size.text }}>Loading...</Text>
        </View>
    )
}