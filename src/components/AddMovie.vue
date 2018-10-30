<template>
  <form class="add-movie-form form-wrapper" @submit="validation" action="/movies" method="post">
    <p v-if="errors.length">
      <strong>
        Please correct the folllowing error(s):
      </strong>
      <ul>
        <li v-for="error in errors" :key="error.id">
          {{ error }}
        </li>
      </ul>
    </p>
    <label for="name">Movie Name:</label>
    <input v-model="name" type="text" name="name" id="name">
    <label for="year">Release Year:</label>
    <input v-model="year" type="number" name="year" id="year">
    <label for="description">Description</label>
    <textarea v-model="description" name="description" id="description" cols="30" rows="10"></textarea>
    <input type="submit" value="Submit">
  </form>
</template>

<script>
export default {
  name: 'AddMovie',
  data: () => ({ 
      errors: [],
      name: null,
      year: null,
      description: null
  }),
  methods: {
    validation: function(e) {
      if (this.name && this.year && this.description) {
        return true;
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push('Name is required.');
      }

      if (!this.year) {
        this.errors.push('Year is required.');
      }

      if (!this.description) {
        this.errors.push('Description is required.');
      }

      e.preventDefault();
      
    }
  }
}
</script>

