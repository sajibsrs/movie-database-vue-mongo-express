<template>
  <div class="hello">
    <h2 class="page-title">Top Rated Movies (TODO)</h2>
    <div class="movies">
      <div v-for="movie in movies" :key="movie.id" class="movie">
        <h3 class="title">{{movie.name}} - {{movie.year}}</h3>
        <p class="description">
          {{movie.description}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// Promise based HTTP client for the browser and node.js
import axios from 'axios';

export default {
  name: 'Home',
  data: () => ({
    movies: []
  }),
  mounted(){
    this.fetchMovies();
  },
  methods: {
    async fetchMovies() {
      return axios({
        method: 'get',
        url: 'http://localhost:8082/movies'
      }).then((response) => {
        this.movies = response.data.movies;
      }).catch(() => {})
    }
  }
}
</script>
