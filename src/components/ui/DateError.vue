<template>
  <teleport to="body">
    <div class="backdrop" v-if="error" @click="setError"></div>
    <transition name="dialog">
      <dialog open v-if="error">
        <header>
          <h2>Error date chosen!</h2>
        </header>
        <section>
          Please, select some date in a future.
        </section>
        <menu>
          <button @click="setError">Close</button>
        </menu>
      </dialog>
    </transition>
  </teleport>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'DateError',
  methods: {
    ...mapMutations(['setError']),
  },
  computed: {
    error() {
      return this.$store.getters.getError
    },
  },
}
</script>

<style lang="scss" scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

dialog {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 20vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: white;
}

menu {
  padding: 0;
}

.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
  transform: scale(0.7);
}

.dialog-enter-active {
  transition: all 0.3s ease-out;
}

.dialog-enter-to,
.dialog-leave-from {
  opacity: 1;
  transform: scale(1);
}

.dialog-leave-active {
  transition: all 0.3s ease-in;
}
</style>
