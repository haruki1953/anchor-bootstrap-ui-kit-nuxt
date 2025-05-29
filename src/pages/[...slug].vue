<script setup lang="ts">
const route = useRoute()
// 确保 route.path 的尾部不会带 /
const cleanPath = route.path.replace(/\/$/, '')
const { data: page } = await useAsyncData(cleanPath, () => {
  return queryCollection('content').path(cleanPath).first()
})

useHead({
  title: page.value?.title ?? '页面不存在',
  meta: [{ name: 'description', content: page.value?.description }]
})
</script>

<template>
  <!------------------------------------------
HEADER
------------------------------------------->
  <div class="jumbotron jumbotron-fluid mb-3 bg-primary position-relative">
    <div class="container text-white h-100 tofront">
      <div class="row align-items-center justify-content-center text-center">
        <div class="col-md-10">
          <h1 v-if="page != null" class="display-3">
            {{ page.title }}
          </h1>
          <h1 v-else class="display-3">页面不存在</h1>
        </div>
      </div>
    </div>
  </div>
  <!-- End Header -->

  <!-- Main -->
  <div class="container pt-5 pb-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <article>
          <ContentRenderer v-if="page" :value="page" />
        </article>
      </div>
    </div>
  </div>
  <!-- End Main -->
</template>

<style lang="scss" scoped>
:deep() {
  h2,
  h3,
  h4,
  h5,
  h6 {
    scroll-margin-top: 100px; /* 让锚点定位时距离顶部 100px */
    a {
      color: inherit;
      &:hover {
        color: inherit;
        text-decoration: none;
      }
    }
  }
}
</style>
