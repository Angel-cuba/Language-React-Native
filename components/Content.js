import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'

import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// import { BlurView } from 'expo-blur';

import HomeA1 from '../screensA1/HomeA1'
import HomeA2 from '../screensA2/HomeA2'
import HomeB1 from '../screenB1/HomeB1'
import HomeB2 from '../screenB2/HomeB2'


const BottomTab = createBottomTabNavigator()

const Content = () => {

     function MyTabBar({ state, descriptors, navigation }) {
         
  return (
    <View style={styles.bottomTab}>
      {state.routes.map((route, index) => {
          //  console.log(state)
        const { options } = descriptors[route.key];
     //    console.log(options)
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
            key={route.key}
          >
            <Text style={{
                  color: isFocused ? '#a71d31' : 'blue', 
                  }}>
                 <Text style={styles.labeltext}>
                       {label}
                 </Text>
             
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
     return ( 

        <BottomTab.Navigator tabBar={props => <MyTabBar {...props} />}>
     
          <BottomTab.Screen name="HomeA1" component={HomeA1} options={{
               headerStyle: {
                     backgroundColor: 'green',
                      },
                      headerTitleStyle: {
                           fontWeight: 'bold'
                      },
               title: 'First level',
               headerTintColor: 'white',
               headerRight: () => (
                                   <Text style={styles.text}>A1r 🐢</Text>
                               )
               


          }}/>
          <BottomTab.Screen name="HomeA2" component={HomeA2}/>
          <BottomTab.Screen name="HomeB1" component={HomeB1}/>
          <BottomTab.Screen name="HomeB2" component={HomeB2}/>


        </BottomTab.Navigator>
//     </NavigationContainer>
     )
}
const styles = StyleSheet.create({
     text: {
          color: 'yellow',
          fontWeight: 'bold',
          marginRight: 30,
          fontSize: 40
     },
     bottomTab: {
          position: 'absolute',
          bottom: 16,
          left: 6,
          right: 6,
          flexDirection: 'row', 
          justifyContent: "center",
          backgroundColor: 'white', 
          borderTopColor: 'transparent',
          height: 60,
          paddingLeft: 20,
          paddingTop: 18,
          borderRadius: 4,
          // Shadows
          shadowColor: 'red',
          shadowOffset:{
               width: 10,
               height: 14
          },
          shadowOpacity: 0.25,
          shadowRadius: 5,
          elevation: 8
     },
     labeltext:{
          //  width: '80%', 
          fontSize: 15,
          fontWeight: 'bold',
          paddingLeft: 20,
     },
     bottomTabColor:{
          backgroundColor: 'red',
          color: 'blue',
     }
})

export default Content
