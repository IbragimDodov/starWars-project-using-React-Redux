import React from 'react'
import { useNavigate } from 'react-router';
import iconBack from './img/back.svg'

import styles from './PersonLinkBack.module.css'

function PersonLinkBack() {
  const navigate = useNavigate();

  const handleGoBack = e => {
    e.preventDefault();
    navigate(-1);
  }

  return (
    <a href='#' onClick={handleGoBack} className={styles.link}>

      <img className={styles.link__img} src={iconBack} alt="go back" />
      <span>Go back</span>
    </a>
  )
}

export default PersonLinkBack