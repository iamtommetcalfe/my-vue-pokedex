<template>
  <div v-if="pokemonDetails">
    <h1>{{ pokemonDetails.name }}</h1>
    <!-- You can add more Pokémon details here. For example: -->
    <img :src="pokemonDetails.sprites.front_default" alt="Pokemon image" v-if="pokemonDetails.sprites && pokemonDetails.sprites.front_default">
    <p>Type: {{ pokemonDetails.types[0].type.name }}</p>
    <!-- Add more details as desired. The above are just examples and may need modification based on the API's response structure. -->
  </div>
  <div v-else>
    <p>Loading Pokémon details...</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, PropType } from 'vue';
import { getPokemonByName } from '@/api/pokemonAPI';

export default defineComponent({
  props: {
    name: String as PropType<string>,
  },
  setup(props) {
    const pokemonDetails = ref(null);

    onMounted(async () => {
      if (props.name) {
        try {
          const response = await getPokemonByName(props.name);
          pokemonDetails.value = response;
        } catch (error) {
          console.error("Failed to fetch Pokémon details:", error);
        }
      } else {
        console.error("Pokémon name is not provided.");
      }
    });

    return {
      pokemonDetails
    };
  }
});
</script>

<!-- Optional: You can add some styles specific to this component in the <style> section. -->
<style scoped>
/* Your component-specific styles go here */
</style>
