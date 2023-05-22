<template>
  <div class="wrapper">
    <nav class="bg-cyan-600 p-8">
      <ul>
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/about">About</nuxt-link></li>
        <li><nuxt-link to="/service">Service</nuxt-link></li>
        <li><nuxt-link to="/contact">Contact</nuxt-link></li>
      </ul>
    </nav>

    <main>
      <slot />

     </main>

    <Footer />
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.wrapper {
  background-color: limegreen;
  padding: 20px;
  border-radius: 10px;
}

ul {
  display: flex;
  width: 50%;
  justify-content: space-between;
}

main {
  min-height: 86vh;
}

.router-link-active{
  padding: 10px;
  background-color: #fff;
  color:green;
}
</style>
