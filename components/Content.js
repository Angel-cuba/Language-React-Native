import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'

import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// import { BlurView } from 'expo-blur';
//Importing Icons library
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
         const tabLabel = route.name
     //     console.log(tabLabel)
        const isFocused = state.index === index;
     //    console.log(isFocused)

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
                  color: isFocused ? '#b02e0c' : '#09203f', 
                  ...styles.bottomTabColor
                  }}>
                       <Text>
                           <MaterialCommunityIcons name={tabLabel.toLowerCase()} size={40} />    
                       </Text>
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
     
          <BottomTab.Screen name="Bone" component={HomeA1} options={{
               headerStyle: {
                     backgroundColor: '#a71d31',
                      },
                      headerTitleStyle: {
                           fontWeight: 'bold'
                      },
               title: 'Primera',
               headerTintColor: 'white',
               headerRight: () => (
                                   <Text style={styles.text}>A1 🐢</Text>
                               )
               
          }}/>
          <BottomTab.Screen name="Bike-fast" component={HomeA2} options={{
               headerStyle: {
                     backgroundColor: '#233329',
                      },
                      headerTitleStyle: {
                           fontWeight: 'bold'
                      },
               title: 'Primera',
               headerTintColor: 'white',
               headerRight: () => (
                                   <Text style={styles.text}>A2 🐭</Text>
                               )
               
          }}/>
          <BottomTab.Screen name="Run-fast" component={HomeB1}  options={{
               headerStyle: {
                     backgroundColor: '#233329',
                      },
                      headerTitleStyle: {
                           fontWeight: 'bold'
                      },
               title: 'Primera',
               headerTintColor: 'white',
               headerRight: () => (
                                   <Text style={styles.text}>B1 🐾</Text>
                               )
               
          }}/>
          <BottomTab.Screen name="Lastpass" component={HomeB2} options={{
               headerStyle: {
                     backgroundColor: '#233329',
                      },
                      headerTitleStyle: {
                           fontWeight: 'bold'
                      },
               title: 'Primera',
               headerTintColor: 'white',
               headerRight: () => (
                                   <Text style={styles.text}>B2 🕸</Text>
                               )
               
          }}/>


        </BottomTab.Navigator>
//     </NavigationContainer>
     )
}
const styles = StyleSheet.create({
     text: {
          color: '#ee9617',
          fontWeight: 'bold',
          marginRight: 30,
          fontSize: 40
     },
     bottomTab: {
          position: 'absolute',
          bottom: 6,
          left: 6,
          right: 6,
          flexDirection: 'row', 
          justifyContent: "center",
          backgroundColor: '#ffcfdf', 
          borderTopWidth: 1,
          borderTopColor: 'rgba(0,0,0,.11234)',
          borderLeftWidth: 7,
          borderLeftColor: 'rgba(0,0,0,.0234)',
          borderRightWidth: 7,
          borderRightColor: 'rgba(0,0,0,.0234)',
          height: 50,
          paddingLeft: 8,
          paddingTop: 3,
          borderRadius: 14,
          // Shadows
          shadowColor: 'green',
          shadowOffset:{
               width: 0,
               height: 14
          },
          shadowOpacity: 0.5,
          shadowRadius: 5,
          elevation: 10
     },
     labeltext:{
          fontSize: 10,
          fontWeight: 'bold',
          paddingLeft: 20,
          display: 'flex',
          flexDirection: 'column',
     },
     bottomTabColor:{
          display: 'flex',
          justifyContent: 'flex-start',
          flexDirection: 'column-reverse'
          
     },
})

export default Content
