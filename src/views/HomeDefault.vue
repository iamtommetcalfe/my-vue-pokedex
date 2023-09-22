<template>
  <div class="container">
    <h1>Welcome to My Vue Pokédex</h1>
    <table class="table table-hover table-striped table-bordered">
      <thead>
      <tr>
        <th scope="col">Name</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="pokemon in pokemonList" :key="pokemon.name">
        <td><a href="#" @click.prevent="openPokemonModal(pokemon.name)">{{ capitalize(pokemon.name) }}</a></td>
      </tr>
      </tbody>
      <tfoot>
      <tr>
        <td>
          <PaginationBar
              :nextUrl="nextUrl"
              :previousUrl="previousUrl"
              :currentPage="currentPage"
              :totalPages="totalPages"
              @navigate="fetchPokemonsFromUrl"
              @navigatePage="goToPage"
          />
        </td>
      </tr>
      </tfoot>
    </table>

    <PokemonModal v-if="showModal" @close="showModal = false">
      <PokemonPage :name="selectedPokemon" />
    </PokemonModal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { fetchAllPokemon, fetchPokemonFromUrl } from '@/api/pokemonAPI';
import PokemonModal from '@/components/PokemonModal.vue';
import PokemonPage from '@/views/PokemonPage.vue';
import { capitalize } from '@/helpers';
import PaginationBar from "@/components/PaginationBar.vue";

export default defineComponent({
  name: 'HomeDefault',
  components: {
    PaginationBar,
    PokemonModal,
    PokemonPage
  },
  methods: {
    capitalize
  },
  setup() {
    const pokemonList = ref([]);
    const showModal = ref(false);
    const selectedPokemon = ref<string | null>(null);
    const nextUrl = ref<string | null>(null);
    const previousUrl = ref<string | null>(null);
    const currentPage = ref(1);
    const totalPages = ref(0);

    const itemsPerPage = 10;

    const calculateTotalPages = (count: number) => {
      totalPages.value = Math.ceil(count / itemsPerPage);
    };

    onMounted(async () => {
      try {
        const pokemons = await fetchAllPokemon();
        pokemonList.value = pokemons.results;
        previousUrl.value = pokemons.previous;
        nextUrl.value = pokemons.next;

        calculateTotalPages(pokemons.count);

      } catch (error) {
        console.error("Failed to fetch Pokémon list:", error);
      }
    });

    const openPokemonModal = (pokemonName: string) => {
      selectedPokemon.value = pokemonName;
      showModal.value = true;
    };

    const fetchPokemonsFromUrl = async (url: string | null) => {
      if (url) {
        try {
          const pokemons = await fetchPokemonFromUrl(url);

          // Extract the offset from the fetched URL and set currentPage
          const offsetParam = new URL(url).searchParams.get("offset");
          if (offsetParam) {
            const offset = Number(offsetParam);
            currentPage.value = getCurrentPageFromOffset(offset);
          }

          pokemonList.value = pokemons.results;
          previousUrl.value = pokemons.previous;
          nextUrl.value = pokemons.next;

          calculateTotalPages(pokemons.count);

        } catch (error) {
          console.error("Failed to fetch Pokémon list:", error);
        }
      }
    };

    const fetchPokemonWithOffset = async (offset: number) => {
      try {
        const pokemons = await fetchAllPokemon(itemsPerPage, offset);

        pokemonList.value = pokemons.results;
        previousUrl.value = pokemons.previous;
        nextUrl.value = pokemons.next;
      } catch (error) {
        console.error("Failed to fetch Pokémon with offset:", error);
      }
    };

    const goToPage = (page: number) => {
      currentPage.value = page;
      const offset = (page - 1) * itemsPerPage; // This should give 0 for the first page, itemsPerPage for the second page, etc.
      fetchPokemonWithOffset(offset);
    };

    const getCurrentPageFromOffset = (offset: number) => {
      return Math.floor(offset / itemsPerPage) + 1;
    };

    return {
      pokemonList,
      showModal,
      selectedPokemon,
      openPokemonModal,
      nextUrl,
      previousUrl,
      fetchPokemonsFromUrl,
      currentPage,
      totalPages,
      goToPage,
      getCurrentPageFromOffset
    };
  }
});
</script>

<style scoped>
/* Add your styles here */
</style>
