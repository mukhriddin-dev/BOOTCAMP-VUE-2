<script setup>
import Loader from "../../components/UI/Loader.vue";
import Message from "../../components/UI/Message.vue";
import PostItem from "./PostItem.vue";

import { defineProps } from "vue";

const props = defineProps({
  post: Object,
});
</script>

<template>
  <h1 class="text-center fw-bold d-block">POST LIST</h1>
  <div v-if="props?.post?.load">
    <Loader />
  </div>
  <div v-else-if="!props?.post?.arr?.length">
    <Message />
  </div>

  <ul v-else class="list-group w-50 mx-auto my-5">
    <PostItem v-for="el in props?.post?.arr" :data="el" :key="el.id" />
  </ul>
</template>

<style scoped></style>
