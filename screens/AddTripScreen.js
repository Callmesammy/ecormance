import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ScreenWrapper from './../components/ScreenWrapper';
import { themes } from './../themes/theme';
import { Image } from 'react-native';
import Reverse from '../components/Reverse';
import { useNavigation } from '@react-navigation/native';

export default function AddTripScreen() {
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

    <View className=" flex ju stify-betweeb h-full mx-4">
      <View>          

        <View className="relative mt-5">    
              <Text className={`${themes.heading} font-bold text-xl  text-center`}>Add Trip</Text>
          <View className="absolute top-0  left-0">
            <Reverse />
          </View>    

        <View className="flex-row  justify-center my-3 mt-5">
          <Image source={require('./../assets/images/4.png')} className="w-72 2 h-72 object-contain"/>
        </View>
        
        <View className="space-y-2 justify-center my-3 mt-5 ">
          <Text className={`${themes.heading} text-2xl font-bold`}>Let's plan your trip </Text>
          <Text className={`${themes.heading}  font-semibold text-xl `}>Where are you travelling to?</Text>
          <TextInput value={country} onChangeText={value=> useCountry(value)} placeholder="Enter country destination here.." className="rounded-full bg-white p-4 mb-4"/>
            <Text className={`${themes.heading} font-semibold text-xl `}>Reason for travelling?</Text>
          <TextInput value={reason} onChangeText={value=> useReason(value)} placeholder="Vacation, retreat etc..." className="rounded-full p-4 bg-white mb-4"/>

        </View>
       <View className="top-8">
         <TouchableOpacity onPress={travelTips} className="bg-green-500 p-4 mb-3 rounded-full shadow-sm">
          <Text className={`${themes.Clp} font-bold text-xl text-center`}>  Add Trip    </Text>
        </TouchableOpacity> 
        </View> 
        </View>
          
      </View>
    
    </View>
    
        </ScreenWrapper>

  )
}