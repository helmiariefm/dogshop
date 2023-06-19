<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      showModal: false,
      selectedBreed: '',
    };
  },
  computed: {
    ...mapState(['dogs']),
    dogBreeds() {
      return Object.keys(this.dogs);
    },
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
      if (!this.showModal) {        
        this.selectedBreed = '';
      }
    },
  },
  created() {
    this.$store.dispatch('fetchDogBreed');
  },
};
</script>

<template>
    <div class="mx-3 md:mx-56 mt-11 mb-11 md:mb-0 text-center">
        <h1 class="text-3xl text-primary font-extrabold mb-7">Dog Breed</h1>
        <select v-model="selectedBreed" @change="toggleModal" class="text-primary font-bold border-2 border-primary rounded-full p-2">
            <option disabled value="">Select a breed</option>
            <option v-for="breed in dogBreeds" :key="breed" :value="breed">
                {{ breed }}
            </option>
        </select>
        <div class="grid grid-cols-2 md:grid-cols-4">
            <img src="../assets/dogs/1.png" class="w-36 md:w-40 mt-3 md:mt-11 mx-auto" />        
            <img src="../assets/dogs/2.png" class="w-36 md:w-40 mt-3 md:mt-11 mx-auto" />
            <img src="../assets/dogs/3.png" class="w-36 md:w-40 mt-3 md:mt-11 mx-auto" />
            <img src="../assets/dogs/4.png" class="w-36 md:w-40 mt-3 md:mt-11 mx-auto" />
            <img src="../assets/dogs/5.png" class="w-36 md:w-40 mt-3 md:mt-11 mx-auto" />
            <img src="../assets/dogs/6.png" class="w-36 md:w-40 mt-3 md:mt-11 mx-auto" />
            <img src="../assets/dogs/7.png" class="w-36 md:w-40 mt-3 md:mt-11 mx-auto" />
            <img src="../assets/dogs/8.png" class="w-36 md:w-40 mt-3 md:mt-11 mx-auto" />
        </div>

        <div
            id="modal"
            v-if="showModal && selectedBreed"
            class="fixed inset-0 flex items-center justify-center z-10"
        >
            <div class="bg-oyen relative text-secondary py-2 w-[548px] h-auto rounded-3xl mx-5">                                
                <h1 class="text-6xl font-semibold">{{ selectedBreed }}</h1>
                <h2 class="text-4xl font-thin" v-if="dogs[selectedBreed] && dogs[selectedBreed].length">
                    Sub Breed
                </h2>
                <div v-if="dogs[selectedBreed] && dogs[selectedBreed].length" class="mt-7 grid grid-cols-2 gap-2 md:grid md:grid-cols-4 md:gap-2 mx-4 mb-2">
                    <button v-for="subBreed in dogs[selectedBreed]" :key="subBreed" class="border-secondary border-2 px-3 py-2 rounded-full hover:bg-primary transition-all text-xl">
                        {{ subBreed }}
                    </button>
                </div>
                <div v-else>
                    <p>No Sub-Breed</p>
                </div>                
                <button @click="toggleModal" class="absolute top-2 right-4">X</button>
            </div>
        </div>
        <div
        v-if="showModal && selectedBreed"
        class="fixed inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm z-9"
        ></div>
    </div>
</template>
