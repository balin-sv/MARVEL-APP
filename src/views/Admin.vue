<script setup>
import { useAuthStore } from "../stores/authStore";

const authStore = useAuthStore();
</script>
<template>
  <button
    @click="authStore.logIn()"
    type="button"
    class="btn btn-primary btn-floating mx-1"
  >
    login
    <i class="fab fa-google"></i>
  </button>
  <button
    @click="authStore.logOut()"
    type="button"
    class="btn btn-primary btn-floating mx-1"
  >
    logOut
    <i class="fab fa-google"></i>
  </button>
</template>
<style scoped></style>
