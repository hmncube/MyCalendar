import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const ErrorText = ({ msg }) => {
  const theme = useSelector((state) => state.themeReducer.mode);
  return <Text style={styles(theme).text}>{msg}</Text>;
};

const styles = (theme) =>
  StyleSheet.create({
    text: {
      color: theme.error,
      marginTop: 4,
      marginHorizontal: 8,
      paddingHorizontal: 16,
    },
  });

export default ErrorText;
