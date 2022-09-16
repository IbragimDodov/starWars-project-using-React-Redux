import React from 'react'
import { useDispatch } from 'react-redux'

import { setPersonToFavorite, removePersonFromFavorite } from '../../store/actions';

import iconFavorite from './img/favorite.svg'
import iconFavoriteFill from './img/favorite-fill.svg'

import styles from './PersonPhoto.module.css'

function PersonPhoto({
  personPhoto,
  personName,
  personId,
  personFavorite,
  setPersonFavorite
}) {
  const dispatch = useDispatch();

  const dispatchFavoritePeople = () => {
    if (personFavorite) {
      dispatch(removePersonFromFavorite(personId));
      setPersonFavorite(false);
    } else {
      dispatch(setPersonToFavorite({
        [personId]: {
          name: personName,
          img: personPhoto
        }
      }));
      setPersonFavorite(true);
    }
  }

  return (
    <>
      <div className={styles.container}>
        <img className={styles.photo} src={personPhoto} alt={personName} />
        <img
          className={styles.favorite}
          onClick={dispatchFavoritePeople}
          src={personFavorite ? iconFavoriteFill : iconFavorite}
          alt="add to favorite"
        />
      </div>

      
    </>
  )
}

export default PersonPhoto