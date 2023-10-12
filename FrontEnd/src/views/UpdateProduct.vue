<template>

    <div class="page-sign-up">
        <div class="columns">
            <div class="column is-4 is-offset-4">
                <h1 class="title">Actualizează produsul</h1>

                <form @submit.prevent="submitForm">
                    <div class="field">
                        <label>Noul nume al produsului</label>
                        <div class="control">
                            <input type="text" class="input" v-model="productname">
                        </div>
                    </div>

                    <div class="field">
                        <label>Noua descriere</label>
                        <div class="control">
                            <input type="text" class="input" v-model="description">
                        </div>
                    </div>

                    <div class="field">
                        <label>Noul pret</label>
                        <div class="control">
                            <input type="number" class="input" min="0" v-model="price">
                        </div>
                    </div>

                    <div class="field">
                        <label>Noua fotografie</label>
                        <div class="control">
                            <input type="text" class="input" v-model="photo">
                        </div>
                    </div>

                    <select name="category" id="category" v-model="category">
                        <option value="">Categorie*</option>
                        <option value="Fructe">Fructe</option>
                        <option value="Legume">Legume</option>
                        <option value="Vita">Vita</option>
                        <option value="Porc">Porc</option>
                        <option value="Oaie">Oaie</option>
                        <option value="Lactate">Lactate</option>
                    </select>

                    <div class="field">
                        <div class="control">
                            <button class="button is-dark">Creeaza</button>
                        </div>
                    </div>

                    <hr>

                </form>
            </div>
        </div>
    </div>
    <footer class="footer">
        <p class="has-text-centered">Copyright (c) 2022</p>
    </footer>
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
        category: ''
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

        email.then(response => {
            var email = response
                const formData = {
                    productname: this.productname,
                    description: this.description,
                    price: this.price,
                    photo: this.photo,
                    category: this.category,
                    farmeremail: email
                }
            
            axios.put(`http://localhost:8080/product/${this.$route.params.id}`, formData)
                    .then(response => {
                        toast({
                            message: "Product updated successfully",
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

            

            
        })

  
    }
}

}      
</script>
