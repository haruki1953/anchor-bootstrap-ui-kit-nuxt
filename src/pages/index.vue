<script setup lang="ts"></script>

<template>
  <!-------------------------------------
HEADER
--------------------------------------->
  <div
    class="jumbotron jumbotron-lg jumbotron-fluid mb-0 pb-6 bg-primary position-relative"
  >
    <div class="container-fluid text-white h-100">
      <div
        class="d-lg-flex align-items-center justify-content-between text-center pl-lg-5"
      >
        <div class="col pt-4 pb-4">
          <h1 class="display-3">
            Build something <strong>cool</strong> & easy
          </h1>
          <h5 class="font-weight-light mb-4">
            With this FREE Bootstrap 4.1.3<strong> UI Kit</strong> &
            <strong><i class="fab fa-sass fa-2x text-info"></i></strong>
          </h5>
          <a href="#" class="btn btn-lg btn-outline-white btn-round"
            >Learn more</a
          >
        </div>
        <div
          class="col align-self-bottom align-items-right text-right h-max-380 position-relative z-index-1"
        >
          <img src="assets/img/demo/dashb.png" class="rounded img-fluid" />
        </div>
      </div>
    </div>
  </div>
  <!--- END HEADER -->

  <!--------------------------------------
FEATURES
--------------------------------------->
  <div class="container pt-5 pb-5 mt-4">
    <div class="row gap-y">
      <div class="col-md-6 col-xl-4">
        <div class="media">
          <div class="iconbox iconmedium rounded-circle text-info mr-4">
            <i class="fab fa-html5"></i>
          </div>
          <div class="media-body">
            <h5>Responsive</h5>
            <p class="text-muted">
              Your website works on any device: desktop, tablet or mobile.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xl-4">
        <div class="media">
          <div class="iconbox iconmedium rounded-circle text-purple mr-4">
            <i class="fab fa-gulp"></i>
          </div>
          <div class="media-body">
            <h5>Gulp</h5>
            <p class="text-muted">
              You can easily read, edit, and write your own code, or change
              everything.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xl-4">
        <div class="media">
          <div class="iconbox iconmedium rounded-circle text-info mr-4">
            <i class="fab fa-amazon"></i>
          </div>
          <div class="media-body">
            <h5>UI Kit</h5>
            <p class="text-muted">
              There is a bunch of useful and necessary elements for developing
              your website.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xl-4">
        <div class="media">
          <div class="iconbox iconmedium rounded-circle text-warning mr-4">
            <i class="fab fa-sass"></i>
          </div>
          <div class="media-body">
            <h5>Bootstrap 4.1.x</h5>
            <p class="text-muted">
              You can find our code well organized, commented and readable.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xl-4">
        <div class="media">
          <div class="iconbox iconmedium rounded-circle text-info mr-4">
            <i class="fas fa-layer-group"></i>
          </div>
          <div class="media-body">
            <h5>Clean Code</h5>
            <p class="text-muted">
              As you can see in the source code, we provided a clean code.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xl-4">
        <div class="media">
          <div class="iconbox iconmedium rounded-circle text-salmon mr-4">
            <i class="fas fa-burn"></i>
          </div>
          <div class="media-body">
            <h5>Support</h5>
            <p class="text-muted">
              When you download this template, you'll freely receive future
              updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Features -->

  <!--------------------------------------
SCREENSHOT
--------------------------------------->
  <section class="pt-3 pb-4">
    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <img
            class="d-block m-auto shadow"
            src="assets/img/demo/screenshot1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
  <!-- End Screenshot -->

  <!--------------------------------------
