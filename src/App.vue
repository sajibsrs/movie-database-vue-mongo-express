<template>
  <div id="app">
    <h1>Welcome</h1>
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
