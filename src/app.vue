<script setup lang="ts">
useHead({
  titleTemplate: (title) =>
    title != null && title !== 'Nuxt' ? `${title} | Nuxt` : 'Nuxt'
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss" scoped></style>
