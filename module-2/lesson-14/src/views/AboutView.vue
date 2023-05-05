<script setup>
import { useCounterStore } from "@/stores/counter.js";
import { ref } from "vue";
const store = useCounterStore();
</script>

<template>
  <div class="about">
    <h1>This is an about page {{ store.count }}</h1>

    <button @click="store.increment">add</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
