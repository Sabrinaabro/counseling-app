import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {View, Text, Image, ScrollView, TextInput, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screens/HomeScreen';

// const HomeScreen = ({ navigation }) => {
//   return(
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//       <Button 
//       title='Go to Login'
//       onPress={() => navigation.navigate('Login')}
//       />
//     </View>
//   );
// };

const Stack = createStackNavigator(); 

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Logout" component={LogoutScreen} /> */}
    </Stack.Navigator>
  </NavigationContainer>

//     {/* <ScrollView>
//       <Text>Some extra text</Text>
//       <View style={{ backgroundColor: 'lightgray', padding: 10 }}>
//   <Text>Some more text</Text>
//   <Image
//     source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }}
//     style={{ width: 200, height: 200 }}
//   />
// </View>
//       <TextInput
//         style={{
//           height: 40,
//           borderColor: 'gray',
//           borderWidth: 1,
//         }}
//         defaultValue="You can type in me"
//        />
//     </ScrollView> */}
  );
};

export default App;