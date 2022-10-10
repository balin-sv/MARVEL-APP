<script setup>
const props = defineProps({
  img: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="card m-2 p-3" style="width: 18rem">
    <img :src="img" class="card-img-top" alt="..." />
    <div class="card-body">
      <p class="card-text">
        {{ name }}
      </p>
    </div>
  </div>
</template>
