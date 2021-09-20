import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Layout from './Layout'

const HomeScreen = () => {

     const navigation = useNavigation()
   return (
        <Layout>
               {/* First screen HomeA1 */}
               {/* onPress={() => navigation.navigate('HomeScreen', { screen: 'HomeA1' })} */}
             <TouchableOpacity >   
               <View style={styles.textContainer}>

                     <Text style={styles.text}>Level</Text> 
                     <Text style={styles.innerText}>A-1</Text>

                </View>
             </TouchableOpacity>
                
                  <View style={styles.textContainer}>
                     <Text style={styles.text}>Level</Text> 
                
                <Text style={styles.innerText}>A-2</Text>
                </View>
                  <View style={styles.textContainer}>
                     <Text style={styles.text}>Level</Text> 
                
                <Text style={styles.innerText}>B-1</Text>
                </View>
                  <View style={styles.textContainer}>
                     <Text style={styles.text}>Level</Text> 
                
                <Text style={styles.innerText}>B-2</Text>
                </View>

          </Layout>
   )
     
}
const styles = StyleSheet.create({
     textContainer:{
          color: 'black',
          paddingBottom: 40,
          letterSpacing: 1,
          width: '50%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
     },
     text: {
          color: 'black',
          fontSize: 30,
          fontWeight: 'bold',
     },
     innerText: {
          color: 'rgba(0,0,0,.7)',
          fontSize: 50,
     }
})

export default HomeScreen
