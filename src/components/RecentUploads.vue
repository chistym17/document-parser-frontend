<template>
    <section class="mb-16">
      <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-black">Recent Uploads</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="upload in uploads"
          :key="upload.id"
          class="bg-white dark:bg-gray-600 rounded-lg shadow-lg p-4 hover:shadow-xl transition duration-300 ease-in-out"
        >
          <h3 class="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">{{ upload.name }}</h3>
          <p class="text-gray-700 dark:text-gray-300">{{ upload.summary }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  defineProps({
    uploads: Array,
  })
  </script>