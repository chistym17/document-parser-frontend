<template>
  <header class="bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg">
    <div class="container mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center">
      <div class="flex items-center mb-4 sm:mb-0">
        <img src="/logo.svg" alt="Document Analyzer Logo" class="h-8 w-8 mr-2" />
        <span class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
          Document Analyzer
        </span>
      </div>
      <nav class="w-full sm:w-auto mb-4 sm:mb-0">
        <ul class="flex justify-center sm:justify-end space-x-6">
          <li v-for="item in navItems" :key="item.to">
            <router-link
              :to="item.to"
              class="text-gray-100 hover:text-white hover:underline transition-all duration-300 text-sm font-medium"
              :class="{ 'text-white font-bold': isCurrentRoute(item.to) }"
            >
              {{ item.text }}
            </router-link>
          </li>
        </ul>
      </nav>
      <button
        @click="toggleDarkMode"
        class="p-2 rounded-full bg-white/10 hover:bg-white/20 transition duration-300 ease-in-out"
        aria-label="Toggle dark mode"
      >
        <SunIcon v-if="isDarkMode" class="h-5 w-5" />
        <MoonIcon v-else class="h-5 w-5" />
      </button>
    </div>
  </header>
</template>

<script>
import { SunIcon, MoonIcon } from 'lucide-vue-next'

export default {
  name: 'AppHeader',
  components: {
    SunIcon,
    MoonIcon
  },
  data() {
    return {
      navItems: [
        { to: '/', text: 'Home' },
        { to: '/analyze', text: 'Analyze' },
        { to: '/history', text: 'History' },
        { to: '/settings', text: 'Settings' }
      ],
      isDarkMode: false
    }
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode
      document.documentElement.classList.toggle('dark')
    },
    isCurrentRoute(path) {
      return this.$route.path === path
    }
  }
}
</script>

<style scoped>
header {
  transition: all 0.3s ease;
}

@media (max-width: 640px) {
  header {
    position: sticky;
    top: 0;
    z-index: 50;
  }
}

.router-link-active {
  @apply font-bold border-b-2 border-white;
}
</style>