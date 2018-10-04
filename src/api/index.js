import config from './config'

const { apiKey } = config
const API_URL = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:country&api_key=${apiKey}&format=json`

const getArtists = country => {
  const url = API_URL.replace(':country', country)

  return fetch(url)
    .then(res => res.json())
    .then(json => json.topartists.artist)
}

export default getArtists
