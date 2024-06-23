import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './pages/LoginPage';
import ViewStudent from './pages/ViewStudent';
import StudentsPage from './pages/StudentsPage';
import Sidebar from './components/SideBar';

const Stack = createStackNavigator();

export default function App() {
  const currPage="Sidebar";
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={currPage} screenOptions={{headerShown: false }}>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="SideBar" component={Sidebar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
