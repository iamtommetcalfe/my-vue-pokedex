<template>
  <div class="container">
    <h1>Welcome to My Pokédex</h1>

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

    <PokemonModal
      :isVisible="showModal"
      @close="closePokemonModal"
      @navigate="navigatePokemon"
    >
      <PokemonPage :name="selectedPokemon" />
    </PokemonModal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { fetchAllPokemon } from "@/api/pokemonAPI";
import PokemonModal from "@/components/PokemonModal.vue";
import PokemonPage from "@/views/PokemonPage.vue";
import { capitalize } from "@/helpers";
import PaginationBar from "@/components/PaginationBar.vue";

interface Pokemon {
  name: string;
  // any other properties you might expect from the API
}

export default defineComponent({
  name: "HomeDefault",
  components: {
    PaginationBar,
    PokemonModal,
    PokemonPage,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    const showModal = ref(route.query.modal === "true");
    const selectedPokemon = ref<string | null>(
      route.query.pokemon as string | null,
    );
    const errorMessage = ref<string | null>(null);
    const allPokemon = ref<Pokemon[]>([]);
    const currentPage = ref(parseInt(route.query.page as string) || 1);
    const itemsPerPage = ref(10);

    const filteredPokemon = computed(() => {
      if (!route.query.search) return allPokemon.value;
      const searchQuery = route.query.search
        ? route.query.search.toString().toLowerCase()
        : "";
      return allPokemon.value.filter((pokemon) =>
        pokemon.name.includes(searchQuery),
      );
    });

    const paginatedPokemon = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return filteredPokemon.value.slice(start, end);
    });

    const totalPages = computed(() => {
      return Math.ceil(filteredPokemon.value.length / itemsPerPage.value);
    });

    const openPokemonModal = (name: string) => {
      selectedPokemon.value = name;
      showModal.value = true;
      updateRoute();
    };

    const closePokemonModal = () => {
      showModal.value = false;
      updateRoute();
    };

    const goToPage = (page: number) => {
      currentPage.value = page;
      updateRoute();
    };

    const navigatePokemon = (direction: number) => {
      const currentIndex = filteredPokemon.value.findIndex(
        (pokemon) => pokemon.name === selectedPokemon.value,
      );
      if (currentIndex !== -1) {
        const newIndex =
          (currentIndex + direction + filteredPokemon.value.length) %
          filteredPokemon.value.length;
        selectedPokemon.value = filteredPokemon.value[newIndex].name;
        updateRoute();
      }
    };

    const updateRoute = () => {
      router.push({
        path: "/",
        query: {
          page: currentPage.value.toString(),
          modal: showModal.value.toString(),
          pokemon: selectedPokemon.value,
        },
      });
    };

    watch(route, () => {
      currentPage.value = parseInt(route.query.page as string) || 1;
      showModal.value = route.query.modal === "true";
      selectedPokemon.value = route.query.pokemon as string | null;
    });

    const fetchPokemonList = async () => {
      try {
        const response = await fetchAllPokemon();
        allPokemon.value = response.results;
      } catch (error) {
        console.error("Failed to fetch Pokémon list:", error);
        errorMessage.value = "Failed to load Pokémon. Please try again later.";
      }
    };

    fetchPokemonList();

    return {
      showModal,
      selectedPokemon,
      errorMessage,
      allPokemon,
      currentPage,
      itemsPerPage,
      filteredPokemon,
      paginatedPokemon,
      totalPages,
      capitalize,
      openPokemonModal,
      closePokemonModal,
      goToPage,
      navigatePokemon,
    };
  },
});
</script>
