<template>
<!--    <nav class="py-2 bg-body-tertiary border-bottom">-->
<!--      <div class="container d-flex flex-wrap">-->
<!--        <ul class="nav me-auto">-->
<!--          <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-2 active" aria-current="page">Home</a></li>-->
<!--          <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-2">Features</a></li>-->
<!--          <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-2">Pricing</a></li>-->
<!--          <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-2">FAQs</a></li>-->
<!--          <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-2">About</a></li>-->
<!--        </ul>-->
<!--        <ul class="nav">-->
<!--          <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-2">Login</a></li>-->
<!--          <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-2">Sign up</a></li>-->
<!--        </ul>-->
<!--      </div>-->
<!--    </nav>-->

    <main>
      <header class="py-3 mb-4 border-bottom">
        <div class="container d-flex flex-wrap justify-content-center">
          <a href="/" class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none">
          <span class="fs-4">
            <img :src="pokemonLogo" alt="Pokemon Logo" class="d-inline-block align-top" width="120" height="67">
          </span>
          </a>
          <form class="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
            <input type="search" class="form-control" placeholder="Search..." aria-label="Search">
          </form>
        </div>
      </header>
      <router-view class="container"></router-view>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  data() {
    return {
      pokemonLogo: require('@/assets/images/logos/pokemon-large.png')
    };
  }
});
</script>

<style scoped>
/* Add global styles if needed. Using scoped will make sure the styles only apply to this component. */
header {
  background-color: #f2f2f2;
  padding: 1em 0;
  text-align: center;
}

main {
  margin: 1em 0;
}
</style>
