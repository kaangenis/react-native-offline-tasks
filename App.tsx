//Imports
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-reanimated'
import 'react-native-gesture-handler'

//Routes

//Redux
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import Splash from './src/Routes/Splash/Splash';
import Homepage from './src/Routes/Homepage/Homepage';
import Login from './src/Routes/Login/Login';

//Creating Stack Navigator
const Stack = createNativeStackNavigator();


//Talk is cheap, show me the code!
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName='Onboarding'>
          <Stack.Screen
            options={{ animation: 'fade_from_bottom' }}
            name="Splash"
            component={Splash} />
          <Stack.Screen
            options={{ animation: 'fade_from_bottom' }}
            name="Login"
            component={Login} />
          <Stack.Screen
            options={{ animation: 'fade_from_bottom' }}
            name="Homepage"
            component={Homepage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}