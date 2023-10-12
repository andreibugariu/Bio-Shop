<template>
    <div class="page-sign-up">
        <div class="columns">
            <div class="column is-4 is-offset-4">
                <h1 class="title">Log in</h1>

                <form @submit.prevent="submitForm">
                    <div class="field">
                        <label>Email</label>
                        <div class="control">
                            <input type="email" class="input" v-model="email">
                        </div>
                    </div>

                    <div class="field">
                        <label>Parola</label>
                        <div class="control">
                            <input type="password" class="input" v-model="password">
                        </div>
                    </div>

                    <div class="notification is-danger" v-if="errors.length">
                        <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
                    </div>

                    <div class="field">
                        <div class="control">
                            <button class="button is-dark">Log in</button>
                        </div>
                    </div>

                    <hr>

                    Sau <router-link to="/signup">apasa aici</router-link> pentru a te inregistra!
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
    name: "LoginView",
    data() {
        return {
            email: '',
            password: '',
            errors: []
        }
    },

    methods: {
        submitForm() {
            this.errors = []
            if (this.email === '') {
                this.errors.push('Lipsește adresa de email')

            } else if (this.password === '') {
                this.errors.push('Lipsește parola')
            }

            if (!this.errors.length) {
              

                const formData = {
                    email: this.email,
                    password: this.password
                }

                axios.post("http://localhost:8080/login", formData, { withCredentials: true })
                    .then(response => {
                        toast({
                            message: "Login successfully!",
                            type: 'is-success',
                            dismissable: true,
                            pauseOnHover: true,
                            duration: 2000,
                            position: 'botton-right',
                        })
                        console.log(response)
                        this.$router.push('/')
                    })
                    .catch(error => {
                        if (error.response) {
                            this.errors.push(error.response.data)
                        } 
                    })
            }
          }
    }
}

</script>


<style>

</style>