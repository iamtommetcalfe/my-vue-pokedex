<template>
  <div id="app">
    <header>
      <router-link to="/">Home</router-link>
      <!-- You can add more navigation links or branding information here -->
    </header>

    <main>
      <router-view></router-view>
    </main>

    <!-- Optional: Footer or other global components -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App'
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
