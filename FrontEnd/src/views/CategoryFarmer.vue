
<template>
    <NavFarmer />
    <div id="wrapper">
        <div class="home">
            <section class="hero is-small is-dark mb-6">
                <div class="hero-body has-text-centered">
                    <p class="title mb-6">
                        Bine ai venit pe BioShop
                    </p>

                </div>
            </section>


            <div class="columns is-multiline" v-if="products.length > 0">
                <div class=" column is-12">
                    <h2 class="is-size-2 has-text-centered">{{ this.$route.params.id }}</h2>
                </div>

                <FarmerItem v-for="product in products" v-bind:key="product.id" v-bind:product="product" />

            </div>
            <p v-else>There is no product with that name, please try again</p>
        </div>
        <footer class="footer">
            <p class="has-text-centered">Copyright (c) 2022</p>
        </footer>
    </div>
</template>


<script>
import axios from 'axios'
import NavFarmer from '@/components/NavFarmer.vue'
import FarmerItem from '@/components/FarmerItem.vue'
export default {
  name:"CategoryFarmer",
  components: {
      NavFarmer,
      FarmerItem  },
  data() {
    return {
      products: []
    }
  },
  mounted() {
    this.$forceUpdate();
      this.getInfo()
  },
  watch: {
    $route(to, from) {
          if (from.name === 'CategoryFarmer') {
              this.getInfo()
        console.log(to)
        }
       }
  },
  methods: {
      getInfo() {///from cookie

          var email = axios.get('http://localhost:8080/get_user')
              .then(response => {
                  this.userEmail = response.data
                  return response.data
              }).catch(error => {
                  console.log(error)
              })

          email.then(response => {//resolve this with promises
              var email = response
              axios.get(`http://localhost:8080/product_by_category_farmer/${email}/${this.$route.params.id}`)
                  .then(response => {
                      this.products = response.data
                      console.log(this.products)
                  }).catch(error => {
                      console.log(error)
                  })
          })


      }
  }
}

</script>
