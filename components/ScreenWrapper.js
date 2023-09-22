import { View, Text, Platform } from 'react-native'
import React from 'react' 
import { StatusBar } from 'expo-status-bar'


export default function ScreenWrapper({children}) {
  let statusHeight = StatusBar.currentHeight ? StatusBar.currentHeight : Platform.OS === 'ios' ? 30 : 0;
  return (
    <View style={{marginTop: statusHeight}}> 
      {
        children
      }
    </View>
  )
}