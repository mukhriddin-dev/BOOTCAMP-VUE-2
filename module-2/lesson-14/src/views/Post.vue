<script setup>
import { ref, onMounted } from "vue";
import { usePost } from "@/stores/post";

const store = usePost();

console.log(store);

onMounted(() => {
  store.getPost();
});
</script>

<template>
  <main>
    <h1>Post</h1>
    <ul>
      <li v-for="el in store.post.data">{{ el.title }}</li>
    </ul>
  </main>
</template>
