import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './pages/LoginPage';
// import ViewStudent from './pages/ViewStudent';

const Stack = createStackNavigator();

export default function App() {
  const currPage="Login";
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={currPage} screenOptions={{headerShown: true }}>
        <Stack.Screen name="Login" component={LoginPage} />
        {/* <Stack.Screen name="ViewStudent" component={ViewStudent} /> */}
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
