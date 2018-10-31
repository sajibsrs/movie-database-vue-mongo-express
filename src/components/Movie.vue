<template>
  <div class="hello">
    <h2 class="page-title">Single Movie</h2>
    <div class="movies">
      <div class="movie">
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
  name: 'Movie',
  data: () => ({
    movie: []
  }),
  mounted() {
    this.fetchMovie();
  },
  methods: {
    async fetchMovie() {
      return axios({
        method: 'get',
        url: 'http://localhost:8082/movies/' + this.$route.params.slug
      }).then((response) => {
        this.movie = response.data.movie;
      }).catch(() => {})
    }
  }
}
</script>