<script>
    import {mapState} from 'vuex'

    export default{
        computed: {
            ...mapState(['dogs']),
            dogBreeds(){
                return Object.keys(this.dogs)
            }
        },
        created(){
            this.$store.dispatch('fetchDogBreed')
        }
    }
</script>

<template>
    <div class="mx-3 md:mx-56 mt-11">
        <p>Breeds Page</p>
        <ul>
            <li v-for="breed in dogBreeds" :key="breed">{{ breed }}</li>
        </ul>
    </div>
</template>