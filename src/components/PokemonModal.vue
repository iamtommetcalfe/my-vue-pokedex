<!-- PokemonModal.vue -->
<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" @click="close">
      <div class="modal-content" @click.stop>
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'PokemonModel',
  methods: {
    close() {
      this.$emit('close');
    }
  }
}
</script>

<style>
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
  border-radius: 8px;
  padding: 20px;
  max-width: 500px;
  width: 100%;
}
</style>
