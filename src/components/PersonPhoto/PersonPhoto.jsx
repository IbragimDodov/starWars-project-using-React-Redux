import React from 'react'
import { useDispatch } from 'react-redux'

import { setPersonToFavorite, removePersonFromFavorite } from '../../store/actions';

import styles from './PersonPhoto.module.css'

function PersonPhoto({personPhoto, personName, personId}) {
  const dispatch = useDispatch();

  const set = () => {
    dispatch(setPersonToFavorite({
      [personId]: {
        name: personName,
        img: personPhoto
      }
    }));
  }

  const remove = () => {
    dispatch(removePersonFromFavorite(personId));
  }

  return (
    <>
      <div className={styles.container}>
        <img className={styles.photo} src={personPhoto} alt={personName} />
      </div>
      <button onClick={set}>Add in favorite</button>
      <button onClick={remove}>Remove from favorite</button>
    </>
  )
}

export default PersonPhoto