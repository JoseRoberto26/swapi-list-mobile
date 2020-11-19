import React from 'react'; 
import { Text, TextStyle, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const CharacterListScreen = () => { 
    return ( 
        <SafeAreaView>
            <Text style={textStyle}>Home inicial</Text>
        </SafeAreaView>
    )
}

const textStyle: TextStyle = { 
    color: 'red'
}