import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router';
import { withErrorApi } from '../../hoc-helpers/withErrorApi';


import PersonInfo from '../../components/PersonPage/PersonInfo';
import PersonPhoto from '../../components/PersonPhoto/PersonPhoto';

import { getApiResource } from '../../utils/network';
import { getPeopleImage } from '../../services/getPeopleData';
import { API_PERSON } from '../../constants/api';
import styles from './PersonPage.module.css'

function PersonPage({setErrorApi}) {
  const {id} = useParams();
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personPhoto, setPersonPhoto] = useState(null);
  
  useEffect(() => {
    
    (async () => {
      const res = await getApiResource(`${API_PERSON}/${id}/`);
      
      if (res) {
        setPersonInfo([
          {title: 'Height', data: res.height},
          {title: 'Mass', data: res.mass},
          {title: 'Hair color', data: res.hair_color},
          {title: 'Skin color', data: res.skin_color},
          {title: 'Eye color', data: res.eye_color},
          {title: 'Birth Year', data: res.birth_year},
          {title: 'Gender', data: res.gender}
        ])

        setPersonName(res.name)
        setPersonPhoto(getPeopleImage(id));

        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();

  },[])

  return (
    <>
      <div className={styles.wrapper}>
        <span className={styles.person__name}>{personName}</span>


        <div className={styles.container}>
          <PersonPhoto personPhoto={personPhoto} personName={personName}/>

          {personName && <PersonInfo personInfo={personInfo}/>}
        </div>
      </div>
    </>
  )
}

export default withErrorApi(PersonPage);