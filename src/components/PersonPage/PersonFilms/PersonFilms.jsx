import React, {useState, useEffect} from 'react'

import { makeConcurrentRequest, changeHTTP } from '../../../utils/network'

import styles from './PersonFilms.module.css'

function PersonFilms({personFilms}) {
  const [filmsName, setFilmsName] = useState([]);

  useEffect(() => {
    (async () => {
      const filmsHTTPS = personFilms.map(url => changeHTTP(url));
      const response = await makeConcurrentRequest(filmsHTTPS);

      setFilmsName(response);
    })();
  }, [])

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list__container}>
        {filmsName
          .sort((a, z) => a.episode_id - z.episode_id)
          .map(({title, episode_id}) => (
            <li className={styles.list__item} key={episode_id}>
              <span className={styles.item__episode}> Episode {episode_id} </span>
              <span className={styles.item__colon}> : </span>
              <span className={styles.item__title}> {title} </span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default PersonFilms