<script setup>
import PostList from "./views/Post/PostList.vue";

import { ref, reactive, onMounted, onBeforeMount, onUpdated, onBeforeUpdate } from "vue";

let state = reactive({
  load: true,
  arr: [],
});

const getPost = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = await response.json();

    if (response.status === 200) {
      state.arr = result;
    }

    state.load = false;
  } catch (err) {
    console.log(err);
  }
};

onMounted(() => {
  getPost();
});


</script>

<template>
  <PostList :post="state" />
</template>

<style></style>
