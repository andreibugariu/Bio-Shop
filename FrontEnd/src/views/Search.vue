<template>
    <NavComponent />

    <div class="page-search">
        <div class="columns is-multiline" v-if="products.length > 0">
            <div class="column is-12">
                <h1 class="title">Search</h1>
                <h2 class="is-size-5 has-text-grey">Search term: "{{ query }}"</h2>
            </div>
            <ProductBox v-for="product in products" v-bind:key="product.id" v-bind:product="product" />

        </div>
        <p v-else>Nu există produse cu termenul "{{ query }}" , te rog mai încearca ...</p>
        <footer class="footer">
            <p class="has-text-centered">Copyright (c) 2022</p>
        </footer>
    </div>

</template>



<script>
import axios from 'axios'
import ProductBox from '@/components/ProductBox.vue'
import NavComponent from '@/components/NavComponent.vue'

export default {
    name: 'SearchView',
    components: {
        ProductBox,
        NavComponent
    },
    data() {
        return {
            products: [],
            query: ''
        }
    },
    mounted() {
        let uri = window.location.search.substring(1)
        let params = new URLSearchParams(uri)

        if (params.get('query')) {
            this.query = params.get('query')
            this.performSearch()
        }
    },
    methods: {
        performSearch() {
            axios.get(`http://localhost:8080/search_name/${this.query}`)//to add some handelinh error
                .then(response => {
                    this.products = response.data
                   
                }).catch(error => {
                console.log(error)
            })
        }
    }
}

</script>