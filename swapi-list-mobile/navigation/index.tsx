import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { CharacterListScreen } from '../screens/characterList/CharacterListScreen';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../utils/models/types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation() {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={CharacterListScreen} options={{headerShown:false}}/>
      {/* <Stack.Screen name="Details" component={CharacterListScreen} options={{headerShown:false}}/> */}
      <Stack.Screen name="NotFound" component={NotFoundScreen}/>
    </Stack.Navigator>

  );
}
