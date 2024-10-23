import {  Text, Button } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import HomeImage from '../assets/img.png'; 
const HomeScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#7BAFD4', '#B9D9EB']} 
      style={styles.gradientBackground}
    >
  
      <View style={styles.imageContainer}>
        <Image 
          source={HomeImage} 
          style={styles.image} 
          resizeMode="contain"
        />
      </View>

      
      <Text category='h1' style={styles.heading}>
       MentorX
      </Text>
      <Text category='p1' style={styles.subheading}>
       Where mentorship meets career success.
      </Text>

   
      <View style={styles.buttonContainer}>
        <Button style={[styles.button, styles.primaryButton]} size='large' 
        onPress={() => navigation.navigate('Signup')}>
          Sign Up
        </Button>
        <Button style={[styles.button, styles.secondaryButton]} size='large' appearance='outline'
        onPress={() => navigation.navigate('Login')}>
          Log in
        </Button>
        <Button style={[styles.button, styles.secondaryButton]} size='large' appearance='outline'
        onPress={() => navigation.navigate('Navigation')}>
          nav in
        </Button>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 60, 
  },
  imageContainer: {
    flex: 2,  
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  image: {
    width: 350,   
    height: 550,
  },
  heading: {
    flex: 1,
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#f8a444',  
    marginBottom: 10,
  },
  subheading: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    color: '#4e4c51',  
    paddingHorizontal: 40,  
    marginBottom: 60,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40,  
  },
  button: {
    width: 140,  
    marginHorizontal: 10,
    borderRadius: 25, 
  },
  primaryButton: {
    backgroundColor: '#f8a444', 
  },
  secondaryButton: {
    borderColor: '#666', 
    borderWidth: 1,
  },
});

export default HomeScreen;
