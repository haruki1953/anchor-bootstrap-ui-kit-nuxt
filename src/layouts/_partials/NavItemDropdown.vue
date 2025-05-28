<script setup lang="ts">
defineProps<{
  lable: string
}>()

// const refDropdownButton = ref<HTMLElement | null>(null)
// const { focused: isDropdownMenuShow } = useFocusWithin(refDropdownButton)

const isDropdownMenuShow = ref(false)
const toggleDropdownMenuShow = async () => {
  isDropdownMenuShow.value = !isDropdownMenuShow.value
}
const refDropdownButton = ref<HTMLElement | null>(null)
onClickOutside(refDropdownButton, () => {
  if (isDropdownMenuShow.value) {
    isDropdownMenuShow.value = false
  }
})
</script>

<template>
  <li
    class="nav-item dropdown"
    :class="{
      show: isDropdownMenuShow
    }"
  >
    <a
      ref="refDropdownButton"
      class="nav-link dropdown-toggle"
      href="javascript:;"
      role="button"
      @click="toggleDropdownMenuShow"
    >
      {{ lable }}
    </a>
    <div
      class="dropdown-menu"
      :class="{
        show: isDropdownMenuShow
      }"
    >
      <slot></slot>
    </div>
  </li>
</template>

<style lang="scss" scoped></style>
