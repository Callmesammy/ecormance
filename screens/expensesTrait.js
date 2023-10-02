import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ScreenWrapper from './../components/ScreenWrapper';
import { themes } from './../themes/theme';
import { Image } from 'react-native';
import Reverse from '../components/Reverse';
import { useNavigation } from '@react-navigation/native';

export default function expensesTrait() {
  const [country, useCountry] = useState('');
  const [reason, useReason] = useState('');

  const navigation = useNavigation();
  const travelTips = ()=>{
    if (country && reason){
      navigation.navigate('Home');
    }else{
      //
    }
  }
  return (
    <ScreenWrapper>

    <View className=" flex justify-between h-full mx-4">
      <View>          

        <View className="relative mt-5">    
              <Text className={`${themes.heading} font-bold text-xl  text-center`}>Add Expenses</Text>
          <View className="absolute top-0  left-0">
            <Reverse />
          </View>    

        <View className="flex-row  justify-center my-3 mt-5">
          <Image source={require('./../assets/images/5.png')} className="w-72 2 h-72 object-contain"/>
        </View>
        
        <View className="space-y-2 justify-center my-3 mt-5 ">
          <Text className={`${themes.heading}  font-semibold text-xl `}>How much is your budget?</Text>
          <TextInput value={country} onChangeText={value=> useCountry(value)} placeholder="Enter amount here.." className="rounded-full bg-white p-4 mb-4"/>
            <Text className={`${themes.heading} font-semibold text-xl `}>How much are you spending?</Text>
          <TextInput value={reason} onChangeText={value=> useReason(value)} placeholder="Enter amount here.." className="rounded-full p-4 bg-white mb-4"/>
        </View>
      
        </View> 
       
          
      </View>
      <View className="">
         <TouchableOpacity onPress={travelTips} className="bg-green-500 p-4 mb-3 rounded-full shadow-sm">
          <Text className={`${themes.Clp} font-bold text-xl text-center`}>  Add Expense    </Text>
        </TouchableOpacity> 
        </View>
    </View>
    
        </ScreenWrapper>

  )
}