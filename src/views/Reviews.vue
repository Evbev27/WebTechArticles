<script setup>
import { ref, computed } from 'vue'

import { useArtiList } from '../stores/articleStore.js'

const {articles} = useArtiList()

const filteredArticles = computed(() => {
  return articles.value.filter(item => {
    const matchesType = item.type === 'Review'
    const notDeleted = item.deleted === false;
    return matchesType && notDeleted
  })
})
</script>

<template>
  <div class="container">
    <header>-- Reviews --</header>
    <p v-if="articles.length === 0" class="empty-state">
      No Articles
    </p>
    <div class="bigcard" v-for="article in filteredArticles" :key="article.id">
      <img :src="article.image">
      <h2>{{ article.name }}</h2>
      <p>{{ article.description}}</p>
    </div>
  </div>
</template>
