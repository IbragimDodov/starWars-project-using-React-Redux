
import { HTTP, HTTPS } from "../constants/api";


/**
 * Отправляет запрос Fetch 
 * @param {String} url - url для запроса
 * @returns {Promise} Promise с результатом запроса
 */

export const changeHTTP = (url) => {
  return url ? url.replace(HTTP, HTTPS) : url;
}

export const getApiResource = async (url) => {
  
  try {
    const res = await fetch(url);

    if (!res.ok) {
      console.error('Fetching API failed: ' + url);
      return false;
    }

    return await res.json();
  } catch (error) {
    console.error(error.message);
    return false;
  }

}

// getApiResource(SWAPI_ROOT + SWAPI_PEOPLE)
//   .then(body => console.log(body));

// (async () => {
//   const body = await getApiResource(SWAPI_ROOT + SWAPI_PEOPLE);
//   console.log(body);
// })();


export const makeConcurrentRequest = async (url) => {
  const res = await Promise.all(url.map((res) => {
    return fetch(res).then(res => res.json())
  }));

  return res;
}