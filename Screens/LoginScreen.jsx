import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Input, Button } from '@ui-kitten/components';
import { LinearGradient } from 'expo-linear-gradient';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <LinearGradient
      colors={['#7BAFD4', '#B9D9EB']}
      style={styles.gradientBackground}
    >
      <Text category="h1" style={styles.heading}>
        Log In
      </Text>
      
      <View style={styles.formContainer}>
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
        
        <Button style={styles.loginButton} size='large' onPress={() => navigation.navigate('Counseling')}>
          Log In
        </Button>
      </View>
      
      <Button appearance='ghost' style={styles.signUpLink} onPress={() => navigation.navigate('Signup')}>
        Don't have an account? Sign Up
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
  loginButton: {
    backgroundColor: '#f8a444',
    borderRadius: 25,
    marginTop: 20,
  },
  signUpLink: {
    marginTop: 20,
    alignSelf: 'center',
    color: '#666',
  },
});

export default LoginScreen;
