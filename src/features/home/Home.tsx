import React, { useContext, useState } from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Fab from '../../components/Fab';
import { useSelector, useDispatch } from 'react-redux';

const Home = () => {
  const theme = useSelector((state) => state.themeReducer.mode);
  const clickHandler = () => {};
  return (
    <SafeAreaView style={styles(theme).container}>
      <View style={{ flex: 1 }}>
        <Text style={styles(theme).text}>TODAYS TASKS</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Fab onPress={clickHandler} />
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
      flex: 1,
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
export default Home;
