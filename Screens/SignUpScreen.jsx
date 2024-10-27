import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Input, Button } from '@ui-kitten/components';
import { LinearGradient } from 'expo-linear-gradient';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Ionicons } from '@expo/vector-icons';
import { FIREBASE_AUTH, FIRESTORE_DB } from '../FirebaseConfig';
import { doc, setDoc } from "firebase/firestore";

const SignUpScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [loading, setLoading] = useState(false);

  const validateInputs = () => {
    if (!firstName || !lastName || !email || !password || !age) {
      alert("All fields are required.");
      return false;
    }
    if (isNaN(age) || age < 0) {
      alert("Age must be a positive number.");
      return false;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return false;
    }
    return true;
  };

  const signUp = async () => {
    if (!validateInputs()) return;

    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
      console.log(response);

      // Save additional user data to Firestore using setDoc for specific UID
      await setDoc(doc(FIRESTORE_DB, "users", response.user.uid), {
        firstName,
        lastName,
        age,
        email
      });

      alert('Check your email for verification!');
      navigation.navigate('Login');
    } catch (error) {
      console.log(error);
      alert('Registration failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = () => {
    alert("Google Sign-Up is currently under construction.");
    // Implement Google sign-in logic here
  };

  return (
    <LinearGradient colors={['#7BAFD4', '#B9D9EB']} style={styles.gradientBackground}>
      <Text category="h1" style={styles.heading}>Sign Up</Text>
      
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
          label={(evaProps) => <Text {...evaProps} style={styles.label}>Age</Text>}
          placeholder='Enter your age'
          value={age}
          onChangeText={setAge}
          style={styles.input}
          keyboardType="numeric"
        />
        
        <Input
          label={(evaProps) => <Text {...evaProps} style={styles.label}>Password</Text>}
          placeholder='Enter your password'
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
        />
        
        <Button style={styles.signUpButton} size='large' onPress={signUp} disabled={loading}>
          {loading ? "Signing Up..." : "Sign Up"}
        </Button>
      </View>
      
      <View style={styles.googleSignUpContainer}>
        <Button
          appearance='ghost'
          accessoryLeft={() => <Ionicons name="logo-google" size={24} color="#f8a444" />}
          style={styles.googleButton}
          onPress={handleGoogleSignUp}
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
  gradientBackground: { flex: 1, justifyContent: 'center', paddingHorizontal: 20, paddingVertical: 60 },
  heading: { fontSize: 30, fontWeight: 'bold', textAlign: 'center', color: '#f8a444', marginBottom: 40 },
  formContainer: { justifyContent: 'center', paddingHorizontal: 20 },
  input: { marginBottom: 20, backgroundColor: '#fff', borderRadius: 10 },
  label: { color: '#4e4c51', fontSize: 16, marginBottom: 5 },
  signUpButton: { backgroundColor: '#f8a444', borderRadius: 25, marginTop: 20 },
  googleSignUpContainer: { marginTop: 20, alignItems: 'center' },
  googleButton: { width: '80%', borderRadius: 25, borderWidth: 1, borderColor: '#f8a444' },
  loginLink: { marginTop: 20, alignSelf: 'center', color: '#666' },
});

export default SignUpScreen;
