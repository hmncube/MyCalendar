import React, { useContext } from 'react';
import { View, SafeAreaView, StatusBar, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ThemeContext } from '../../theme/ThemeContext';
import { useSelector, useDispatch } from 'react-redux';

const Login = () => {
  const theme = useSelector((state) => state.themeReducer.mode);
  return (
    <SafeAreaView style={styles(theme).container}>
      <View>
        <Text style={styles(theme).text}>Login screen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.background,
    },
    text: {
      marginTop: 100,
      color: theme.onBackground,
    },
  });
export default Login;
