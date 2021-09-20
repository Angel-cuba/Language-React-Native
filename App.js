import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from './components/HomeScreen'
import Content from './components/Content'

const Stack = createNativeStackNavigator()

const BottomTab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>

          <Stack.Screen name="Home" component={HomeScreen} options={
            ({navigation})=> ({
               headerStyle: { backgroundColor: "#1d2951"}, 
                                headerTitleStyle: { color: "#ffffff"}, 
                                headerRight: () => (
                                  <TouchableOpacity onPress={ () => navigation.navigate('Content')} >
                                    <Text style={styles.text}>
                                      Content
                                    </Text>
                                  </TouchableOpacity>
                                )
            })
          }/>
          <Stack.Screen name="Content" component={Content} />
       
        </Stack.Navigator>
    </NavigationContainer>
   
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  }
});
