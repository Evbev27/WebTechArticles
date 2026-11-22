<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="site-nav" aria-label="Main navigation">
    <span>K00335697 web tech project</span>
    <ul>
      <li><RouterLink to="/search" active-class="nav-active"
                      exact-active-class="nav-current"><img src="../images/searchIcon.png"></RouterLink></li>
      <li><RouterLink to="/reviews" active-class="nav-active"
                      exact-active-class="nav-current">Reviews</RouterLink></li>
      <li><RouterLink to="/news" active-class="nav-active"
                      exact-active-class="nav-current">News</RouterLink></li>
      <li><RouterLink to="/" active-class="nav-active"
                      exact-active-class="nav-current">Home</RouterLink></li>
    </ul>
  </nav>
</template>
