import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'

const HomeScreen = () => {
  return (
    <View className="flex-1 relative">
        <StatusBar style='light'/>
        <Image blurRadius={70} source={require('../assets/images/bg.png')} className='absolute h-full w-full'/>
    </View>
  )
}

export default HomeScreen