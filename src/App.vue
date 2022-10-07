<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/page1">Page1</RouterLink>
      <RouterLink to="/page2">Page2</RouterLink>
    </nav>
    <h1>Marvel App</h1>
  </div>
  <RouterView />
</template>

<style scoped>
div {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 80%;
  font-size: 15px;
  text-align: center;
  margin-top: 2rem;
}
nav {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

a {
  font-size: 25px;
  color: rgb(30, 43, 34);
  text-decoration: none;
}
</style>
