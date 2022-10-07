import React from 'react';
import { Pressable, View, StyleSheet, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Fab = ({ onPress }) => {
  const theme = useSelector((state) => state.themeReducer.mode);
  return (
    <View style={styles(theme).container}>
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
        <Icon name="person" color={theme.onPrimary} size={24} style={styles(theme).icon} />
      </Pressable>
    </View>
  );
};

const styles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginBottom: 16,
      marginEnd: 16,
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 3,
      borderRadius: 60,
      width: 60,
      height: 60,
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: theme.onPrimary,
    },
    icon: {
      textAlign: 'center',
    },
  });

export default Fab;
