<script setup>
  import { ref,computed } from 'vue'

  import { useWorkout } from '../stores/workoutStore.js'

  const {articles} = useWorkout()
</script>

<template>
  <div class="container">
    <div class="card"><img src="../images/wario.png"><h2>Wario Land 4 Review</h2>
      <p>reviewing the GBA classic that inspired many indie games...</p></div>
    <div class="card"><img src="../images/gta6sneakpeek.png"><h2>Rockstar shows new GTA 6 footage</h2>
      <p>Rockstar Games posted new footage of the game showing off the impressively realistic graphics...</p></div>
    <div class="card"><img src="../images/indiegames.png"><h2>Top 50 indie games for PC</h2>
      <p>an extensive list of all the best indie titles...</p></div>
    <div class="bigcard"><img src="../images/sonicgens.png"><h2>A look back on Sonic Generations</h2>
      <p>Sonic Generations is regarded by many as one of the best sonic titles, here's why...</p></div>
    <div class="bigcard"><img src="../images/godofwar.png"><h2>NEW Dev-interview with the creator of God of War</h2>
      <p>David Jaffe gives new development insight into the beloved action-adventure game…</p></div>
  </div>
  <div class="spanningArticle">
    <img src="../images/fakedirect.png">
    <span><h2>Nintendo announces new Nintendo Direct for 15/11/26</h2>
      <p>Nintendo announced a Direct for 3PM PST, rumored to showcase many new first-party titles…</p></span>
  </div>
  <div class="container">
    <div class="card"><img src="../images/newsoup.png"><h2>New Super Mario Bros: Does it still hold up?</h2>
      <p>The DS title spawned many sequels and brought back 2D Mario, but after 20 years does it hold the test of time…</p></div>
    <div class="card"><img src="../images/artius.png"><h2>“Artius: Pure Imagination” scheduled for early 2027</h2>
      <p>The Sonic-inspired platformer game is announced to release in Q1 2027 as seen in new trailer…</p></div>
    <div class="card"><img src="../images/ps5.png"><h2>PS5 unit sales have surpassed 100 million</h2>
      <p>PS5 hits 100 million units sold before the release of the highly anticipated GTA 6</p></div>
  </div>
  <div class="spanningArticleAlt">
    <img src="../images/nvidia.png"><span><h2>Nvidia CEO resigns</h2>
    <p>CEO Jensen Huang steps down after cheating scandal comes to light...</p></span>
  </div>
</template>