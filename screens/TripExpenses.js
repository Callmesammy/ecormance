import { View, Text, TouchableOpacity, Image, FlatList, Touchable } from 'react-native'
import React from 'react'
import ScreenWrapper from './../components/ScreenWrapper';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { randomImages } from './../assets/images/randonImage';
import EmptyComponent from '../components/EmptyComponent';
import { useNavigation } from '@react-navigation/native';

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
      <Text className={`${Colors.heading} text-2xl font-bold shadow-sm`}>HomeScreen</Text>
      <TouchableOpacity className="border border-white rounded-full px-3 p-2 bg-white " >
        <Text className={`${Colors.button} text-sm`}>Logout</Text>
      </TouchableOpacity>
    </View>
    <View className="items-center justify-center bg-red-300 rounded-md mx-2 mb-2">
    <Image source={require('./../assets/images/banner.png')} className="w-60 h-60 object-contain" />
    </View>
    <View className="px-3 bg-white mx-2 shadow-black rounded-lg p-2 ">
    <View className="flex-row items-center justify-between">
      <Text className={`${Colors.heading} text-xl font-bold`}>View All</Text>
      <TouchableOpacity 
      onPress={() => navigation.navigate('AddTrip')}
    className="border border-white rounded-full mb-2 bg-black px-3 p-2">
        <Text className="text-sm text-white  font-semibold">Add Trips</Text>
      </TouchableOpacity>
    </View>
    </View>
    <View style={{height: 430}}>
      <FlatList 
      data={items}
      keyExtrator={item =>item.id}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={<EmptyComponent message={'Page not found :('}/>}
      columnWrapperStyle={{justifyContent: 'space-between'}}
      className="px-3"

      renderItem={({item}) => {
        return (
          <TouchableOpacity onPress={()=>navigation.navigate('TripExpenses')} className="bg-white rounded-md mb-2 p-3 mx-2 shadow-sm my-2"> 
            <View >
            <Image source={randomImages()} className="w-40 h-40 mb-2object-contain" />
            <Text className={`${Colors.heading} font-bold`}> {item.place}</Text>
            <Text className={`${Colors.heading} text-xs`}> {item.country}</Text>
            </View>
          </TouchableOpacity>
        )
      }}
      />
    </View>
    </ScreenWrapper>
    
  )
}