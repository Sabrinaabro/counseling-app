import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import SignupScreen from './Screens/SignUpScreen';
import ProfileScreen from './Screens/ProfileScreen';
import PaymentsScreen from './Screens/PaymentsScreen';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import Navbar from './components/Navbar';
import CounselingScreen from './Screens/CounselingScreen';
import { onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';
import PsychometricTestScreen from 'Screens/PsychometricTestScreen';
import ProfileAinab from 'Screens/ProfileAinab';
import ProfileAreeba from 'Screens/ProfileAreeba';
import MeetupScreen from 'Screens/MeetupScreen';

const Stack = createStackNavigator();

const App = () => {
  const [user, setUser] = useState(null); // Initialize user as null

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user', user);
      setUser(user);
    });

    return () => unsubscribe(); // Cleanup the subscription on unmount
  }, []);

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <IconRegistry icons={EvaIconsPack} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Counseling" component={CounselingScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Payments" component={PaymentsScreen} />
          <Stack.Screen name="Navigation" component={Navbar} />
          <Stack.Screen name="Test" component={PsychometricTestScreen} />
          <Stack.Screen name="AinabProfile" component={ProfileAinab} />
          <Stack.Screen name="AreebaProfile" component={ProfileAreeba} />
          <Stack.Screen name="Meetup" component={MeetupScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
};

export default App;
