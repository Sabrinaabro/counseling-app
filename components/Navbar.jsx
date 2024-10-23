import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { useTheme } from 'react-native-paper';
import { Text, View } from 'react-native';
import ProfileScreen from '../Screens/ProfileScreen';
import PaymentsScreen from '../Screens/PaymentsScreen';
import CounselingScreen from '../Screens/CounselingScreen';


const Tab = createBottomTabNavigator();

const Navbar = () => {
  const theme = useTheme();  // Get current theme from React Native Paper

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Counseling') {
            iconName = 'account-group-outline';
          } else if (route.name === 'Profile') {
            iconName = 'account-circle-outline';
          } else if (route.name === 'Payments') {
            iconName = 'credit-card-outline';
          }

          // Return the icon component
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: theme.colors.background }, // Style the bar
      })}
    >
      <Tab.Screen name="Counseling" component={CounselingScreen} />
      <Tab.Screen name="Payments" component={PaymentsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default Navbar;
