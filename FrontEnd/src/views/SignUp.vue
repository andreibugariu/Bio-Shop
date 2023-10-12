<template>
    <div class="page-sign-up">
        <div class="columns">
            <div class="column is-4 is-offset-4">
                <h1 class="title">Sign up</h1>

                <form @submit.prevent="submitForm">
                    <div class="field">
                        <label>Nume</label>
                        <div class="control">
                            <input type="text" class="input" v-model="firstname">
                        </div>
                    </div>

                    <div class="field">
                        <label>Prenume</label>
                        <div class="control">
                            <input type="text" class="input" v-model="lastname">
                        </div>
                    </div>

                    <div class="field">
                        <label>Varsta</label>
                        <div class="control">
                            <input type="number" class="input" min="1" max="100" v-model="age">
                        </div>
                    </div>

                    <div class="field">
                        <label>Adresa</label>
                        <div class="control">
                            <input type="text" class="input" v-model="address">
                        </div>
                    </div>

                    <div class="field">
                        <label>Email</label>
                        <div class="control">
                            <input type="text" class="input" v-model="email">
                        </div>
                    </div>

                    <div class="field">
                        <label>Parola</label>
                        <div class="control">
                            <input type="password" class="input" v-model="password">
                        </div>
                    </div>

                    <div class="field">
                        <label for="phone">Numar de telefon</label>
                        <div class="control">
                            <input type="tel" id="phone" name="phone" placeholder="033301244" pattern="[0-9]{9}"
                                v-model="phone">
                        </div>
                    </div>

                    <div class="notification is-danger" v-if="errors.length">
                        <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
                    </div>

                    <div class="field">
                        <div class="control">
                            <button class="button is-dark">Sign up</button>
                        </div>
                    </div>

                    <hr>

                    Sau <router-link to="/login">apasa aici</router-link> pentru a te inregistra!
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
    name: 'SignUp',
    data() {
        return {
            firstname: '',
            lastname: '',
            age: '',
            address: '',
            email: '',
            password: '',
            phone: '',
            errors: []
        }
    },

    methods: {
        submitForm() {
            this.errors = []
            if (this.firstname === '') {
                this.errors.push('Lipsește numele , te rog sa il introduci!')

            } else if (this.lastname === '') {

                this.errors.push('Lipsește prenumele , te rog sa il introduci!')
            } else if (this.age === '') {
                this.errors.push('Lipsește varsta , te rog sa o introduci!')
            } else if (this.address === '') {
                this.errors.push('Lipsește adresa , te rog sa o introduci!')
            } else if (this.email === '') {
                this.errors.push('Lipsește email-ul , te rog sa îl introduci!')
            } else if (this.password === '') {
                this.errors.push('Lipsește parola , te rog sa o introduci!')
            } else if (this.phone === '') {
                this.errors.push('Lipsește numarul de telefon , te rog sa o introduci!')
            }

            if (!this.errors.length) {
                const formData = {
                    firstname: this.firstname,
                    lastname: this.lastname,
                    age: this.age,
                    address: this.address,
                    email: this.email,
                    password: this.password,
                    phone: this.phone
                }

                axios.post("http://localhost:8080/user", formData)
                    .then(response => {
                        toast({
                            message: "Account created, please log in!",
                            type: 'is-success',
                            dismissable: true,
                            pauseOnHover: true,
                            duration: 2000,
                            position: 'botton-right',
                        })
                         console.log(response)
                         this.$router.push('/login')
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