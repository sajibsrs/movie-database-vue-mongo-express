<template>
  <form class="add-movie-form form-wrapper" @submit.prevent="processForm" method="post">

    <div class="input-wrapper">
      <p v-if="errors.length">
        <strong>
          Please correct the folllowing error(s):
        </strong>
        <ul class="validation-info">
          <li v-for="error in errors" :key="error.id">
            {{ error }}
          </li>
        </ul>
      </p>
    </div>
    
    <div class="input-wrapper">
      <label for="name">Movie Name:</label>
      <input v-model="name" type="text" name="name" id="name">
    </div>
    <div class="input-wrapper">
      <label for="year">Release Year:</label>
      <input v-model="year" type="number" name="year" id="year">
    </div>
    <div class="input-wrapper">
      <label for="">Description</label>
      <textarea v-model="description" name="description" id="description"></textarea>
    </div>
    <div class="input-wrapper">
      <input type="submit" value="Submit">
    </div>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AddMovie',
  data: () => ({ 
      errors: [],
      name: null,
      year: null,
      description: null,
      slug: null
  }),
  methods: {
    processForm: function(e) {

      this.errors = [];

      if (!this.name) {
        this.errors.push('Name is required');
      }

      if (!this.year) {
        this.errors.push('Year is required');
      }

      if (!this.description) {
        this.errors.push('Description is required');
      }

      // return false if there is any validation error(s)
      if (this.errors.length > 0){
        // console.error('Check for form validation error(s)');
        return false;
      }
      
      return (
        axios({
          method: 'post',
          data: {
            name: this.name,
            year: this.year,
            description: this.description,
            slug: (this.name).toLowerCase().split(' ').join('-')
          },
          url: 'http://localhost:8082/movies',
          headers: {
            'Content-Type': 'application/json',
          }
        }).then(() => {
          this.$router.push({ name: 'Home' });
        })
      );
    }
  }
}
</script>

