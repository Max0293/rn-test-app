import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loginReplaceAction } from './Navigations';
import { AuthService } from './services/auth.service';
import { GetProfileService } from './services/getProfile.service';



export const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const select = useSelector(s => s.state);
  const auth = new AuthService(dispatch, select);
  const getProfileService = new GetProfileService();
  const [prof, setProf] = useState('');

    const logOut = () => {
      auth.logOut();
      navigation.dispatch(loginReplaceAction);
    };

    useEffect(() => {
      getProfileService.getProfile()
      .then(res => res.json())
      .then(prof => {
        setProf(prof);
      })
      .catch(err => console.error(err));
    }, []);
    
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: prof?.data?.avatar}}></Image>
        <Text>{prof?.data?.first_name}</Text>
        <Text>User: {auth.getUser()}</Text>
        <Button onPress={logOut} title="Log Out"></Button>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width:120,
      height: 120,
    }
  });