<script>
import Sidebar from "./components/Sidebar/Sidebar.vue";
import Header from "./components/Header/Header.vue";
import Card from "./ui/Card/Card.vue";

export default {
  data() {
    return {
      toggle: true,
      val: "",
      number: 8,
      user: [],
    };
  },
  
  components: {
    Sidebar,
    Header,
    Card,
  },

  methods: {
    toggleMenu() {
      // this.toggle = !this.toggle;
      this.$refs.swipe.classList.toggle("swipe");
      this.$refs.grow.classList.toggle("full");
    },

    incer() {
      this.number += 1;
    },

    async fetchUser() {
      try {
        const response = await fetch("https://reqres.in/api/users?page=1");
        const res = await response.json();
        this.user = res.data;
      } catch (err) {
        console.log(err);
      }
    },
  },

  computed: {
    filterId() {
      const filterUsers = this.user.filter((el) => {
        if (el.id % 2 == 0) {
          return el;
        }
      });

      return filterUsers;
    },
  },

  mounted() {
    this.fetchUser();
    console.log(this.user);
  },
};
</script>

<template>
  <Header :toggle="toggleMenu" />

  <main class="flex">
    <aside ref="swipe" class="top-0 bg-white mt-[-56px]">
      <Sidebar />
    </aside>

    <section class="main max-w-full grow" ref="grow">
      <div class="bg-purple-100 p-5 rounded-md max-w-full h-[91vh] m-2">
        <input
          type="text"
          class="border-green-400 border-4"
          placeholder="enter username"
          v-model="val"
        />
        <h1 class="text-xl">
          {{ number }}
        </h1>

        <button @click="incer">add</button>

        <div class="flex">
          <Card v-for="el in filterId" :key="el.id" :data="el" />
        </div>
      </div>

      <!-- <router-view></router-view> -->
    </section>
  </main>
</template>

<style scoped>
aside {
  transition: all 0.3s ease;
}

.full {
  min-width: 100% !important;
  transform: translateX(-17%);
}
.swipe {
  transform: translateX(-120%);
}
</style>
