// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import AddTripScreen from './screens/AddTripScreen';
import AddExpenseScreen from './screens/AddExpenseScreen';
import TripExpenses from './screens/TripExpenses';
import Expenses from './screens/Expenses.js';
import expensesTrait from './screens/expensesTrait';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
        <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
        <Stack.Screen name="AddTrip" options={{headerShown: false}} component={AddTripScreen} />
        <Stack.Screen name="AddExpense" options={{headerShown: false}} component={AddExpenseScreen} />
        <Stack.Screen name="TripExpenses" options={{headerShown: false}} component={AddExpenseScreen} />
        <Stack.Screen name="Exp" options={{headerShown: false}} component={Expenses} />
        <Stack.Screen name="Traits" options={{headerShown: false}} component={expensesTrait} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;