import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import myStore from './myStore';
import { ThemeContextProvider } from './src/theme/ThemeContext';

export default function App() {
  return <ThemeContextProvider></ThemeContextProvider>;
}
