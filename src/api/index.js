import config from './config'

const { apiKey } = config
const API_URL = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=venezuela&api_key=${apiKey}&format=json`

const getArtists = () => {
  return fetch(API_URL)
    .then(res => res.json())
    .then(json => json.topartists.artist)
}

export default getArtists
