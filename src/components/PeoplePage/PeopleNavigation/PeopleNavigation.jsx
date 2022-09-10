import React from 'react'
import { Link } from 'react-router-dom'
import UiButton from '../../UI/UiButton/UiButton'
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
    <div className={styles.container}>
      <Link className={styles.buttons} to={`/people/?page=${counterPage - 1}`}>
        <UiButton
          text="Previous"
          onClick={handleChangePrev}
          disabled={!prevPage}
        />
      </Link>
      <Link className={styles.buttons} to={`/people/?page=${counterPage + 1}`}>
        <UiButton
          text="Next"
          onClick={handleChangeNext}
          disabled={!nextPage}
        />
      </Link>
    </div>
  )
}

export default PeopleNavigation