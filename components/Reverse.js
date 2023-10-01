import React from 'react'
import { TouchableOpacity } from 'react-native'
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { themes } from '../themes/theme';
import { useNavigation } from '@react-navigation/native';

 export default function Reverse() {
    const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()} className="bg-white rounded-full w-10 h-9">
    <ChevronLeftIcon size="32" color={themes.Clx}/>
    </TouchableOpacity>
  )
}
