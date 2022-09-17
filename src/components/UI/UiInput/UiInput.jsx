import React from 'react'
import cn from 'classnames'

import icon from './img/cancel.svg'

// import '../index.css'

import styles from './UiInput.module.css'

function UiInput({
  value,
  handleInputChange,
  placeholder,
  classes,
}) {
  return (
    <div className={cn(styles.wrapper__input, classes)}>
      <input
        type="text"
        value={value}
        onChange={(e) => handleInputChange(e.target.value)}
        placeholder={placeholder}
        className={styles.input}
      />
      <img
        onClick={() => value && handleInputChange('')}
        src={icon}
        className={cn(styles.clear, !value && styles.clear__disabled)}
        alt="Clear"
      />
    </div>
  )
}

export default UiInput