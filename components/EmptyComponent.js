import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

export default function EmptyComponent({message}) {
  return (
    <View className=" space-y-6 flex items-center justify-center">
    <Image source={require('./../assets/images/empty.png')} className="w-60 h-60 object-contain" />
      <Text className="text-gray-500 font-bold">{message|| 'Data not found'}</Text>
    </View>
  )
}