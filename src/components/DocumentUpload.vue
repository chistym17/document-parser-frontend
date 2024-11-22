<template>
  <section id="upload-section" class="mb-16">
    <h2 class="text-2xl font-bold mb-4">Upload Documents</h2>
    <div
      @dragover.prevent="dragover"
      @dragleave="dragleave"
      @drop.prevent="drop"
      :class="[
        'border-2 border-dashed rounded-lg p-8 text-center transition duration-300 ease-in-out',
        isDragging ? 'border-blue-500 bg-blue-50 dark:bg-blue-900' : 'border-gray-300 dark:border-gray-700',
      ]"
    >
      <input
        type="file"
        ref="fileInput"
        @change="handleFileInput"
        multiple
        accept=".pdf,.doc,.docx,.txt"
        class="hidden"
      />
      <p class="mb-4">Drag and drop your documents here, or</p>
      <button
        @click="$refs.fileInput.click()"
        class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
      >
        Select Files
      </button>
    </div>
    <ul v-if="files.length > 0" class="mt-4 space-y-2">
      <li
        v-for="file in files"
        :key="file.name"
        class="flex items-center justify-between bg-white dark:bg-gray-800 p-3 rounded-lg shadow"
      >
        <span>{{ file.name }}</span>
        <button
          @click="removeFile(file)"
          class="text-red-500 hover:text-red-600 transition duration-300 ease-in-out"
        >
          <XIcon class="h-5 w-5" />
        </button>
      </li>
    </ul>
    <button
      v-if="files.length > 0"
      @click="analyzeFiles"
      class="mt-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold py-2 px-6 rounded-full hover:from-blue-600 hover:to-indigo-600 transition duration-300 ease-in-out"
    >
      Analyze Documents
    </button>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { XIcon } from 'lucide-vue-next'
import axios from 'axios'
import { useToast } from 'vue-toastification'

const toast = useToast()
const emit = defineEmits(['file-analyzed'])

const files = ref([])
const isDragging = ref(false)

const dragover = (e) => {
  isDragging.value = true
}

const dragleave = (e) => {
  isDragging.value = false
}

const drop = (e) => {
  isDragging.value = false
  const droppedFiles = [...e.dataTransfer.files]
  addFiles(droppedFiles)
}

const handleFileInput = (e) => {
  const selectedFiles = [...e.target.files]
  addFiles(selectedFiles)
}

const addFiles = (newFiles) => {
  const validFiles = newFiles.filter(file => {
    const validTypes = ['.pdf', '.doc', '.docx', '.txt']
    return validTypes.some(type => file.name.toLowerCase().endsWith(type))
  })
  files.value = [...files.value, ...validFiles]
}

const removeFile = (file) => {
  files.value = files.value.filter(f => f !== file)
}

const analyzeFiles = async () => {
  try {
    const formData = new FormData()
    formData.append('file', files.value[0])

    const response = await axios.post('http://localhost:5000/api/extraction/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
        console.log('Upload Progress:', percentCompleted)
      }
    })

    toast.success("File uploaded successfully!", {
      timeout: 3000,
      position: "top-right",
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    })

    emit('file-analyzed', response.data)
    files.value = []
    
  } catch (error) {
    console.error('Upload failed:', error)
    
    toast.error(error.response?.data?.detail || "Failed to upload file. Please try again.", {
      timeout: 5000,
      position: "top-right",
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    })
  }
}
</script>

<style lang="postcss">
.Vue-Toastification__toast {
  @apply font-sans;
}

.Vue-Toastification__toast--success {
  @apply bg-purple-500;
}

.Vue-Toastification__toast--error {
  @apply bg-red-500;
}

.Vue-Toastification__toast-body {
  @apply text-sm font-medium;
}
</style>