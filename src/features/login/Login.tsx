import React, { useContext, useState } from 'react';
import { View, SafeAreaView, StatusBar, Text, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector, useDispatch } from 'react-redux';
import Input from '../../components/MyInput';
import Button from '../../components/Button';
import TextButton from '../../components/TextButton';
import ErrorText from '../../components/ErrorText';

const Login = () => {
  const themeState = useSelector((state) => state.themeReducer);
  const theme = themeState.theme;
  const mode = themeState.mode;
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = () => {
    console.log('btn clicked');
    console.log(userName);
    console.log(password);
  };
  return (
    <SafeAreaView style={styles(theme).container}>
      <View>
        <Text style={styles(theme).text}>MY CALENDAR</Text>
        <Icon name="account-box" color={theme.primary} size={72} style={styles(theme).icon} />
        <Input isPassWord={false} onTextChanged={setUserName} />
        <Input isPassWord={true} onTextChanged={setPassword} />
        <Button onPress={onSubmit} title="Login" />
        <ErrorText msg="Error" />
        <TextButton onPress={onSubmit} title="New here? Create an account" />
      </View>
    </SafeAreaView>
  );
};

const styles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: theme.background,
    },
    text: {
      fontSize: 32,
      marginTop: 100,
      color: theme.primary,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    icon: {
      textAlign: 'center',
      marginTop: 48,
    },
  });
export default Login;
