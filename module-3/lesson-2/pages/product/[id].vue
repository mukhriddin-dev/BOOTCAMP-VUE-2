<template>
  <div class="container mx-auto">
    <div class="wrapper p-6 border border-dashed border-green-400">
      <div class="p-4 shadow bg-white flex justify-between items-center">
        <h2 class="font-bold uppercase">Products</h2>
        <button
          @click="back.go(-1)"
          class="bg-red-600 text-white px-2 py-2 focus:ring-2 focus:ring-red-400 rounded-xl"
        >
          go back
        </button>
      </div>
      <div class="border-dashed border-2 my-4 border-green-500 p-5 flex"> 

        <img :src="data.image" alt="product" class="w-[500px]">
        <div class="p-8 text-green-800 ">
          <h1 class="text-2xl mb-6">Name: {{data?.title}} </h1>
          <h2 class="text-2xl mb-6">Price: {{data?.price}} $</h2>
          <div class="flex gap-4 mb-6">
            <span>Rating: <i v-for="(el, ind) in Math.round(data?.rating?.rate)" :key="ind" class='bx bxs-star'></i>  </span> 
            <span>Count: {{data?.rating?.count}}</span>
          </div>
          <p class="text-green-400 mb-5 mb-6">
           {{ data?.description }}
          </p>

          <span class="mx-3 bg-orange-400 text-black p-2 rounded-2xl mb-6"> {{ data?.category }} </span>
          <!-- <span class="mx-3 bg-blue-400 text-black p-2 rounded-2xl"> tech </span>
          <span class="mx-3 bg-indigo-400 text-black p-2 rounded-2xl"> smart </span> -->

        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
const back=useRouter();
const { id } = useRoute().params;

const {data} =await useFetch(`https://fakestoreapi.com/products/${id}`);



if(!data.value){
   throw createError({
          statusMessage: "Product is not defined" ,
          statusCode: 404,
   })
}


</script>

<style lang="scss" scoped></style>
