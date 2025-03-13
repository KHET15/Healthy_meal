import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setError('');
    // ดำเนินการสมัครสมาชิกต่อไป
  };

  return (
    <View style={{ width: '100%', alignItems: 'center' }}>
      <Text style={styles.title}>Healthy meal</Text>
      <Text style={styles.subtitle}>Register</Text>

      <TextInput
        style={styles.input}
        placeholder="Email / Username"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: width * 0.08,
    fontFamily: 'MM-Bold',
    marginBottom: 5,
    color: 'black',
  },
  subtitle: {
    fontSize: width * 0.06,
    fontFamily: 'MM-Medium',
    marginBottom: 30,
    color: 'black',
  },
  input: {
    width: '90%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  registerButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 12,
    paddingHorizontal: width * 0.2,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  registerButtonText: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    color: 'black',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    fontFamily: 'MM-Regular',
  },
});

export default RegisterForm;
