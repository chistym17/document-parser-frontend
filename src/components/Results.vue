<template>
    <section v-if="results" class="mb-16">
      <h2 class="text-2xl font-bold mb-4">Analysis Results</h2>
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div class="border-b border-gray-200 dark:border-gray-700">
          <nav class="flex">
            <button
              v-for="tab in tabs"
              :key="tab"
              @click="activeTab = tab"
              :class="[
                'px-4 py-2 text-sm font-medium',
                activeTab === tab
                  ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300',
              ]"
            >
              {{ tab }}
            </button>
          </nav>
        </div>
        <div class="p-4">
          <div v-if="activeTab === 'Extracted Text'" class="prose dark:prose-invert">
            <p>{{ results.extractedText }}</p>
          </div>
          <div v-else-if="activeTab === 'Insights'">
            <ul class="list-disc list-inside">
              <li v-for="insight in results.insights" :key="insight" class="mb-2">
                {{ insight }}
              </li>
            </ul>
          </div>
          <div v-else-if="activeTab === 'Key Points'">
            <ul class="list-disc list-inside">
              <li v-for="point in results.keyPoints" :key="point" class="mb-2">
                {{ point }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const props = defineProps({
    results: Object,
  })
  
  const tabs = ['Extracted Text', 'Insights', 'Key Points']
  const activeTab = ref('Extracted Text')
  </script>