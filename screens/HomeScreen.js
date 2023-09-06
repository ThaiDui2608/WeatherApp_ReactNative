import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, Text, SafeAreaView, Image } from 'react-native'

const HomeScreen = () => {
  return (
    <View className="flex-1 relative">
      <StatusBar style='light'/>
      <Image source={require('../assets/images/bg.png')} className='absolute h-full w-full'/>
    </View>
  )
}

export default HomeScreen