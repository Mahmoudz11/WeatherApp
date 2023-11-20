import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home/Home'
import { NavigationContainer } from '@react-navigation/native';

export type StackParams = {
  Home : any
}

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator 
        screenOptions={{headerShown : false}}
        >
      <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator
