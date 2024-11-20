<template>
  <footer class="footer bg-blue-50 mt-auto">
    <div class="container mx-auto px-4 py-4 text-center text-gray-600">
      <p>&copy; {{ currentYear }} DocAnalyzer. All rights reserved.</p>
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

