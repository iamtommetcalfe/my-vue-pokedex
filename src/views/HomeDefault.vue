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
      <tr v-for="pokemon in paginatedPokemon" :key="pokemon.name">
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
              :currentPage="currentPage"
              :totalPages="totalPages"
              @navigatePage="goToPage"
              :canNavigatePrevious="currentPage > 1"
              :canNavigateNext="currentPage < totalPages"
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
import { defineComponent, ref } from 'vue';
import { fetchAllPokemon } from '@/api/pokemonAPI';
import PokemonModal from '@/components/PokemonModal.vue';
import PokemonPage from '@/views/PokemonPage.vue';
import { capitalize } from '@/helpers';
import PaginationBar from "@/components/PaginationBar.vue";

interface Pokemon {
  name: string;
  // any other properties you might expect from the API
}

export default defineComponent({
  name: 'HomeDefault',
  props: {
    searchQuery: {
      type: String,
      default: ''
    }
  },
  components: {
    PaginationBar,
    PokemonModal,
    PokemonPage
  },
  watch: {
    searchQuery: {
      immediate: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.currentPage = 1;  // Reset to first page
        }
      }
    }
  },
  data() {
    return {
      allPokemon: [] as Pokemon[],
      currentPage: 1,
      itemsPerPage: 10
    };
  },
  computed: {
    filteredPokemon() {
      if (!this.searchQuery) return this.allPokemon;
      return this.allPokemon.filter(pokemon => pokemon.name.includes(this.searchQuery.toLowerCase()));
    },
    paginatedPokemon() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredPokemon.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.filteredPokemon.length / this.itemsPerPage);
    }
  },
  methods: {
    capitalize,
    openPokemonModal(name: string) {
      this.selectedPokemon = name;
      this.showModal = true;
    },
    goToPage(page: number) {
      this.currentPage = page;
    }
  },
  async created() {
    try {
      const response = await fetchAllPokemon();
      this.allPokemon = response.results;
    } catch (error) {
      console.error("Failed to fetch Pokémon list:", error);
      this.errorMessage = "Failed to load Pokémon. Please try again later.";
    }
  },
  setup() {
    const showModal = ref(false);
    const selectedPokemon = ref<string | null>(null);
    const errorMessage = ref<string | null>(null);

    return {
      showModal,
      selectedPokemon,
      errorMessage
    };
  }
});
</script>
