<template>
  <div
    class="btn-toolbar align-items-center justify-content-center"
    role="toolbar"
    aria-label="Toolbar with button groups"
  >
    <div
      class="btn-group btn-group-sm me-2"
      role="group"
      aria-label="Previous Group"
    >
      <button
        class="btn btn-primary"
        :disabled="!canNavigatePrevious"
        @click="$emit('navigatePage', currentPage - 1)"
      >
        Previous
      </button>
    </div>

    <div
      class="btn-group btn-group-sm me-2"
      role="group"
      aria-label="Pages Group"
    >
      <button
        @click="$emit('navigatePage', 1)"
        :class="['btn', 'btn-primary', { active: currentPage === 1 }]"
      >
        1
      </button>
      <span v-if="currentPage > 3">...</span>
      <button
        v-for="page in displayedPages"
        :key="page"
        :class="['btn', 'btn-primary', { active: page === currentPage }]"
        @click="$emit('navigatePage', page)"
      >
        {{ page }}
      </button>

      <span v-if="currentPage < totalPages - 2">...</span>
      <button
        v-if="totalPages > 1"
        @click="$emit('navigatePage', totalPages)"
        class="test btn btn-primary btn-sm"
      >
        {{ totalPages }}
      </button>
    </div>

    <div
      class="btn-group btn-group-sm me-2"
      role="group"
      aria-label="Next Group"
    >
      <button
        class="btn btn-primary"
        :disabled="!canNavigateNext"
        @click="$emit('navigatePage', currentPage + 1)"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    totalPages: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
    canNavigatePrevious: {
      type: Boolean,
      required: true,
    },
    canNavigateNext: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    displayedPages(): number[] {
      const pages = [];
      for (const offset of [-2, -1, 0, 1, 2]) {
        const page = this.currentPage + offset;

        if (page > 1 && page < this.totalPages) {
          pages.push(page);
        }
      }
      return pages;
    },
  },
});
</script>
