<template>
  <div>
    <div v-if="loading">
      <p>Loading Pokémon details...</p>
    </div>

    <div v-else-if="pokemonDetails">
      <h1>{{ capitalize(pokemonDetails.name) }}</h1>
      <img :src="pokemonDetails.sprites.front_default" alt="Pokemon image" v-if="pokemonDetails.sprites && pokemonDetails.sprites.front_default">
      <p>Type: {{ pokemonDetails.types[0].type.name }}</p>
      <!-- Add more details as desired. The above are just examples and may need modification based on the API's response structure. -->
    </div>

    <div v-else-if="errorMessage">
      <p class="alert alert-danger">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, PropType } from 'vue';
import { getPokemonByName } from '@/api/pokemonAPI';
import { capitalize } from '@/helpers';

export default defineComponent({
  props: {
    name: String as PropType<string>,
  },
  setup(props) {
    const pokemonDetails = ref(null);
    const loading = ref(true);
    const errorMessage = ref<string | null>(null);

    onMounted(async () => {
      if (props.name) {
        try {
          const response = await getPokemonByName(props.name);
          pokemonDetails.value = response;
        } catch (error) {
          console.error("Failed to fetch Pokémon details:", error);
          errorMessage.value = "Failed to load Pokémon details. Please try again later.";
        } finally {
          loading.value = false;
        }
      } else {
        errorMessage.value = "Pokémon name is not provided.";
        loading.value = false;
      }
    });

    return {
      pokemonDetails,
      loading,
      errorMessage,
      capitalize
    };
  }
});
</script>
