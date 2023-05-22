<template>
  <div class="container mx-auto">
    <div class="wrapper p-6 border border-dashed border-green-400">
      <div class="p-4 shadow bg-white">
        <h2>Product item {{ id }}</h2>
        <button>go back</button>
      </div>
    </div>
  </div>
</template>

<script setup>

const { id } = useRoute().params;

</script>

<style lang="scss" scoped></style>
