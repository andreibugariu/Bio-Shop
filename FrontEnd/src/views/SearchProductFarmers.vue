<template>
    <NavFarmer />

    <div class="page-search">
        <div class="columns is-multiline" v-if="products.length > 0">
            <div class="column is-12">
                <h1 class="title">Search</h1>
                <h2 class="is-size-5 has-text-grey">Search term: "{{ query }}"</h2>
            </div>
            <FarmerItem v-for="product in products" v-bind:key="product.id" v-bind:product="product" />

        </div>
        <p v-else>Nu există produse cu termenul "{{ query }}" , te rog mai încearca ... </p>
        <footer class="footer">
            <p class="has-text-centered">Copyright (c) 2022</p>
        </footer>
    </div>

</template>



<script>
import axios from 'axios'
import FarmerItem from '@/components/FarmerItem.vue'
import NavFarmer from '@/components/NavFarmer.vue'

export default {
    name: 'SearchProductFarmers',
    components: {
        FarmerItem,
        NavFarmer
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
            this.getInfo()
        }
    },
    methods: {
        getInfo() {///from cookie

            var email = axios.get('http://localhost:8080/get_user')
                .then(response => {
                    this.userEmail = response.data
                    return response.data
                }).catch(error => {
                    console.log(error)
                })

            email.then(response => {//resolve this with promises
                var email = response
                axios.get(`http://localhost:8080/search_name_farmers_products/${email}/${this.query}`)
                    .then(response => {
                        this.products = response.data
                        console.log(this.products)
                    }).catch(error => {
                        console.log(error)
                    })
            })


        }
    }
}

</script>