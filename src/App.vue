<template>
    <main>
      <header class="py-3 mb-4 border-bottom">
        <div class="container d-flex flex-wrap justify-content-center">
          <router-link to="/" href="/" class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none">
            <span class="fs-4">
              <img :src="pokemonLogo" alt="Pokemon Logo" class="d-inline-block align-top" width="120" height="67">
            </span>
          </router-link>
          <form class="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
            <input type="search" v-model="searchQuery" class="form-control" placeholder="Search..." aria-label="Search">
          </form>
        </div>
      </header>
      <router-view class="container" :searchQuery="searchQuery"></router-view>
      <footer class="py-3 bg-body-secondary">
        <div class="container">
          <p class="text-center text-body-secondary">© {{ new Date().getFullYear() }} <a target="_blank" title="Tom Metcalfe Github" href="https://github.com/iamtommetcalfe">Tom Metcalfe</a></p>
        </div>
      </footer>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  data() {
    return {
      pokemonLogo: require('@/assets/images/logos/pokemon-large.png'),
      searchQuery: ''
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
