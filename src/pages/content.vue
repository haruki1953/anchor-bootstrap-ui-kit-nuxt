<script setup lang="ts">
useHead({
  title: 'Content',
  meta: [{ name: 'description', content: '这是一个关于 Nuxt 的示例页面' }]
})

const { data } = await useAsyncData('content', () => {
  return queryCollection('content').order('date', 'DESC').all()
})
</script>

<template>
  <!------------------------------------------
HEADER
------------------------------------------->
  <div
    class="jumbotron jumbotron-lg jumbotron-fluid mb-3 bg-primary position-relative"
  >
    <div class="container text-white h-100 tofront">
      <div class="row align-items-center justify-content-center text-center">
        <div class="col-md-10">
          <h1 class="display-3">
            Build your SAAS landing page using the
            <b>intelligent KIT interface</b>
          </h1>
        </div>
      </div>
    </div>
  </div>
  <!-- End Header -->

  <section class="pt-5 pb-5">
    <div class="container">
      <!-- Blog Cards -->
      <div class="row gap-y">
        <div v-for="item in data" :key="item.id" class="col-md-6 col-lg-4">
          <div class="card">
            <img
              class="img-card-top"
              :src="item.image || 'assets/img/demo/blog3.jpg'"
            />
            <div class="card-body">
              <NuxtLink :to="item.path">
                <h5 class="card-title text-dark">
                  {{ item.title }}
                </h5>
                <span class="card-text text-muted">
                  {{ item.description }} {{ formatTimeAgoChs(item.date) }}
                </span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <!-- End Blog Cards -->
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
