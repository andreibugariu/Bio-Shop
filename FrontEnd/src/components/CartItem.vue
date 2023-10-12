<template>
    <tr>
        <td>
            <router-link :to="{ name: 'ShowDetails', params: { id: item.ProductID } }">{{ item.ProductName }}  </router-link>
        </td>
        <td>${{ item.ProductPrice }}</td>
        <td>
            {{ item.Quantity }}
            <a @click="decrementQuantity(item)">-</a>
            <a @click="incrementQuantity(item)">+</a>
        </td>
        <td>${{ getItemTotal(item).toFixed(2) }}</td>
        <td><button class="delete" @click="removeFromCart(item)"></button></td>
    </tr>
</template>

<script>
import axios from 'axios'
export default {
    name: 'CartItem',
    props: {
        initialItem: Object
    },
    data() {
        return {
            item: this.initialItem
        }
    },
    methods: {
        getItemTotal(item) {
            return item.Quantity * item.ProductPrice
        },
        incrementQuantity(item) {
            const orderID=item.ID
            axios.put(`http://localhost:8080/increment/${orderID}`)
                .then(response => {
                    console.log(response, "Succesfull")
                    this.$router.go();
                }).catch(error => {
                    console.log(error,"nu merge fraiere")
                })
        },
        decrementQuantity(item) {
            const orderID = item.ID
            axios.put(`http://localhost:8080/decrement/${orderID}`)
                .then(response => {
                    console.log(response, "Succesfull")
                    this.$router.go();
                }).catch(error => {
                    console.log(error, "nu merge fraiere")
                })
        },
        removeFromCart(item) {
            this.$emit('removeFromCart', item)
            this.updateCart()
        }

    
    }
}
</script>