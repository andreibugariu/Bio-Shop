<template>
    <div class="page-sign-up">
        <div class="columns">
            <div class="column is-4 is-offset-4">
                <h1 class="title">Creare Produs</h1>

                <form @submit.prevent="submitForm">
                    <div class="field">
                        <label>Numele Proudusului</label>
                        <div class="control">
                            <input type="text" class="input" v-model="productname">
                        </div>
                    </div>

                    <div class="field">
                        <label>Descrierea</label>
                        <div class="control">
                            <input type="text" class="input" v-model="description">
                        </div>
                    </div>

                    <div class="field">
                        <label>Pret</label>
                        <div class="control">
                            <input type="number" class="input" min="0" v-model="price">
                        </div>
                    </div>

                    <div class="field">
                        <label>Poza</label>
                        <div class="control">
                            <input type="text" class="input" v-model="photo">
                        </div>
                    </div>

                    <div class="field">
                        <label>Cantitate</label>
                        <div class="control">
                            <input type="number" class="input" v-model="quantity">
                        </div>
                    </div>

                    <select required name="category" id="category" v-model="category">
                        <option value="">Categorie*</option>
                        <option value="Fructe">Fructe</option>
                        <option value="Legume">Legume</option>
                        <option value="Lapte">Lapte</option>
                        <option value="Oua">Oua</option>
                        <option value="Branzeturi">Branzeturi</option>
                    </select>

                    <div class="notification is-danger" v-if="errors.length">
                        <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
                    </div>

                    <div class="field">
                        <div class="control">
                            <button class="button is-dark">Create</button>
                        </div>
                    </div>

                    <hr>

                </form>
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

export default {
    name: 'CreateProduct',
    data() {
        return {
            productname: '',
            description: '',
            price: '',
            photo: '',
            category: '',
            quantity: '',
            farmeremail: '',
            errors: []
        }
    },

    methods: {
        submitForm() {


           var email=axios.get('http://localhost:8080/get_user')
                 .then(response => {
                     this.farmeremail = response.data
                     return response.data
                 }).catch(error => {
                     console.log(error)
                 })

            this.errors = []
            if (this.productname === '') {
                this.errors.push('Lipsește numele, te rog să îl introduci')

            } else if (this.description === '') {

                this.errors.push('Lipsește descrierea, te rog să o introduci')
            } else if (this.price === '') {
                this.errors.push('The price is missing')
            } else if (this.photo === '') {
                this.errors.push('Lipseste poza , te rog sa o introduci!')
            } else if (this.category === '') {
                this.errors.push('Lipsește categoria, te rog să o introduci')
            } else if (this.quantity === '') {
                this.errors.push('Lipsește cantitatea, te rog să o introduci')
            }

            email.then(response => {
                var ceva = response
                if (!this.errors.length) {
                    const formData = {
                        productname: this.productname,
                        description: this.description,
                        price: this.price,
                        photo: this.photo,
                        category: this.category,
                        quantity: this.quantity,
                        farmeremail: ceva
                    }

                    axios.post("http://localhost:8080/product", formData)
                        .then(response => {
                            toast({
                                message: "Produsul s-a creat cu succes!",
                                type: 'is-success',
                                dismissable: true,
                                pauseOnHover: true,
                                duration: 2000,
                                position: 'botton-right',
                            })
                            console.log(response)
                            this.$router.push('/home_farmer')
                        })
                        .catch(error => {
                            if (error.response) {
                                this.errors.push(error.response.data)
                            }
                        })

                }

                
            })

      
        }
    }

}
</script>