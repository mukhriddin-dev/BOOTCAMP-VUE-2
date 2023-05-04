<script setup></script>

<template>
  <span class="loader"></span>
</template>

<style scoped>
.loader {
  width: 48px;
  height: 48px;
  border: 5px solid #000000;
  border-bottom-color: #ff3d00;
  border-radius: 50%;
  display: block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  margin: 40px auto;

}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
