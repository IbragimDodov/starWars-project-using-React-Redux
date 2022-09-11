import React from 'react'
import styles from './PersonInfo.module.css'

function PersonInfo({personInfo}) {
  return (
    <>
      <div className={styles.wrapper}>
        <ul className={styles.list__container}>
          {personInfo.map(({title, data}) => (
            data && (
              <li className={styles.list__item} key={title}>
                <span className={styles.item__title}>{title}: {data}</span>
              </li>
            )
          ))}
        </ul>
      </div>
    </>
  )
}

export default PersonInfo