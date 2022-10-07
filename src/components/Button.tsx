import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const Button = ({ onPress, title }) => {
  const theme = useSelector((state) => state.themeReducer.mode);
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? theme.secondary : theme.primary,
        },
        styles(theme).button,
      ]}
      onPress={() => {
        onPress();
      }}
    >
      <Text style={styles(theme).text}>{title}</Text>
    </Pressable>
  );
};

const styles = (theme) =>
  StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 12,
      marginVertical: 6,
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 20,
      elevation: 3,
      marginTop: 16,
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: theme.onPrimary,
    },
  });

export default Button;
