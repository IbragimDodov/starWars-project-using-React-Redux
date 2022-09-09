import React from 'react'
import { useLocation } from 'react-router';
import img from './img/404.png'
import styles from './NotFoundPage.module.css';

function NotFoundPage() {
  let location = useLocation();

  return (
    <>
      <img className={styles.img} src={img} alt="Not Found" />
      <p className={styles.text}>No match for <u>{location.pathname}</u></p>
    </>
  )
}

export default NotFoundPage