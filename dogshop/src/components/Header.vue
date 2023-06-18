<script>
  import { RouterLink } from 'vue-router';
  export default{ 
    data(){
      return{
        showMenu: false
      }
    },
    components: { RouterLink },
    methods: {
      toogleMenu(){
        this.showMenu = !this.showMenu
      }
    }
  }
</script>

<template>
  <header class="flex justify-between mx-3 md:mx-56 mt-2">
    <RouterLink to="/">
      <img alt="Dogshop logo" class="hover:scale-105 transition-all ease-in-out w-36" src="../assets/dogshop.png" />
    </RouterLink>

    <div id="desktop" class="my-auto hidden md:block">
      <nav class="flex justify-between gap-5 text-primary font-bold">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/breeds">Breed</RouterLink>
      </nav>
    </div>

    <button id="mobile" class="md:hidden" @click="toogleMenu">
        <img class="w-7" src="http://cdn.onlinewebfonts.com/svg/img_545657.png" />
    </button>

    <div v-if="showMenu">
      <div class="fixed top-0 left-0 w-screen h-screen z-30 bg-gray-500 bg-opacity-70 backdrop-filter backdrop-blur-sm"></div>          
      <div class="fixed top-0 left-0 z-40 w-screen h-screen flex items-center justify-center">            
        <div class="text-primary p-4 text-center">
          <nav @click="toogleMenu" class='flex flex-col gap-y-9 p-9'>
            <RouterLink to="/" class="md:text-6xl text-4xl rounded-full border-2 border-primary px-3 py-1 font-semibold">Home</RouterLink>
            <RouterLink to="/breeds" class="md:text-6xl text-4xl rounded-full border-2 border-primary px-3 py-1 font-semibold">Breed</RouterLink>
          </nav>
          <button
            class="absolute top-4 right-4 md:right-32 px-4 py-2 text-4xl hover:scale-110 transition-all ease-in-out"
            @click="toogleMenu"
          >
            X
          </button>
        </div>
      </div>
    </div>
  </header>
</template>