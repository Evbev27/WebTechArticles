<script setup>
import { nextTick, watch } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import SiteNav from './components/SiteNav.vue'

const route = useRoute()

// After client-side navigation, move keyboard focus to the new page heading.
watch(() => route.fullPath, async () => {
  await nextTick()
  document.querySelector('#main-content h1')?.focus()
})
</script>

<template>
    <SiteNav />
    <main id="main-content" tabindex="-1">
      <RouterView />
    </main>
</template>