import React from 'react'
import { View, StyleSheet } from 'react-native'

const ContentLayout = ({  children }) => {
     return (
          <View style={styles.container}>
                    { children }
          </View>
     )
}
const styles = StyleSheet.create({
     container: {
             backgroundColor: '#fb8085',
             height: '100%',
               // padding: 10,
     },
         text:{
               textAlign: 'right',
               padding: 10,
          }
})

export default ContentLayout
