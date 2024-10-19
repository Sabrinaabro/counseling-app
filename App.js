import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screens/HomeScreen';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import LoginScreen from './Screens/LoginScreen';
import SignupScreen from './Screens/SignUpScreen';


const Stack = createStackNavigator(); 

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} /> 
    </Stack.Navigator>
  </NavigationContainer>
  </ApplicationProvider>
  

  );
};

export default App;