<script setup lang="ts">
useHead({
  title: 'Page',
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
            This is a test page filled with common HTML elements for post and
            page content
          </h1>
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
          <h1><strong>Bold title</strong> for your paragraph</h1>
          <p>
            And then some paragraph text to follow. The purpose of this HTML is
            to help determine what default settings are with CSS and to make
            sure that all possible HTML Elements are included in this HTML so as
            to not miss any possible Elements when designing a site.
          </p>
          <h3>Following a full width image</h3>
          <p>
            And then some paragraph text to follow. The purpose of this HTML is
            to help determine what default settings are with CSS and to make
            sure that all possible HTML Elements are included in this HTML so as
            to not miss any possible Elements when designing a site.
          </p>
          <figure class="text-center mt-4 mb-4 full-width">
            <img src="assets/img/demo/slide1.jpg" class="figure-img" alt="" />
            <figcaption class="figure-caption">
              Full widh image outside container
            </figcaption>
          </figure>
          <p>
            Lorem ipsum dolor sit amet,
            <a title="test link" href="#">test link</a> adipiscing elit. Nullam
            dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc
            iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi,
            imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent
            mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu
            volutpat enim diam eget metus. Maecenas ornare tortor. Donec sed
            tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse
            quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi
            imperdiet augue quis tellus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, <em>emphasis</em> consectetuer
            adipiscing elit. Nullam dignissim convallis est. Quisque aliquam.
            Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam
            libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl.
            Praesent mattis, massa quis luctus fermentum, turpis mi volutpat
            justo, eu volutpat enim diam eget metus. Maecenas ornare tortor.
            Donec sed tellus eget sapien fringilla nonummy. Mauris a ante.
            Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc.
            Morbi imperdiet augue quis tellus.
          </p>
          <blockquote>
            <p>
              "Lorem ipsum dolor sit amet, <em>emphasis</em> consectetuer
              adipiscing elit. Nullam dignissim convallis est. Quisque aliquam.
              Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem.
              Aliquam libero nisi, imperdiet at, tincidunt nec, gravida
              vehicula, nisl. Praesent mattis, massa quis luctus fermentum,
              turpis mi volutpat justo, eu volutpat enim diam eget metus.
              Maecenas ornare tortor. Donec sed tellus eget sapien fringilla
              nonummy. Mauris a ante. Suspendisse quam sem, consequat at,
              commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis
              tellus." <br />
              <cite>—Blockquote</cite>
            </p>
          </blockquote>
          <p>
            Lorem ipsum dolor sit amet, <em>emphasis</em> consectetuer
            adipiscing elit. Nullam dignissim convallis est. Quisque aliquam.
            Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam
            libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl.
            Praesent mattis, massa quis luctus fermentum, turpis mi volutpat
            justo, eu volutpat enim diam eget metus. Maecenas ornare tortor.
            Donec sed tellus eget sapien fringilla nonummy. Mauris a ante.
            Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc.
            Morbi imperdiet augue quis tellus.
          </p>
        </article>
      </div>
    </div>
  </div>
  <!-- End Main -->

  <!------------------------------------------
NEWSLETTER
------------------------------------------->
  <div class="container pt-4 pb-5 mb-5">
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
  <!-- End Newsletter -->
</template>

<style lang="scss" scoped></style>
