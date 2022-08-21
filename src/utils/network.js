const SWAPI_ROOT = 'https://swapi.dev/api/';
const SWAPI_PEOPLE = 'people';

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

  (async () => {
    const body = await getApiResource(SWAPI_ROOT + SWAPI_PEOPLE);
    console.log(body);
  })();