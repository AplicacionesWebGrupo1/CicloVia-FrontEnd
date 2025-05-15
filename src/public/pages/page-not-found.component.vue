<template>
  <div class="page-not-found">
    <h2>404 - Page Not Found</h2>
    <p>Sorry, the page you are looking for does not exist.</p>
    <router-link to="/">Go back to Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'PageNotFound'
};
</script>

<style scoped>
.page-not-found {
  text-align: center;
  margin: 5rem auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #b00;
}
.page-not-found h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
.page-not-found p {
  margin-bottom: 2rem;
  font-size: 1.2rem;
}
</style>
