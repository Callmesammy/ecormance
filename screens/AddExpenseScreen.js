import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import ScreenWrapper from './../components/ScreenWrapper';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import EmptyComponent from '../components/EmptyComponent';
import { useNavigation } from '@react-navigation/native';
import Reverse from '../components/Reverse';
import Expenses from './Expenses.js';
 

const items = [
  {
    id: 1,
    desciption: 'Journer to Lagos',
    basics: 'Transportation',
    amount: '50,000',
  },
  {
    id: 1,
    desciption: 'Smells Good',
    basics: 'food',
    amount: '70,000',
  },
  {
    id: 1,
    desciption: 'Lets Go to the market',
    basics: 'Shopping',
    amount: '160,000',
  },
  {
    id: 1,
    desciption: 'Journer to Paradise',
    basics: 'Vacation',
    amount: '100,000',
  },
  {
    id: 1,
    desciption: 'Journer to beyound',
    basics: 'commute',
    amount: '60,000',
  },


];
export default function HomeScreen(props) {
  const { id, place, country } = props.route.params;
  const navigation = useNavigation();
  return (
    <ScreenWrapper>
      <View className="relative">
        <View className="px-4 py-3" >
          <Reverse />

        </View>
        <View className=" absolute  p-4 flex-row items-center mb-2 justify-between">

        </View>
        <View>

          <View className="top-2 ">
            <Text className={`${Colors.heading} text-2xl font-bold shadow-sm text-center`}>{place}</Text>
            <Text className={`${Colors.heading} text-sm  shadow-sm text-center`}>{country}</Text>

          </View>
          <View className="items-center justify-center  rounded-md mx-2 mb-2">
            <Image source={require('./../assets/images/9.png')} className="w-60 h-60 object-contain" />
          </View>
          <View className="px-3 bg-white mx-2 shadow-black rounded-lg p-2 ">
            <View className="flex-row items-center justify-between">

              <Text className={`${Colors.heading} text-xl font-bold`}>Exepenses</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Traits')}
                className="border border-white rounded-full mb-2 bg-black px-3 p-2">
                <Text className="text-sm text-white  font-semibold">Add Eexpenses</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ height: 430 }}>
            <FlatList
              data={items}
              ListEmptyComponent={<EmptyComponent message={'No Expenses added yet'} />}
              keyExtrator={item => item.id}
              renderItem={({ item }) => {
                return (
                  <Expenses item={item} />
                )
              }}
            />
          </View>
        </View>
      </View>
    </ScreenWrapper>

  )
}