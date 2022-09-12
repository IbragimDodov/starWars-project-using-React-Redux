import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import loaderBlack from './img/loader-black.svg'
import loaderWhite from './img/loader-white.svg'
import loaderBlue from './img/loader-blue.svg'

import styles from './UiLoading.module.css';

function UiLoading({theme = 'white', isShadow = true, classes}) {

  const [loaderIcon, setLoaderIcon] = useState(null);

  useEffect(() => {
    switch (theme) {
      case 'black': setLoaderIcon(loaderBlack); break;
      case 'white': setLoaderIcon(loaderWhite); break;
      case 'blue': setLoaderIcon(loaderBlue); break;
      default: setLoaderIcon(loaderWhite)
    }
  }, [])

  return (
    <img
      className={cn(styles.loader, isShadow && styles.shadow, classes)}
      src={loaderIcon}
      alt="Loader" />
  )
}

export default UiLoading

