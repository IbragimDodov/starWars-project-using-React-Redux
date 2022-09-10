import React from 'react'
import cn from 'classnames/';
import styles from './UiButton.module.css';

function UiButton({
  text, 
  onClick, 
  disabled,
  theme='dark',
  classes
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(styles.button, styles[theme], classes)}
    >
      {text}
    </button>
  )
}

export default UiButton