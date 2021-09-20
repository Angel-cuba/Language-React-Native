import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeA1 from '../screensA1/HomeA1'
import HomeA2 from '../screensA2/HomeA2'
import HomeB1 from '../screenB1/HomeB1'
import HomeB2 from '../screenB2/HomeB2'

const BottomTab = createBottomTabNavigator()

const Content = () => {
     return (
     //     <NavigationContainer>
       

        <BottomTab.Navigator>
          <BottomTab.Screen name="HomeA1" component={HomeA1}/>
          <BottomTab.Screen name="HomeA2" component={HomeA2}/>
          <BottomTab.Screen name="HomeB1" component={HomeB1}/>
          <BottomTab.Screen name="HomeB2" component={HomeB2}/>


        </BottomTab.Navigator>
//     </NavigationContainer>
     )
}

export default Content
