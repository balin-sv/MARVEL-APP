<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import Card from "../components/Layouts/Main/Card.vue";
import Pagination from "../components/Layouts/Main/Pagination.vue";
const timeStamp = 1;
const hashValue = "c9d45bcb5c2f39473b9ea1f9f766ca0a";
const publicKey = "4065acc9834ad95dd035fe4885b1968b";
const requestConstantCharacters =
  "https://gateway.marvel.com/v1/public/characters?";
const exampleUrl = `${requestConstantCharacters}ts=${timeStamp}&apikey=${publicKey}&hash=${hashValue}`;
const data = ref([]);
const getData = () => {
  axios.get(exampleUrl).then((response) => {
    data.value = response.data.data.results;
  });
};
console.log(data);

onMounted(() => {
  getData();
});
</script>

<template>
  <div class="container d-flex flex-row flex-wrap justify-content-around">
    <Card
      v-for="card in data"
      :name="card.name"
      :img="card.thumbnail.path.concat('.', card.thumbnail.extension)"
    />
  </div>
</template>

<style scoped></style>
