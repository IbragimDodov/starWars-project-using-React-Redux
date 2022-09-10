import React from 'react'
import { Link } from 'react-router-dom'
import styles from './PeopleNavigation.module.css'

const PeopleNavigation = ({
  getResource,
  prevPage,
  nextPage,
  counterPage
}) => {

  const handleChangePrev = () => getResource(prevPage);
  const handleChangeNext = () => getResource(nextPage);

  return (
    <div>
      <Link className={styles.link} to={`/people/?page=${counterPage - 1}`}><button onClick={handleChangePrev} className={styles.buttons} disabled={!prevPage} >Previous</button></Link>
      <Link className={styles.link} to={`/people/?page=${counterPage + 1}`}><button onClick={handleChangeNext} className={styles.buttons} disabled={!nextPage} >Next</button></Link>
    </div>
  )
}

export default PeopleNavigation