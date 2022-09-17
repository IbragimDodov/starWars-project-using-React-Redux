import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react'

import { changeCssVariables } from '../services/changeCssVariables';
export const THEME_LIGHT = 'light';
export const THEME_DARK = 'dark';
export const THEME_NEITRAL = 'neitral';

const ThemeContext = createContext();

function ThemeProvider({children, ...props}) {
  const [theme, setTheme] = useState(null);

  const change = name => {
    setTheme(name);
    changeCssVariables(name);
  }

  return (
    <ThemeContext.Provider value={{
      theme,
      change
    }} {...props}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

export const useTheme = () => useContext(ThemeContext);