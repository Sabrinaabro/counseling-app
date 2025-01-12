import React from 'react';
import {View, Text, Image, Button} from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button 
      title='Go to Login'
      onPress={() => navigation.navigate('Login')}
      />
    </View>
  )
}

export default HomeScreen