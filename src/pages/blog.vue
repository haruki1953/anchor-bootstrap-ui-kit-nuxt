<script setup lang="ts">
useHead({
  title: 'Blog',
  meta: [{ name: 'description', content: '这是一个关于 Nuxt 的示例页面' }]
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
      <!-- Featured -->
      <div class="row">
        <div class="col-lg-6">
          <div class="card flex-md-row mb-4 box-shadow h-xl-300">
            <div class="card-body d-flex flex-column align-items-start">
              <strong class="d-inline-block mb-2 text-purple">Business</strong>
              <h3 class="mb-0">
                <a class="text-dark" href="#"
                  >Living the Dream on a Sunny Island</a
                >
              </h3>
              <div class="mb-1 text-muted">Nov 12</div>
              <p class="card-text mb-auto">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </p>
              <a class="text-gray" href="#">Continue reading</a>
            </div>
            <img
              class="card-img-right flex-auto d-none d-md-block"
              src="assets/img/demo/blog1.jpg"
            />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card flex-md-row mb-4 box-shadow h-xl-300">
            <div class="card-body d-flex flex-column align-items-start">
              <strong class="d-inline-block mb-2 text-success"
                >Marketing</strong
              >
              <h3 class="mb-0">
                <a class="text-dark" href="#"
                  >Why your marketing can be improved</a
                >
              </h3>
              <div class="mb-1 text-muted">Nov 12</div>
              <p class="card-text mb-auto">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </p>
              <a class="text-gray" href="#">Continue reading</a>
            </div>
            <img
              class="card-img-right flex-auto d-none d-md-block"
              src="assets/img/demo/blog2.jpg"
            />
          </div>
        </div>
      </div>
      <!-- End Featured -->

      <!-- Blog Cards -->
      <div class="row gap-y">
        <div class="col-md-6 col-lg-4">
          <div class="card">
            <img class="img-card-top" src="assets/img/demo/blog3.jpg" />
            <div class="card-body">
              <a href="#">
                <h5 class="card-title text-dark">
                  10 Steps for a Successful Business without Investing Money
                </h5>
                <span class="card-text text-muted">
                  Posted on May 24, 2019 by Dalida
                </span>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="card">
            <img class="img-card-top" src="assets/img/demo/blog4.jpg" />
            <div class="card-body">
              <a href="#">
                <h5 class="card-title text-dark">
                  Happy wife is happy life says life experts
                </h5>
                <span class="card-text text-muted">
                  Posted on May 24, 2019 by Sandra
                </span>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="card">
            <img class="img-card-top" src="assets/img/demo/blog5.jpg" />
            <div class="card-body">
              <a href="#">
                <h5 class="card-title text-dark">
                  Pack your bags and see the world today
                </h5>
                <span class="card-text text-muted">
                  Posted on May 24, 2019 by Mike
                </span>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="card">
            <img class="img-card-top" src="assets/img/demo/blog6.jpg" />
            <div class="card-body">
              <a href="#">
                <h5 class="card-title text-dark">
                  Whatever works is what's best,but not always
                </h5>
                <span class="card-text text-muted">
                  Posted on May 24, 2019 by Mary
                </span>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="card">
            <img class="img-card-top" src="assets/img/demo/blog7.jpg" />
            <div class="card-body">
              <a href="#">
                <h5 class="card-title text-dark">
                  Social media and its impact on your business
                </h5>
                <span class="card-text text-muted">
                  Posted on May 24, 2019 by John
                </span>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="card">
            <img class="img-card-top" src="assets/img/demo/blog8.jpg" />
            <div class="card-body">
              <a href="#">
                <h5 class="card-title text-dark">
                  Summer holidays are the best way to relax
                </h5>
                <span class="card-text text-muted">
                  Posted on May 24, 2019 by Sal
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- End Blog Cards -->
    </div>
  </section>

  <!------------------------------------------
SUBSCRIBE
------------------------------------------->
  <div class="container pt-3 pb-5 mb-5">
    <div class="pb-4 text-center">
      <h2>
        <span class="text-secondary font-weight-bold">Subscribe</span> to our
        <strong>newsletter</strong>
      </h2>
      <p class="text-muted">
        A lot of features to develop your own lore ipsum. No credit card
        required.
      </p>
    </div>
    <form class="row justify-content-center">
      <div class="col-md-3">
        <input
          type="text"
          class="form-control input-round w-100 form-control-lg"
          placeholder="First name*"
        />
      </div>
      <div class="col-md-3">
        <input
          type="text"
          class="form-control input-round w-100 form-control-lg"
          placeholder="E-mail address*"
        />
      </div>
      <div class="col-md-3">
        <button type="submit" class="btn btn-info btn-round btn-lg w-100">
          Subscribe
        </button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
