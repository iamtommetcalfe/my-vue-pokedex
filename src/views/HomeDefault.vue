<template>
  <div>
    <h1>Welcome to Pokédex</h1>
    <ul>
      <li v-for="pokemon in pokemonList" :key="pokemon.name">
        <a href="#" @click.prevent="openPokemonModal(pokemon.name)">{{ pokemon.name }}</a>
      </li>
    </ul>

    <PokemonModal v-if="showModal" @close="showModal = false">
      <PokemonPage :name="selectedPokemon" />
    </PokemonModal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { fetchAllPokemon } from '@/api/pokemonAPI';
import PokemonModal from '@/components/PokemonModal.vue';
import PokemonPage from '@/views/PokemonPage.vue';

export default defineComponent({
  name: 'HomeDefault',
  components: {
    PokemonModal,
    PokemonPage
  },
  setup() {
    const pokemonList = ref([]);
    const showModal = ref(false);
    const selectedPokemon = ref<string | null>(null);

    onMounted(async () => {
      try {
        const pokemons = await fetchAllPokemon();
        pokemonList.value = pokemons;
      } catch (error) {
        console.error("Failed to fetch Pokémon list:", error);
      }
    });

    const openPokemonModal = (pokemonName: string) => {
      selectedPokemon.value = pokemonName;
      showModal.value = true;
    };

    return {
      pokemonList,
      showModal,
      selectedPokemon,
      openPokemonModal
    };
  }
});
</script>

<style scoped>
/* Add your styles here */
</style>
