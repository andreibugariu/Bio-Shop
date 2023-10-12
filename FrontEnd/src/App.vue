<template>
  <main class="form-signin">
    <router-view />
  </main>
</template>

<script>
export default {
  date() {
    return {
      showMobileMenu: false,
    }
  }
}
</script>

<style lang="scss">
@import '~bulma';
</style>
