import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeContainer from '../Screens/Home/HomeContainer';
import { createStackNavigator } from '@react-navigation/stack';
import DetailContainer from '../Screens/Detail/DetailContainer';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator   screenOptions={{headerShown: false}}
    >
      <Stack.Screen  name="Home" component={HomeContainer} />
      <Stack.Screen name="Detail" component={DetailContainer} />
    </Stack.Navigator>
  );
}


export default function App() {
    return (
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    );
}