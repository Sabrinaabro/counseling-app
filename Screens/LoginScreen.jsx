import React from 'react';
import {View, Text, Image, Button} from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Login Screen</Text>
      <Button 
      title='Go to Home'
      onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}

export default LoginScreen