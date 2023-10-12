<template>
    <NavFarmer />
    <div id="wrapper">
        <div class="home">
            <section class="hero is-small is-dark mb-6">
                <div class="hero-body has-text-centered">
                    <p class="title mb-6">
                        Bine ai venit pe BioShop
                    </p>
                    <p class="subtitle">
                        De aici începe călătoria spre un stil de viață sănătos
                    </p>
                </div>
            </section>

            <!-- <router-link :to="{ name: 'cart', params: { id: userEmail } }">"hellllooooo"</router-link> -->


            <div class="columns is-multiline">
                <div class="column is-12">
                    <h2 class="is-size-2 has-text-centered">Produsele dumneavoastră</h2>
                </div>

                <FarmerItem v-for="product in products" v-bind:key="product.id" v-bind:product="product"
                    v-on:removeItem="removeItem" />

            </div>
        </div>
        <footer class="footer">
            <p class="has-text-centered">Copyright (c) 2022</p>
        </footer>
    </div>
</template>

<script>
// @ is an alias to /src
import NavFarmer from '@/components/NavFarmer.vue'
// import ProductBox from '@/components/ProductBox.vue'
import FarmerItem from '@/components/FarmerItem.vue'
import axios from 'axios'


export default {
    name: 'HomeFarmerView',
    components: {
        NavFarmer,
        FarmerItem
    },
    data() {
        return {
            products: [],
            userEmail: ''
        }
    },
    mounted() {//when the page is finish we call this code
        this.$forceUpdate();///for the bug!!!!!!!!!!

        // this.getProducts(),//creem functia care ne returneaza produsele
        // this.getUserId(),
        this.getInfo()
        

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
                var ceva = response
                axios.get(`http://localhost:8080/farmer_products/${ceva}`)
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


<!-- <style scoped>
.image {
    margin-top: -1.25rem;
    margin-left: -1.25rem;
    margin-right: -1.25rem;
}
</style> -->