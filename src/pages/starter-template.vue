<script setup lang="ts">
useHead({
  title: 'Start',
  meta: [{ name: 'description', content: '这是一个关于 Nuxt 的示例页面' }]
})
</script>

<template>
  <!--------------------------------------
HEADER
--------------------------------------->
  <div
    class="jumbotron jumbotron-lg jumbotron-fluid mb-3 bg-primary position-relative"
  >
    <div class="container text-white h-100 tofront">
      <div class="row align-items-center justify-content-center text-center">
        <div class="col-md-10">
          <h1 class="display-3">
            This is a starter page filled with nothing to start your project
            quickly
          </h1>
        </div>
      </div>
    </div>
  </div>
  <!-- End Header -->

  <!--------------------------------------
MAIN
--------------------------------------->
  <div class="container pt-5 pb-5">Your content area goes here</div>
  <!-- End Main -->
</template>

<style lang="scss" scoped></style>
