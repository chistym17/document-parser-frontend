<template>
  <footer class="bg-gray-100 dark:bg-gray-800 py-4">
    <div class="container mx-auto text-center text-gray-600 dark:text-gray-300">
      <p>&copy; {{ new Date().getFullYear() }} Document Analyzer. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

