<!-- PokemonModal.vue -->
<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" @click="closeModal">
      <div class="modal-content" @click.stop>
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'close'): void;
}>();

const closeModal = () => {
  emit('close');
};
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
}
</style>
