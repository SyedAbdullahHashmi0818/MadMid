import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// global.d1 = '#35374B'
// global.d2 = '#344955'
// global.d3 = '#50727B'
// global.l1 = '#78A083'

global.d1 = '#2B2E4A'
global.d2 = '#53354A'
global.d3 = '#903749'
global.l1 = '#E84545'

import LoginForm from './Login';
import SignUpForm from './Signup';
import Dashboard from './Dashboard';
import HomePage from './Home';
import Main from './MainPage';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen 
          name='main'
          component={Main}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: global.d2
            },
            headerShadowVisible : true,
            headerTitle: "Quran App",
            headerTitleAlign: "center",
            headerTitleStyle: {
              color: global.l1
            },
            headerTintColor : global.d1
          }}
        />  


        <Stack.Screen 
          name='login'
          component={LoginForm}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: global.d1
            },
            headerShadowVisible : true,
            headerTitle: "Login",
            headerTitleAlign: "center",
            headerTitleStyle: {
              color: global.l1
            },
            headerTintColor : global.l1
          }}
        />  

        <Stack.Screen 
          name='dashboard'
          component={Dashboard}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: global.d1
            },
            headerShadowVisible : true,
            headerTitle: "DashBoard",
            headerTitleAlign: "center",
            headerTitleStyle: {
              color: global.l1
            },
            headerTintColor : global.l1
          }}
        />        
        
        <Stack.Screen 
          name='home'
          component={HomePage}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: global.d1
            },
            headerShadowVisible : true,
            headerTitle: "Home-Page",
            headerTitleAlign: "center",
            headerTitleStyle: {
              color: global.l1
            },
            headerTintColor : global.l1
          }}
        />        
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
