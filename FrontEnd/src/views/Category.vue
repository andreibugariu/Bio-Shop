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
          <h2 class="is-size-2 has-text-centered">{{ this.$route.params.id }}</h2>
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
import axios from 'axios'
import NavComponent from '@/components/NavComponent.vue'
import ProductBox from '@/components/ProductBox.vue'
export default {
  name: 'CategoryView',
  components: {
    NavComponent,
    ProductBox
  },
  data() {
    return {
      products: []
    }
  },
  mounted() {
    this.$forceUpdate();
    this.getProducts()
  },
  watch: {
    $route(to, from) {
      if (from.name === 'category') {
        this.getProducts()
        console.log(to)
        }
       }
  },
  methods: {
    getProducts() {
      axios.get(`http://localhost:8080/product_by_category/${this.$route.params.id}`)
        .then(response => {
          this.products = response.data
          console.log(this.products)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}

</script>
