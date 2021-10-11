//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from "./src/Login";
import { AuthService } from './src/services/auth.service';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ScreenStackHeaderBackButtonImage, ScreenStackHeaderLeftView } from 'react-native-screens';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { MyTabs } from './src/Tabs';
import { persistor, state } from './src/AppState';
import { PersistGate } from 'redux-persist/integration/react';


const Stack = createNativeStackNavigator();



// function reducers(state = {}, action: any): any{
//   switch(action.type) {
//     case 'Is Logged In':
//       return false;
//     default:
//       return state;
//   }
// }


// const storage = createStore(reducers);

// const authService = new AuthService(storage);

export default function App() {
//authService.isLoggedIn() ? isInitScreenLogIn='TABS' : isInitScreenLogIn='LOGIN';

  return (
  <Provider store={state}>
    <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TABS">
          <Stack.Group screenOptions={{presentation: 'fullScreenModal'}}>
            <Stack.Screen name='LOGIN' component={Login} ></Stack.Screen> 
          </Stack.Group>
          <Stack.Group>
            <Stack.Screen name='TABS' component={MyTabs} ></Stack.Screen>
          </Stack.Group>
        </Stack.Navigator>     
      </NavigationContainer>
    </PersistGate>
  </Provider>
    // <Provider store={storage}>
    //   <NavigationContainer>
    //     {authService.isLoggedIn() ? (
    //       <Tab.Navigator>
    //         <Tab.Screen name='FEEDS' component={Feeds}/>
    //         <Tab.Screen name='PROFILE' component={Profile}/>       
    //       </Tab.Navigator>
    //     ) : (
    //     <Stack.Navigator>
    //       <Stack.Screen name='LOGIN' component={Login}/>
    //       <Stack.Group screenOptions={{presentation: 'modal'}}>
    //       <Stack.Screen name='FEEDS' component={Feeds}></Stack.Screen>
    //       <Stack.Screen name='PROFILE' component={Profile}></Stack.Screen>
    //       </Stack.Group>
    //   </Stack.Navigator> )}
    // </NavigationContainer>
    // </Provider>
  
  );
}

