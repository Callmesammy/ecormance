import { View, Text } from 'react-native'
import React from 'react'
import { themes } from '../themes/theme'



export default function Expenses({item}) {
  return (
    <View style={{backgroundColor: colo}} className=" flex-row shadow-sm justify-between mx-2 items-center p-4  mb-3  rounded-2xl bg-green-400 px-3 " >
      <View >
        <Text className={`${themes.Clx} font-bold`}>{item.desciption}</Text>
        <Text className={`${themes.Clx} text-xs`}>{item.basics}</Text>
      </View>
      <View>
        <Text className={`${themes.Clx} font-bold`}>N {item.amount}</Text>
      </View>
    </View>
  )
}