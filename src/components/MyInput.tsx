import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';
import Error from './ErrorText';

const MyInput = ({ isPassWord, onTextChanged }) => {
  const theme = useSelector((state) => state.themeReducer.mode);
  const [text, setText] = useState('');
  const name = isPassWord ? 'lock' : 'person';
  return (
    <>
      <View style={styles(theme).container}>
        <Icon name={name} color={theme.primary} size={24} style={styles(theme).icon} />
        <TextInput
          style={styles(theme).text}
          placeholder={isPassWord ? 'Password' : 'User name'}
          placeholderTextColor={theme.hint}
          textColor={theme.onBackground}
          onChangeText={(newText) => onTextChanged(newText)}
          defaultValue={text}
          secureTextEntry={isPassWord}
        />
      </View>
      <Error msg="Error" />
    </>
  );
};

const styles = (theme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 16,
      borderWidth: 5,
      borderColor: theme.primary,
      borderRadius: 20,
      paddingHorizontal: 16,
      marginHorizontal: 8,
    },
    text: {
      height: 40,
      width: 200,
      color: theme.onBackground,
    },
    icon: {
      textAlign: 'center',
      marginRight: 16,
    },
  });
export default MyInput;
