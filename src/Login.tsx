import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { tabsReplaceAction } from './Navigations';
import { AuthService, authService } from './services/auth.service';

export const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const select = useSelector(s => s.state);
  const auth = new AuthService(dispatch, select);

  const [email, setValue] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState('');

  const validateEmail = (email: string) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  };

  const validatePassword = (password: string) => {
    return !!password && password.length >= 8; 
  }
  

  const pressHandler = () => {
    if(!validateEmail(email)) {
      setErrorText("Incorrect email");
      return;
    }

    if(!validatePassword(password)) {
      setErrorText("Incorrect password");
      return;
    }

    auth.logIn(email)
    navigation.dispatch(tabsReplaceAction);
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.textInput}
        placeholder='Enter your email'

        onChangeText={setValue}
        value={email} />
      <TextInput
        style={styles.textInput}
        secureTextEntry={true}
        placeholder='Enter your password'

        onChangeText={setPassword}
        value={password}
      >
      </TextInput>

      <Text>{errorText}</Text>
      <Button title='Login' onPress={pressHandler}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    padding: 10,
    margin: 3,
    width: '50%',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: 'white'
  },
  block: {
    flex: 1,
    borderColor: '#eee',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
  }
});
