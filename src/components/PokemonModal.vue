<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" v-if="isVisible" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button @click="prevPokemon" class="nav-button left">&larr;</button>
        <slot></slot>
        <button @click="nextPokemon" class="nav-button right">&rarr;</button>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";

// Define the prop
const { isVisible } = defineProps<{
  isVisible: boolean;
}>();

const emit = defineEmits(["close", "navigate"]);

const closeModal = () => {
  emit("close");
};

const prevPokemon = () => {
  emit("navigate", -1);
};

const nextPokemon = () => {
  emit("navigate", 1);
};

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "ArrowLeft") {
    prevPokemon();
  } else if (event.key === "ArrowRight") {
    nextPokemon();
  } else if (event.key === "Escape") {
    closeModal();
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeydown);
});
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-content {
  background: white;
  padding: 20px;
  max-width: 500px;
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #333;
}

.nav-button.left {
  left: 10px;
}

.nav-button.right {
  right: 10px;
}
</style>
