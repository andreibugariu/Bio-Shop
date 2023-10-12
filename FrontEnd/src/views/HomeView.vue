<template>
  <NavComponent />
  <div id="wrapper">
    <div class="home">
      <section class="hero is-small is-dark mb-6">
        <div class="hero-body has-text-centered">
          <p class="title mb-6">
            Bine ai venit pe BioShop
          </p>
        </div>
      </section>



      <div class="columns is-multiline">
        <div class="column is-12">
          <h2 class="is-size-2 has-text-centered">Produse</h2>
        </div>

        <ProductBox v-for="product in products" v-bind:key="product.id" v-bind:product="product" />

      </div>
    </div>
    <footer class="footer">
      <p class="has-text-centered">Copyright (c) 2022</p>
    </footer> 
  </div>
</template>

<script>
// @ is an alias to /src
import NavComponent from '@/components/NavComponent.vue'
import ProductBox from '@/components/ProductBox.vue'
import axios from 'axios'


export default {
  name: 'HomeView',
  components: {
    NavComponent,
    ProductBox
  },
  data() {
    return {
      products: [],
      userEmail:''
    }
  },
  mounted() {//when the page is finish we call this code
    this.$forceUpdate();

    this.getProducts(),
    this.getUserId()
  },
  methods: {
    getProducts() {
      axios.get('http://localhost:8080/products')
        .then(response => {
          this.products = response.data
        })
        .catch(error => {
        console.log(error)
      })
    },
    getUserId() {///from cookie
      axios.get('http://localhost:8080/get_user')
        .then(response => {
          this.userEmail = response.data
         console.log(this.userEmail)
        }).catch(error => {
        console.log(error)
      })
    }

  }

}
</script>


<style scoped>
   .image{
     margin-top: -1.25rem;
     margin-left: -1.25rem;
     margin-right: -1.25rem;
   }

</style>