import { THEME_CHANGE } from './constants';
import { getTheme } from '../ThemeColors';

//TODO read value from db and use
const initialState = {
  mode: getTheme('dark'),
};

// Handle our action of changing the theme
const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case THEME_CHANGE:
      return {
        ...state,
        mode: getTheme(action.payload),
      };
    default:
      return state;
  }
};

export default themeReducer;
