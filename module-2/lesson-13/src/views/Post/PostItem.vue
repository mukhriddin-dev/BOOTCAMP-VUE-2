<script setup>
import {defineProps} from "vue";
const props=defineProps({
  data:Object
})

</script>

<template>
  <li class="list-group-item my-2">
    {{ props?.data?.title }}
  </li>
</template>

<style scoped></style>
