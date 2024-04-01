//react-native-safe-area-context
//react-native-screens
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import auth from './Firebase'

import Dashboard from './Dashboard';

export default function LoginForm() {
  const navigation = useNavigation();

  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user)
        console.log(user.email + 'blabluobli');
    })
  })

  useEffect(() => {
    const setEmailInput = async () => {
      const emailInput = await AsyncStorage.getItem('email');

      if (emailInput)
        SetEmail(emailInput)
    }

    setEmailInput();
  }, [])

  const changeAndSaveEmail = async (text) => {
    SetEmail(text);
    await AsyncStorage.setItem('email',email);
    const value = await AsyncStorage.getItem('email');
    console.log('Value Retrieved: ' + value);
  }

//   const changeAndSavePassword = async (text) => {
//     SetPassword(text);
//     await AsyncStorage.setItem('password',password);
//   }

//   const login = () => {
//     if (email == 'admin@gmail.com' && password == 'admin123') {
//       console.log('Correct credentials, taking to dashboard');
//       navigation.navigate('dashboard');      
//     }
//     else {
//       console.log('Incorrect credentials, printing an alert');
//       Alert.alert('Incorrect Credentials', 'please provide correct credentials');
//     }
//   }

  const loginWithFirebase = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user.user.email);
      console.log(' '); 
      if (user.user.email == 'admin@gmail.com') {
        navigation.navigate('dashboard');
      } else {
        navigation.navigate('home');
      }
    } catch (error) {
      console.log('Authentication error');
      Alert.alert('Incorrect Credentials', 'please provide correct credentials');
    }
  }

  const signupWithFirebase = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User creation successful');
    } catch (error) { 
      console.log('User creation unsuccessful');
      Alert.alert('Incorrect Credentials', 'please provide correct credentials');
    }
  }

  return (
  <View style={styles.container}>
    <View style={styles.container1}>
      <View style={styles.row}>
            <Text style={styles.text}>Email: </Text>
            <TextInput
                style={{borderColor:global.l1, width: 150, height: 20, borderWidth: 1, color: l1}}
                placeholder='Ali@gmail.com'
                onChangeText={(email) => changeAndSaveEmail(email)}
                value={email}
            />
        </View>
        <View style={styles.row}>
            <Text style={styles.text}>Password: </Text>
            <TextInput
                style={{borderColor:global.l1, width: 150, height: 20, borderWidth: 1, color: l1}}
                placeholder='*******'
                onChangeText={SetPassword}
                value={password}
            />
        </View>
    </View>

    <View style={{flexDirection:'row'}}>
      <TouchableOpacity 
        style={{backgroundColor: global.d1, flex:0.5, borderRadius: 10, margin: 5}}
        onPress = {loginWithFirebase}
      >
        <View style={{alignItems: 'center', padding: 5, borderRadius: 20}}>
          <Text style={styles.text}>Login</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity 
        style={{backgroundColor: global.d1, flex:0.5, borderRadius: 10, margin: 5}}
        onPress={signupWithFirebase}  
      >
        <View style={{alignItems: 'center', padding: 5}}>
          <Text style={styles.text}>Signup</Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>
   );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: global.d3
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingBottom: 10
  }, 
  text: {
    color: global.l1
  },
  container1: {
    paddingTop: 10,
    backgroundColor: global.d2
  }
});
