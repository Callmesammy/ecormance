import { View, Text, TouchableOpacity, Image, FlatList, Touchable } from 'react-native'
import React from 'react'
import ScreenWrapper from './../components/ScreenWrapper';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { randomImages } from './../assets/images/randonImage';
import EmptyComponent from '../components/EmptyComponent';
import { useNavigation } from '@react-navigation/native';
import Reverse from '../components/Reverse';

export default function HomeScreen() {

  
  const items =[
    {
      id: 1,
      place: 'Lagos',
      country: 'Nigeria',
    },
      {
      id: 2,
      place: 'Kebbi',
      country: 'Nigeria',
    },
      {
      id: 3,
      place: 'Ogun',
      country: 'Nigeria',
    },
      {
      id: 4,
      place: 'Enugu',
      country: 'Nigeria',
    },
      {
      id: 5,
      place: 'Imo',
      country: 'Nigeria',
    },
      {
      id: 6,
      place: 'Osun',
      country: 'Nigeria',
    },
      {
      id: 7,
      place: 'Katsina',
      country: 'Nigeria',
    },
    
  ];
  const navigation = useNavigation();
  return (
    
    <ScreenWrapper>
      <View className="p-4 flex-row items-center mb-2 justify-between">
      <Reverse/>    
    </View>
    <View className="items-center justify-center  rounded-md mx-2 mb-2">
    <Image source={require('./../assets/images/9.png')} className="w-60 h-60 object-contain" />
    </View>
    <View className="px-3 bg-white mx-2 shadow-black rounded-lg p-2 ">
    <View className="flex-row items-center justify-between">
      <Text className={`${Colors.heading} text-xl font-bold`}>Exepenses</Text>
      <TouchableOpacity 
      onPress={() => navigation.navigate('AddTrip')}
    className="border border-white rounded-full mb-2 bg-black px-3 p-2">
        <Text className="text-sm text-white  font-semibold">Add Eexpenses</Text>
      </TouchableOpacity>
    </View>
    </View>
    <View style={{height: 430}}>
      <FlatList 
      data={items}
      keyExtrator={item =>item.id}
    

      renderItem={({}) => {
        return (
          <TouchableOpacity onPress={()=>navigation.navigate('TripExpenses')} className="bg-white rounded-md mb-2 p-3 mx-2 shadow-sm my-2"> 
            <View >
           
            </View>
          </TouchableOpacity>
        )
      }}
      />
    </View>
    </ScreenWrapper>
    
  )
}