<script setup lang="ts">
import NavItemDropdown from './_partials/NavItemDropdown.vue'

// 控制滚动后导航栏的样式
const { y } = useWindowScroll()
const isWindowScrollY = computed(() => y.value > 0)

// 控制导航栏展开
const isCollapseShow = ref(false)
const toggleCollapseShow = async () => {
  isCollapseShow.value = !isCollapseShow.value
}

// 路由切换时导航栏收起
const route = useRoute()
watch(
  () => route.path,
  () => {
    isCollapseShow.value = false
  }
)

// 登录页面时，不显示底部与登录按钮
const isLoginPage = computed(() => {
  if (route.path === '/login') {
    return true
  }
  return false
})
</script>

<template>
  <div>
    <nav
      class="topnav navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      :class="{
        'bg-white navbar-light shadow-sm scrollednav py-0': isWindowScrollY
      }"
    >
      <div class="container-fluid">
        <a
          class="navbar-brand"
          :class="{
            'd-sm-block d-md-none': isLoginPage
          }"
          href="/"
        >
          <i class="fas fa-anchor mr-2"></i>
          <strong> Anchor UI </strong> Kit
        </a>
        <button
          class="navbar-toggler"
          :class="{
            collapsed: !isCollapseShow
          }"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor02"
          aria-controls="navbarColor02"
          :aria-expanded="isCollapseShow ? 'true' : 'false'"
          aria-label="Toggle navigation"
          @click="toggleCollapseShow"
        >
          <span class="navbar-toggler-icon"> </span>
        </button>
        <div
          id="navbarColor02"
          ref="refNavbarCollapse"
          class="navbar-collapse collapse"
          :class="{
            show: isCollapseShow
          }"
        >
          <ul class="navbar-nav mr-auto d-flex align-items-center">
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/"> Home </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/blog"> Blog </NuxtLink>
            </li>
            <NavItemDropdown lable="Other">
              <NuxtLink class="dropdown-item" to="/page">
                Sample Page
              </NuxtLink>
              <NuxtLink class="dropdown-item" to="/starter-template">
                Starter Template
              </NuxtLink>
            </NavItemDropdown>
          </ul>
          <ul
            v-if="!isLoginPage"
            class="navbar-nav ml-auto d-flex align-items-center"
          >
            <li class="nav-item">
              <span class="nav-link" href="#">
                <NuxtLink class="btn btn-info btn-round shadow" to="/login">
                  <!-- <i class="fas fa-cloud-download-alt"> </i> -->
                  <i class="fa-solid fa-right-to-bracket"></i>
                  Login
                </NuxtLink>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <slot> </slot>

    <footer v-if="!isLoginPage" class="bg-black pb-5 pt-5 mt-5">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md mr-4">
            <i class="fas fa-copyright text-white"> </i>
            <small class="d-block mt-3 mb-4 text-muted">
              © 2025 Anchor Bootstrap UI Kit, by
              <a target="_blank" href="https://www.wowthemes.net"> Sal </a>
              .License: MIT
            </small>
          </div>
          <div class="col-6 col-md">
            <h5 class="mb-4 text-white">Features</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="#"> Cool stuff </a></li>
              <li><a class="text-muted" href="#"> Random feature </a></li>
              <li><a class="text-muted" href="#"> Team feature </a></li>
              <li><a class="text-muted" href="#"> Stuff for developers </a></li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5 class="mb-4 text-white">Resources</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="#"> Resource </a></li>
              <li><a class="text-muted" href="#"> Resource name </a></li>
              <li><a class="text-muted" href="#"> Another resource </a></li>
              <li><a class="text-muted" href="#"> Final resource </a></li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5 class="mb-4 text-white">Utilities</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="#"> Business </a></li>
              <li><a class="text-muted" href="#"> Education </a></li>
              <li><a class="text-muted" href="#"> Government </a></li>
              <li><a class="text-muted" href="#"> Gaming </a></li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5 class="mb-4 text-white">About</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="#"> Team </a></li>
              <li><a class="text-muted" href="#"> Locations </a></li>
              <li><a class="text-muted" href="#"> Privacy </a></li>
              <li><a class="text-muted" href="#"> Terms </a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped></style>
