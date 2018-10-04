<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ title }}</h1>
    <select v-model="selectedCountry">
      <option v-for="country in countries" :value="country.value">{{ country.name }}</option>
    </select>
    <h2>Artistas</h2>
    <spinner v-show="loading"></spinner>
    <ul>
      <artist v-for="artist in artists" :artist="artist" :key="artist.mbid"></artist>
    </ul>
  </div>
</template>

<script>
import getArtists from './api'
import Artist from './components/Artist.vue'
import Spinner from './components/Spinner.vue'

export default {
  name: 'app',
  data () {
    return {
      title: 'Music!',
      artists: [],
      countries: [
        { name: 'Venezuela', value: 'venezuela' },
        { name: 'Chile', value: 'chile' },
        { name: 'Argentina', value: 'argentina' },
      ],
      selectedCountry: 'venezuela',
      loading: true
    }
  },

  components: {
    Artist,
    Spinner
  },

  methods: {
    refrestArtist(){
      this.loading = true
      this.artists = []
      getArtists(this.selectedCountry)
      .then((artists) => {
        this.artists = artists
        this.loading = false
      })
    }
  },

  mounted() {
    this.refrestArtist()
  },

  watch: {
    selectedCountry(){
      this.refrestArtist()
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
