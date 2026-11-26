<script setup>
  import { ref,computed } from 'vue'

  import { useArtiList } from '../stores/articleStore.js'

  const {articles} = useArtiList()

  function findArticleName(id){
    const article = articles.value.find(item => item.id === id)
    if(!article){return "Article was deleted"}
    return article.name
  }
  function findArticleDesc(id){
    const article = articles.value.find(item => item.id === id)
    if(!article){return}
    return article.description
  }
  function findArticleImage(id){
    const article = articles.value.find(item => item.id === id)
    if(!article){return}
    return article.image
  }
</script>

<template>
  <main v-if="articles.length > 0">
  <div class="container">
    <div class="card"><img :src="findArticleImage(1)" v-if="findArticleImage(1) != null">
      <h2>{{findArticleName(1)}}</h2>
      <p>{{findArticleDesc(1)}}</p>
    </div>
    <div class="card"><img :src="findArticleImage(2)" v-if="findArticleImage(2) != null">
      <h2>{{findArticleName(2)}}</h2>
      <p>{{findArticleDesc(2)}}</p>
    </div>
    <div class="card"><img :src="findArticleImage(3)" v-if="findArticleImage(3) != null">
      <h2>{{findArticleName(3)}}</h2>
      <p>{{findArticleDesc(3)}}</p>
    </div>
    <div class="bigcard"><img :src="findArticleImage(4)" v-if="findArticleImage(4) != null">
      <h2>{{findArticleName(4)}}</h2>
      <p>{{findArticleDesc(4)}}</p>
    </div>
    <div class="bigcard"><img :src="findArticleImage(5)" v-if="findArticleImage(5) != null">
      <h2>{{findArticleName(5)}}</h2>
      <p>{{findArticleDesc(5)}}</p>
    </div>
  </div>
  <div class="spanningArticle">
    <img :src="findArticleImage(6)" v-if="findArticleImage(6) != null">
    <span><h2>{{findArticleName(6)}}</h2>
      <p>{{findArticleDesc(6)}}</p></span>
  </div>
  <div class="container">
    <div class="card"><img :src="findArticleImage(7)" v-if="findArticleImage(7) != null">
      <h2>{{findArticleName(7)}}</h2>
      <p>{{findArticleDesc(7)}}</p>
    </div>
    <div class="card"><img :src="findArticleImage(8)" v-if="findArticleImage(8) != null">
      <h2>{{findArticleName(8)}}</h2>
      <p>{{findArticleDesc(8)}}</p>
    </div>
    <div class="card"><img :src="findArticleImage(9)" v-if="findArticleImage(9) != null">
      <h2>{{findArticleName(9)}}</h2>
      <p>{{findArticleDesc(9)}}</p>
    </div>
  </div>
  <div class="spanningArticleAlt">
    <img :src="findArticleImage(10)" v-if="findArticleImage(10) != null">
    <span><h2>{{findArticleName(10)}}</h2>
      <p>{{findArticleDesc(10)}}</p></span>
  </div>
  </main>
  <div class="container" v-if="articles.length === 0">
    <p class="empty-state">No Articles</p>
  </div>
</template>