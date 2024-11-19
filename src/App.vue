<template>
  <div>
    <nav class="bg-gray-800 text-white p-4">
      <router-link to="/" class="mr-4 hover:underline">Home</router-link>
      <router-link to="/about" class="hover:underline">About Me</router-link>
    </nav>
    <div class="p-6">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Add any global styles here if needed */
</style>
