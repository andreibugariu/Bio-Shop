<template>
    <div class="column is-3">
        <div class="box">
            <figure class="image mb-4">
                <img v-bind:src="product.Photo">
            </figure>

            <router-link :to="{ name: 'ShowDetails', params: { id: product.ID } }">
                <h3 class="is-size-4">{{ product.ProductName }}</h3>
            </router-link>

            <p class="is-size-6 has-text-grey"> {{ product.Price }} lei</p>

            <div class="button is-danger" @click="removeItem()">Sterge</div>
            <router-link :to="{ name: 'UpdateProduct', params: { id: product.ID } }" class="button is-success">Actualizează
            </router-link>
        </div>
    </div>

</template>

<script>
import axios from 'axios'
export default {
    name: 'FarmerItem',///to the parent down to the component
    props: {
        product: Object
    },
    methods: {
        removeItem() {
            axios.delete(`http://localhost:8080/product/${this.product.ID}`)
                .then(response => {
                    this.$router.go();
                    console.log(response)
                }).catch(error => {
                    console.log(error)
                })
        }

    }

}

</script>


<style scoped>

.image {
    margin-top: -1.25rem;
    margin-left: -1.25rem;
    margin-right: -1.25rem;
    width: 120px;
    min-height: 120px;
    max-height: auto;
    float: left;
    margin: 3px;
    padding: 3px;
}
</style>