<script setup>
import { ref, computed } from 'vue'

import { useWorkout } from '../stores/workoutStore.js'

const {articles} = useWorkout()

const filteredArticles = computed(() => {
  return articles.value.filter(item => {
    const matchesType = item.type === 'News'
    const notDeleted = item.deleted === false;
    return matchesType && notDeleted
  })
})
</script>

<template>
  <div class="container">
    <header>-- News --</header>
    <p v-if="articles.length === 0" class="empty-state">
      No Articles
    </p>
    <div class="card" v-for="article in filteredArticles" :key="article.id">
      <img :src="article.image">
      <h2>{{ article.name }}</h2>
      <p>{{ article.description}}</p>
    </div>
  </div>
</template>
