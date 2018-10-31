<template>
  <div id="app">
    <h1>Welcome</h1>
    <div class="pagination">
      <a href="/">Home</a> |
      <a href="/movies">Movies</a> |
      <a href="/contact">Contact</a>
    </div>
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header'
import '@/assets/css/main.css'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>
