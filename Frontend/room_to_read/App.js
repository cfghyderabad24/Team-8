import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TransactionPage from './pages/inout';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './pages/LoginPage';

const Stack = createStackNavigator();


export default function App() {
  const currPage="Sidebar";
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={currPage} screenOptions={{headerShown: false }}>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Transcation" component={TransactionPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
