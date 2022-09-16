import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import PeopleList from '../../components/PeoplePage/PeopleList/PeopleList';

import styles from './FavoritePage.module.css';

function FavoritePage() {
  const [people, setPeople] = useState([]);

  const storeDate = useSelector(state => state.favoriteReducer);

  useEffect(() => {
    const arr = Object.entries(storeDate);

    if (arr.length) {
      const res = arr.map(item => {
        return {
          id: item[0],
          ...item[1]
        }
      })

      setPeople(res);
    }
  }, [])

  return (
    <>
      {
        people.length
          ? <PeopleList people={people} />
          : <h2 className={styles.comment}>No data</h2>
      }
      
    </>
  )
}

export default FavoritePage