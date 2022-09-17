import React from 'react'
import { useTheme, THEME_DARK, THEME_LIGHT, THEME_NEITRAL } from '../../context/ThemeProvider'

import styles from './ChooseSide.module.css'

function ChooseSide() {
  const isTheme = useTheme();

  return (
    <>

      {isTheme.theme}
      <button onClick={() => {isTheme.change(THEME_LIGHT)}} >light</button>
      <button onClick={() => {isTheme.change(THEME_DARK)}} >darr</button>
      <button onClick={() => {isTheme.change(THEME_NEITRAL)}} >neitral</button>

    </>
  )
}

export default ChooseSide