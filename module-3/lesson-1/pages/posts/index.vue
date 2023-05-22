<template>
    <div class="wrapper">
      <h2>Posts page</h2>
        <ul >
          <li v-for="(el,ind) in data" :key="ind" class="post-item">
             POST ITEM - {{ ind+1 }}
          </li>
        </ul>
    </div>
  </template>
  
  <script setup>
  const data=ref([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17])
</script>
  
  <style scoped lang="scss">
  .wrapper {
    background-color: limegreen;
    padding: 20px;
    border-radius: 10px;
  }

  .post-item{
    background-color: white;
    color:darkgreen;
    font-weight: bold;
    list-style-type: none;
    margin: 4px;
    padding: 5px;
    border-radius: 5px;
  }
  </style>
  