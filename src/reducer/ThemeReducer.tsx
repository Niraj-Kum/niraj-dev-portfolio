/* eslint-disable @typescript-eslint/no-explicit-any */
import { theme } from '../utils/theme';

// Define the state type
export interface State {
  menuOpen: boolean;
  currentTheme: any;
}

// Define action types
export type Action =
  | { type: 'setTheme'; value: any }
  | { type: 'updateTheme'; value: Partial<any> }
  | { type: 'toggleTheme' }
  | { type: 'toggleMenu' };

// Initial state with proper type annotation
export const initialState: State = {
  menuOpen: false,
  currentTheme: theme.light,
};

// Reducer function with proper type annotations
export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'setTheme':
      return { ...state, currentTheme: action.value };

    case 'updateTheme':
      return { 
        ...state, 
        currentTheme: { 
          ...theme[state.currentTheme.palette.mode], 
          ...action.value 
        } 
      };

    case 'toggleTheme': {
      const newThemeKey = state.currentTheme.palette.mode === 'dark' ? 'light' : 'dark';
      window.localStorage.setItem('theme', JSON.stringify(newThemeKey));
      return { ...state, currentTheme: theme[newThemeKey] };
    }

    case 'toggleMenu':
      return { ...state, menuOpen: !state.menuOpen };

    default:
      throw new Error('Unhandled action type');
  }
}