<script setup>
import { ref,computed } from 'vue'

import { useWorkout } from '../stores/workoutStore.js'

const {articles, saveArticle, removeArticle} = useWorkout()


const searchQuery = ref('')
const searchCategory = ref('')

const filteredArticles = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()
  const typeSort = searchCategory.value.trim().toLowerCase()
  return articles.value.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(query)
    const matchesType = item.type.toLowerCase().includes(typeSort);
    const notDeleted = item.deleted === false;
    return matchesSearch && notDeleted && matchesType
  })
})
const artiName = ref('')
const artiDesc = ref('')
const artiType = ref('Review')

function submitArticle(){
  const newName = artiName.value.trim()
  const newDesc = artiDesc.value.trim()
  saveArticle(newName, newDesc,'/src/images/placeholder.png',artiType.value)
  resetForm()
}

function resetForm(){
  artiName.value = ''
  artiDesc.value = ''
  artiType.value = 'Review'
}

</script>

<template>
  <div class="container">
    <span id="searchspan">
      <h2>Search articles</h2>
      <label for="article-search">- Search by name -</label><br>
      <input id="article-search" v-model="searchQuery" type="search"><br>
      <label for="category-search">- Search by type -</label><br>
      <input id="category-search" v-model="searchCategory" type="search">
    </span>
    <span id="addspan">
      <h2>Add an article</h2>
      <label for="nameInput">Name: </label>
      <input id="nameInput" v-model="artiName" type="text"><br>
      <label for="nameInput">Description: </label>
      <input id="nameInput" v-model="artiDesc" type="text"><br>
      <label for="typeInput">Type: </label>
      <select id="typeInput" v-model="artiType">
        <option value="Review">Review</option>
        <option value="News">News</option>
      </select><br>
      <button @click="submitArticle">add article</button>
    </span>
    <p v-if="articles.length === 0" class="empty-state">
      No Articles
    </p>
      <div class="card" v-for="article in filteredArticles" :key="article.id">
        <img :src="article.image">
        <h2>{{ article.name }}</h2>
        <p>{{ article.description}}</p>
        <p>id: {{article.id}} type: {{article.type}}</p><button @click="removeArticle(article.id)">Remove</button>
      </div>

  </div>
</template>
