<script setup lang="ts">
defineProps<{
  src: string
  alt?: string
  caption?: string
}>()
</script>

<template>
  <figure class="text-center mt-4 mb-4 full-width">
    <img :src="src" class="figure-img" :alt="alt" />
    <figcaption v-if="caption != null" class="figure-caption">
      {{ caption }}
    </figcaption>
    <slot />
  </figure>
</template>

<style lang="scss" scoped></style>
