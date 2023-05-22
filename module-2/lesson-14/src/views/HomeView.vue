<script setup>
import { ref } from "vue";
import TheWelcome from "../components/TheWelcome.vue";
import { useTodoStore } from "../stores/todo";

const store = useTodoStore();
const task = ref("");
const status=ref(false);

const add = () => {
  const newTask={
    title: task.value,
    status: status
  }
  store.setTodo(newTask);
  task.value = "";
};


</script>

<template>
  <main>
    <h1>{{ store.state.status }}</h1>

    <input type="text" v-model="task" placeholder="enter task title" />

    <button @click="add">add</button>
    <h2 v-if="!store.state.todo.length">NOT FOUND</h2>
    <ul>
      <li v-for="(el,index) in store.state.todo">
        {{ el.title }}
      </li>
    </ul>
  </main>
</template>
