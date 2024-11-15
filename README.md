# Document Management System Frontend

This is the **frontend** for the Document Management System, built with **Vue.js**. The frontend allows users to upload documents, view extracted text and metadata, and perform searches across stored documents.

---

## 🖥️ Features
- **Upload Documents**: Users can upload PDFs or images for processing.
- **View Extracted Information**: Displays extracted text, keywords, categories, and other metadata.
- **Search Functionality**: Search through documents based on keywords.

---

## 📁 Folder Structure
```plaintext
src/
├── assets/               # Static assets like images and styles
├── components/           # Reusable Vue components
│   ├── UploadDocument.vue  # Component for document upload
│   ├── ExtractedData.vue   # Component for displaying processed document data
│   ├── SearchBar.vue       # Component for search functionality
├── views/                # Application views (pages)
│   ├── Home.vue            # Main landing page
│   ├── Results.vue         # Results display page
├── App.vue               # Root Vue component
└── main.js               # Application entry point
