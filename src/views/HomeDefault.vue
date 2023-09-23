<template>
  <div class="container">
    <h1>Welcome to My Vue Pokédex</h1>

    <div v-if="errorMessage" class="alert alert-danger">
      {{ errorMessage }}
    </div>

    <table v-else class="table table-hover table-striped table-bordered">
      <thead>
      <tr>
        <th scope="col">Name</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="pokemon in pokemonList" :key="pokemon.name">
        <td>
          <a href="#" @click.prevent="openPokemonModal(pokemon.name)">
            {{ capitalize(pokemon.name) }}
          </a>
        </td>
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
    const pokemonList = ref<Array<any>>([]);
    const showModal = ref<boolean>(false);
    const selectedPokemon = ref<string | null>(null);
    const nextUrl = ref<string | null>(null);
    const previousUrl = ref<string | null>(null);
    const currentPage = ref<number>(1);
    const totalPages = ref<number>(0);
    const errorMessage = ref<string | null>(null);

    const itemsPerPage: number = 10;

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
        errorMessage.value = "Failed to load Pokémon. Please try again later.";
      }
    });

    const openPokemonModal = (name: string) => {
      selectedPokemon.value = name;
      showModal.value = true;
    };

    const fetchPokemonsFromUrl = async (url: string) => {
      try {
        const pokemons = await fetchPokemonFromUrl(url);
        pokemonList.value = pokemons.results;
        previousUrl.value = pokemons.previous;
        nextUrl.value = pokemons.next;

        calculateTotalPages(pokemons.count);

      } catch (error) {
        console.error("Failed to fetch Pokémon list from URL:", error);
        errorMessage.value = "Failed to load Pokémon. Please try again later.";
      }
    };

    const goToPage = async (page: number) => {
      try {
        const offset = (page - 1) * itemsPerPage;
        const pokemons = await fetchAllPokemon(itemsPerPage, offset);
        pokemonList.value = pokemons.results;
        previousUrl.value = pokemons.previous;
        nextUrl.value = pokemons.next;

        calculateTotalPages(pokemons.count);
        currentPage.value = page;

      } catch (error) {
        console.error("Failed to fetch Pokémon for the page:", error);
        errorMessage.value = "Failed to load Pokémon. Please try again later.";
      }
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
      errorMessage
    };
  }
});
</script>