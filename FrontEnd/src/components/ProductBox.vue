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

            Vizualizeaza produsele
        </div>
    </div>

</template>

<script>

export default {
    name: 'ProductBox',///to the parent down to the component
    props: {
        product: Object
    }
         
    }
    
</script>


<style scoped>



.image {
        margin-top: 4.25rem;
        margin-left: 4.25rem;
        margin-right: 4.25rem;
}

</style>