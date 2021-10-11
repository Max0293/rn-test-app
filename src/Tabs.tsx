import React, { useEffect } from 'react';

import { StackActions } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Feeds } from "../src/Feeds";
import { Profile } from "../src/Profile";
import { AuthService, authService } from './services/auth.service';
import { state } from './AppState';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { loginPushAction, loginReplaceAction } from './Navigations';
import { useDispatch, useSelector } from 'react-redux';


const Tab = createMaterialTopTabNavigator();

export const MyTabs = ({navigation}) => {
    const dispatch = useDispatch();
    const select = useSelector(s => s.state);
    const auth = new AuthService(dispatch, select);
    
        useEffect(() => {
            if(!auth.isLoggedIn()) {
                navigation.dispatch(loginReplaceAction);
            }
        }, [])
    

    return ( 
        <Tab.Navigator>
            <Tab.Screen name="FEEDS" component={Feeds} />
            <Tab.Screen name="PROFILE" component={Profile} />
        </Tab.Navigator>
        )
  }