PRICING
--------------------------------------->
  <div class="container pt-5 pb-4">
    <div class="pb-5 pt-3 text-center">
      <h2>
        Predictive and <strong>imperative approach</strong> towards application.
      </h2>
      <p class="text-muted">
        It’s a social collaboration trello software platform that employees
        really love to use, with rich personalized interface
      </p>
    </div>
    <div class="card-deck card-pricing text-center">
      <div class="card border-0 shadow-sm">
        <div class="card-header bg-indigo border-0 pt-4 pb-4 text-white">
          <h2 class="my-0 font-weight-normal mb-3">Personal</h2>
          <h4 class="card-title pricing-card-title">
            $11 <small class="text-white">/ mo</small>
          </h4>
        </div>
        <div class="card-body">
          <ul class="list-unstyled mt-3 mb-4">
            <li>10 users included</li>
            <li>2 GB of storage</li>
            <li>Email support</li>
            <li>Help center access</li>
          </ul>
          <button type="button" class="btn btn-indigo btn-round">
            Start Free
          </button>
        </div>
      </div>
      <div class="card border-0 shadow-sm">
        <div class="card-header bg-info border-0 pt-4 pb-4">
          <h2 class="my-0 font-weight-normal mb-3">Premium</h2>
          <h4 class="card-title pricing-card-title">$15 <small>/ mo</small></h4>
        </div>
        <div class="card-body">
          <ul class="list-unstyled mt-3 mb-4">
            <li>20 users included</li>
            <li>10 GB of storage</li>
            <li>Priority email support</li>
            <li>Help center access</li>
          </ul>
          <button type="button" class="btn btn-info btn-round">
            <i class="fab fa-telegram mr-2"></i> Start Free
          </button>
        </div>
      </div>
      <div class="card border-0 shadow-sm">
        <div class="card-header border-0 pt-4 pb-4 bg-indigo text-white">
          <h2 class="my-0 font-weight-normal mb-3">Enterprise</h2>
          <h4 class="card-title pricing-card-title">
            $29 <small class="textwhite">/ mo</small>
          </h4>
        </div>
        <div class="card-body">
          <ul class="list-unstyled mt-3 mb-4">
            <li>30 users included</li>
            <li>15 GB of storage</li>
            <li>Phone and email support</li>
            <li>Help center access</li>
          </ul>
          <button type="button" class="btn btn-indigo btn-round">
            Contact us
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- End Pricing -->

  <!--------------------------------------
FAQ
--------------------------------------->
  <div class="container pt-5 pb-5">
    <div class="text-center pt-3 pb-4">
      <h2>Frequently Asked Questions</h2>
      <p class="text-muted">
        Transparent answers, licensing and lore ipsum super funny.
      </p>
    </div>
    <div class="row gap-y justify-content-center">
      <div class="col-md-5">
        <h5>What is Anchor Bootstrap UI Kit?</h5>
        <p class="text-muted">
          Anchor Bootstrap UI Kit is a set of polished components that you can
          use for building your own template. This page is built with it.
        </p>
      </div>
      <div class="col-md-5">
        <h5>Is it updated to Bootstrap?</h5>
        <p class="text-muted">
          Yes, Anchor Bootstrap UI Kit is built with the latest Bootstrap
          version and will be updated whenever a new version is released.
        </p>
      </div>
      <div class="col-md-5">
        <h5>Can I use it for commercial projects?</h5>
        <p class="text-muted">
          Absolutely! Use Anchor Bootstrap UI Kit for any personal and
          commercial projects.
        </p>
      </div>
      <div class="col-md-5">
        <h5>Is there a way to thank you?</h5>
        <p class="text-muted">
          That is very nice of you. Sure, I would gladly accept a cup of coffee
          <a href="https://www.wowthemes.net/donate/">here</a>.
        </p>
      </div>
    </div>
  </div>
  <!-- End FAQ -->

  <!--------------------------------------
CTA
--------------------------------------->
  <div class="container pt-4 pb-5 mb-5">
    <div class="pb-4 text-center">
      <h2>
        Ready?
        <strong
          ><span class="text-secondary">Start</span> your free trial!</strong
        >
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
          Start Free
        </button>
      </div>
    </form>
  </div>
  <!-- End CTA -->
</template>

<style lang="scss" scoped></style>
