<script>
export default {
    name:"Header",
    props:{
        toggle: Function
    }
}
</script>

<template>
  <header class="shadow">
    <nav class="flex justify-between w-full">

      <a href="#" class="logo ms-10 text-center text-2xl p-3 block text-purple-700">DASHBOARD</a>

      <div class="flex">

        <button @click="toggle" class="bg-purple-300 flex justify-center items-center focus:ring-2 text-3xl absolute right-2 top-3 w-[36px] h-[36px] rounded-lg">
          <i class="bx bx-menu"></i>
        </button>

      </div>

    </nav>
  </header>
</template>

<style></style>
