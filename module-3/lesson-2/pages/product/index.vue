<template>
  <div class="container mx-auto">
    <div class="p-6 border border-dashed border-green-400">
      <div class="p-4 shadow bg-white flex justify-between items-center">
        <h2 class="font-bold uppercase">Products</h2>
        <button
          @click="back.go(-1)"
          class="bg-red-600 text-white px-2 py-2 focus:ring-2 focus:ring-red-400 rounded-xl"
        >
          go back
        </button>
      </div>

      <div class="wrapper">
        <div
          v-for="el in data"
          :key="el.id"
          class="card shadow-lg w-[260px] min-h-[360px] relative"
        >
          <img
            :src="el.image"
            alt="rasm"
            class="card-img object-cover object-center w-full "
          />
          <div class="card-body p-4">
            <h2 class="text-green-900 text-xl">{{el.title}}</h2>
            <strong class="text-2xl text-red-500">{{el.price}}$</strong>
            <NuxtLink :to="`/product/${el.id}`" class="bg-cyan-500 block absolute bottom-4 px-3 py-1 focus:ring-2">
              Details
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const back = useRouter();
const { data } = useFetch("https://fakestoreapi.com/products");

console.log(data);
</script>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat( auto-fill, minmax( 260px, 1fr));
  gap: 30px;
  padding-top: 30px;
}

.card-img {
  transform: scale(0.6);
  height: 200px;
  object-fit: contain;
}
</style>
