import React from 'react'
import { useSelector } from 'react-redux';

import styles from './FavoritePage.module.css';

function FavoritePage() {
  const storeDate = useSelector(state => state.favoriteReducer)
  console.log(storeDate)

  return (
    <div>FavoritePate</div>
  )
}

export default FavoritePage