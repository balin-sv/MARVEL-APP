<script setup>
import NavBar from "./components/Layouts/Header/NavBar.vue";
import { onMounted } from "vue";
import { useAuthStore } from "./stores/authStore";

const authStore = useAuthStore();

onMounted(() => {
  authStore.getUserStatus();
});
</script>

<template>
  <!-- <NavBar /> -->
  <!-- <div
    class="d-flex flex-column flex-sm-row mt-5 container justify-content-between p-5 border border-danger border-5"
  > -->
  <h1 className="text-3xl font-bold underline">Hello world!</h1>
  <RouterView />
  <!-- </div> -->
</template>

<style></style>
