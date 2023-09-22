<template>
  <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
    <div class="btn-group me-2" role="group" aria-label="First group">
      <button id="previous-btn" type="button" class="btn btn-primary btn-sm"
              :class="{ 'disabled': !previousUrl }"
              :data-url="previousUrl"
              @click="previousUrl ? $emit('navigate', previousUrl) : null"
      >
        Previous
      </button>
    </div>

    <div class="btn-group me-2" role="group" aria-label="Second group">
      <button v-if="currentPage > 2" @click="$emit('navigatePage', 1)" class="btn btn-primary btn-sm">1</button>
      <span v-if="currentPage > 3">...</span>

      <button
          v-for="page in displayedPages"
          :key="page"
          :class="['btn', 'btn-primary', 'btn-sm', {'active': page === currentPage}]"
          @click="$emit('navigatePage', page)"
      >
        {{ page }}
      </button>

      <span v-if="currentPage < totalPages - 2">...</span>
      <button v-if="currentPage < totalPages - 1" @click="$emit('navigatePage', totalPages)" class="btn btn-primary btn-sm">{{ totalPages }}</button>
    </div>

    <div class="btn-group" role="group" aria-label="Third group">
      <button id="next-btn" type="button" class="btn btn-primary btn-sm"
              :class="{ 'disabled': !nextUrl }"
              :data-url="nextUrl"
              @click="nextUrl ? $emit('navigate', nextUrl) : null"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    totalPages: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    nextUrl: {
      type: String as () => string | null,
      default: null
    },
    previousUrl: {
      type: String as () => string | null,
      default: null
    }
  },
  computed: {
    displayedPages(): number[] {
      const pages = [];
      for (const offset of [-2, -1, 0, 1, 2]) {
        const page = this.currentPage + offset;
        if (page > 0 && page <= this.totalPages) {
          pages.push(page);
        }
      }
      return pages;
    }
  }
});
</script>

<style scoped>
/* Add your styles here */
</style>
