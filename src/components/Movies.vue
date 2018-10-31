<template>
  <div class="hello">
    <h2 class="page-title">All Movies</h2>
    <div class="movies">
      <div v-for="movie in movies" :key="movie.id" class="movie">
        <router-link v-bind:to="'/movies/' + movie.slug ">
          <h3 class="title">{{movie.name}} - {{movie.year}}</h3>
        </router-link>
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
  name: 'Movies',
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