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
  <div class="flex justify-center m-5">
    <div
      class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg"
    >
      <img
        :src="img"
        class="w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
        src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
        alt=""
      />
      <div class="p-6 flex flex-col justify-start">
        <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
        <p class="text-gray-700 text-base mb-4">
          {{ name }}
        </p>
        <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
      </div>
    </div>
  </div>

  <!-- <div class="card m-2 p-3" style="width: 18rem">
    <img :src="img" class="card-img-top" alt="..." />
    <div class="card-body">
      <p class="card-text">
        {{ name }}
      </p>
    </div>
  </div> -->
</template>
