import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import myStore from './myStore';
import Login from './src/features/login/Login';
import { ThemeContextProvider } from './src/theme/ThemeContext';

export default function App() {
  return (
    <Provider store={myStore}>
      <Login />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
