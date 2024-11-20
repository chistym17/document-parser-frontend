<template>
  <div>
    <AppHeader />
    <div class="p-6">
      <router-view></router-view>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import AppHeader from './components/Header.vue'
import AppFooter from './components/Footer.vue'

export default defineComponent({
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
})
</script>

<style>
/* Add any global styles here if needed */
</style>
