<template>
  <div class="container mx-auto px-4 py-8">
    <section class="text-center mb-16">
      <h1 class="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
        Upload. Analyze. Gain Insights.
      </h1>
      <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
        AI-powered document analysis at your fingertips
      </p>
      <button
        @click="scrollToUpload"
        class="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold py-2 px-6 rounded-full hover:from-blue-600 hover:to-indigo-600 transition duration-300 ease-in-out"
      >
        Get Started
      </button>
    </section>

    <Upload @file-analyzed="updateResults" />

    <Results :results="analysisResults" />

    <RecentUploads :uploads="recentUploads" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Upload from '../components/DocumentUpload.vue'
import Results from '../components/Results.vue'
import RecentUploads from '../components/RecentUploads.vue'

const analysisResults = ref(null)
const recentUploads = ref([
  { id: 1, name: 'document1.pdf', summary: 'A brief summary of document 1' },
  { id: 2, name: 'document2.docx', summary: 'A brief summary of document 2' },
  { id: 3, name: 'document3.txt', summary: 'A brief summary of document 3' },
])

const updateResults = (results) => {
  analysisResults.value = results
}

const scrollToUpload = () => {
  const uploadElement = document.querySelector('#upload-section')
  if (uploadElement) {
    uploadElement.scrollIntoView({ behavior: 'smooth' })
  }
}
</script> 