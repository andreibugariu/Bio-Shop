<template>
    <NavComponent />
    <div class="page-cart">
        <div class="columns is-multiline">
            <div class="column is-12">
                <h1 class="title">Coș </h1>
            </div>

            <div class="column is-12 box">
                <table class="table is-fullwidth" v-if="orders.length > 0">
                    <thead>
                        <tr>
                            <th>Produs</th>
                            <th>Pret</th>
                            <th>Cantitate</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>

                        <CartItem v-for="item in orders" v-bind:key="item.id" v-bind:initialItem="item"
                            v-on:removeFromCart="removeFromCart" />

                    </tbody>
                </table>
                <p v-else>Coșsul tau de cumparaturi este gol...{{orders}}</p>
            </div>

            <div class="column is-12 box">
                <h2 class="subtitle"> Suma totală</h2>

                <strong>${{ cartTotalPrice.toFixed(2)}}</strong>, {{cartTotalLenght}} produse

                <hr>

                <router-link to="/cart/success" class="button is-dark" @click="checkout(userEmail)">Finalizeaza comanda
                </router-link>

            </div>

        </div>
        <footer class="footer">
            <p class="has-text-centered">Copyright (c) 2022</p>
        </footer>

    </div>

</template>


<script>
import NavComponent from '@/components/NavComponent.vue'
import CartItem from '@/components/CartItem.vue'
import axios from 'axios'
// import CartItem from '@/components/CartItem.vue'
export default {
    name: "CartView",
    components: {
        NavComponent,
        CartItem
    },
    data() {
        return {
            
            userEmail:'',
            orders: []
          }
     },
          mounted() {
              this.getInfo()
    },
    computed: {
        cartTotalLenght() {
            var size= this.orders.length
            var sum= 0
            for (let i = 0; i < size; i++) {
                sum += this.orders[i].Quantity;
            }
            return sum
        },
        cartTotalPrice() {
            var size = this.orders.length
            var sum = 0
            for (let i = 0; i < size; i++) {
                sum += this.orders[i].Quantity * this.orders[i].ProductPrice;
            }
            return sum
        }
     },
     methods: {
         getInfo() {///from cookie
             
             var email=axios.get('http://localhost:8080/get_user')
                 .then(response => {
                     this.userEmail = response.data
                     return response.data
                 }).catch(error => {
                     console.log(error)
                 })

             email.then(response => {//resolve this with promises
                var ceva=response
                 axios.get(`http://localhost:8080/orders/${ceva}`)
                     .then(response => {
                         this.orders = response.data
                      console.log(this.orders)
                     }).catch(error => {
                    console.log(error)
                 })
             })

                
         },

         removeFromCart(item) {

             const orderID = item.ID
             axios.delete(`http://localhost:8080/delete_user_product/${orderID}`)
                .then(response => {
                    console.log(response, "Succesfull")
                    this.$router.go();
                }).catch(error => {
                    console.log(error, "nu merge fraiere")
                })
 
            
         },

         deleteCart(){
            console.log("hello")///to remake
         },

         checkout(userEmail) {
             axios.put(`http://localhost:8080/checkout/${userEmail}`)
                 .then(response => {
                console.log(response)
                 }).catch(error => {
                console.log(error)
            })
         }
         
     }

    
}

</script>