import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Input, Button } from '@ui-kitten/components';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons'; // For Google icon

const SignUpScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <LinearGradient
      colors={['#7BAFD4', '#B9D9EB']}
      style={styles.gradientBackground}
    >
      <Text category="h1" style={styles.heading}>
        Sign Up
      </Text>
      
      <View style={styles.formContainer}>
        <Input
          label={(evaProps) => <Text {...evaProps} style={styles.label}>First Name</Text>}
          placeholder='Enter your first name'
          value={firstName}
          onChangeText={setFirstName}
          style={styles.input}
        />
        
        <Input
          label={(evaProps) => <Text {...evaProps} style={styles.label}>Last Name</Text>}
          placeholder='Enter your last name'
          value={lastName}
          onChangeText={setLastName}
          style={styles.input}
        />

        <Input
          label={(evaProps) => <Text {...evaProps} style={styles.label}>Email</Text>}
          placeholder='Enter your email'
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        
        <Input
          label={(evaProps) => <Text {...evaProps} style={styles.label}>Password</Text>}
          placeholder='Enter your password'
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry={true}
        />
        
        <Button style={styles.signUpButton} size='large' onPress={() => navigation.navigate('Login')}>
          Sign Up
        </Button>
      </View>
      
      <View style={styles.googleSignUpContainer}>
        <Button 
          appearance='ghost' 
          accessoryLeft={() => <Ionicons name="logo-google" size={24} color="#f8a444" />} 
          style={styles.googleButton}
          onPress={() => { /* handle Google sign-up logic */ }}
        >
          Sign Up with Google
        </Button>
      </View>

      <Button appearance='ghost' style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
        Already have an account? Log In
      </Button>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 60,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#f8a444',
    marginBottom: 40,
  },
  formContainer: {
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  label: {
    color: '#4e4c51',
    fontSize: 16,
    marginBottom: 5,
  },
  signUpButton: {
    backgroundColor: '#f8a444',
    borderRadius: 25,
    marginTop: 20,
  },
  googleSignUpContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  googleButton: {
    width: '80%',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#f8a444',
  },
  loginLink: {
    marginTop: 20,
    alignSelf: 'center',
    color: '#666',
  },
});

export default SignUpScreen;
