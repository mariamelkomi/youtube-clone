import axios from "axios";
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
    url: BASE_URL,
    params: {
      part: 'snippet,id',
      regionCode: 'US',
      maxResults: '50',
      order: 'date'
    },
    headers: {
      'X-RapidAPI-Key': '03b487747amsh6870b53b4dd07c8p1204e4jsn3e3f5718d17f',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromApi = async (url) => {
   const { data } = await axios.get(`${BASE_URL}/${url}` , options);
   return data;
  }