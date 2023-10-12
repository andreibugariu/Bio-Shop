<template>
    <NavComponent />
    <div class="page-product">
        <div class="columns is-multiline">
            <div class="column is-9">
                <figure class="image mb-6">
                    <img v-bind:src="product.Photo" class="image is-cover">
                </figure>

                <h1 class="title">{{ product.ProductName }}</h1>

                <p>{{ product.Description }}</p>
            </div>

            <div class="column is-3">
                <h2 class="subtitle">Information</h2>

                <p><strong>Farmer Email: </strong>{{ product.FarmerEmail }}</p>

                <p><strong>Farmer Phone: </strong>{{ farmer.PhoneNumber }}</p>

                <p><strong>Price: </strong>{{ product.Price }} lei</p>

                <div class="field has-addons mt-6">
                    <div class="control">
                        <input type="number" class="input" min="1" v-model="quantity">
                    </div>

                    <div class="control">
                        <a class="button is-dark" @click="addToCart()">Adauga in coș</a>
                    </div>
                </div>
            </div>
        </div>
        <footer class="footer">
            <p class="has-text-centered">Copyright (c) 2022</p>
        </footer>
    </div>
</template>


<script>
import axios from 'axios'
import { toast } from 'bulma-toast'
import NavComponent from '@/components/NavComponent.vue'
export default {
    name: 'ProductDetails',
    components: {
        NavComponent
    },
    data() {
        return {
            product: {},
            quantity: 1,
            Product :{
                productID: '',
                userEmail: '',
            },
                farmer: {}
            
        }
    },
    mounted() {
        this.getProduct(),
            this.getUserId()
    },
    methods: {
        getProduct() {
            axios.get(`http://localhost:8080/product/${this.$route.params.id}`).then(respons => {
                this.product = respons.data
                this.Product.productID = this.$route.params.id
                const name = this.product.FarmerEmail

                axios.get(`http://localhost:8080/farmer/${name}`).
                    then(respons => {
                        this.farmer=respons.data
                    }).catch(error => {
                    console.log(error)
                })

            }).catch(error => {console.log(error)})

        },
        getUserId() {///from cookie
            axios.get('http://localhost:8080/get_user')
                .then(response => {
                    this.Product.userEmail=response.data
                    // console.log(response.data)
                }).catch(error => {
                    console.log(error)
                })
        },
        addToCart() {
            const order= {
                userEmail: this.Product.userEmail,
                productID: this.Product.productID,
                productName: this.product.ProductName,
                productPrice: this.product.Price,
                quantity: this.quantity,
            }
            axios.post('http://localhost:8080/user_product',order)
                .then(response => {
                    toast({
                        message: "Add successfully",
                        type: 'is-success',
                        dismissable: true,
                        pauseOnHover: true,
                        duration: 2000,
                        position: 'bottom-right'
                    })
                    
                    console.log(response.data)
                }).catch(error => {
                    toast({
                        message: "Capacitate depasita",
                        type: 'is-danger',
                        dismissable: true,
                        pauseOnHover: true,
                        duration: 2000,
                        position: 'bottom-right'
                    })
                    console.log(error)
                })
        }
    }
}

</script>

<style type="text/css">

        html,
        body {
            font-family: 'Open Sans';
        }

        img {
            padding: 5px;
            border: 1px solid #ccc;
        }
    
</style>