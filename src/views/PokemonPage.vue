<template>
  <div>
    <div v-if="loading">
      <p>Loading Pokémon details...</p>
    </div>

    <div v-else-if="pokemonDetails">
      <div class="pokemon-card-header">
        <h1>{{ capitalize(pokemonDetails.name) }}</h1>
      </div>
      <div class="pokemon-card-image">
        <img
          :src="pokemonDetails.sprites.front_default"
          alt="Pokemon image"
          v-if="pokemonDetails.sprites && pokemonDetails.sprites.front_default"
        />
      </div>
      <div class="pokemon-card-details">
        <p v-if="pokemonDetails.types && pokemonDetails.types.length > 0">
          <b>Type: </b>
          <span v-for="(typeObj, index) in pokemonDetails.types" :key="index">
            {{ capitalize(typeObj.type.name)
            }}<span v-if="index < pokemonDetails.types.length - 1">, </span>
          </span>
        </p>
        <p v-if="pokemonDetails.stats && pokemonDetails.stats.length > 0">
          <b>Stats: </b>
          <span v-for="(statObj, index) in pokemonDetails.stats" :key="index">
            {{ capitalize(statObj.stat.name) }} (Base: {{ statObj.base_stat }},
            Effort: {{ statObj.effort }})<span
              v-if="index < pokemonDetails.stats.length - 1"
              >,
            </span>
          </span>
        </p>
      </div>
    </div>

    <div v-else-if="errorMessage">
      <p class="alert alert-danger">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, PropType } from "vue";
import { getPokemonByName } from "@/api/pokemonAPI";
import { capitalize } from "@/helpers";

interface PokemonDetails {
  name: string;
  types: Array<{ type: { name: string } }>;
  stats: Array<{ stat: { name: string }; base_stat: number; effort: number }>;
  sprites: { front_default: string };
}

export default defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup(props) {
    const pokemonDetails = ref<PokemonDetails | null>(null);
    const loading = ref(true);
    const errorMessage = ref<string | null>(null);

    const fetchPokemonDetails = async (name: string) => {
      loading.value = true;
      errorMessage.value = null;
      try {
        pokemonDetails.value = await getPokemonByName(name);
      } catch (error) {
        console.error("Failed to fetch Pokémon details:", error);
        errorMessage.value =
          "Failed to load Pokémon details. Please try again later.";
      } finally {
        loading.value = false;
      }
    };

    watch(
      () => props.name,
      (newName) => {
        if (newName) {
          fetchPokemonDetails(newName);
        }
      },
      { immediate: true },
    );

    return {
      pokemonDetails,
      loading,
      errorMessage,
      capitalize,
    };
  },
});
</script>

<style scoped>
.pokemon-card-header {
  background-color: #f2f2f2;
  padding: 15px;
  text-align: center;
}

.pokemon-card-image {
  text-align: center;
  padding: 20px;
}

.pokemon-card-image img {
  max-width: 100%;
  height: auto;
}

.pokemon-card-details {
  padding: 15px;
}
</style>
