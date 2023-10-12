 <template>
     <nav class="navbar is-dark">
         <div class="navbar-brand">
             <router-link to="/" class="navbar-item"><strong>BioShop</strong></router-link>
 
             <a class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu"
                 @click="showMobileMenu = !showMobileMenu">
                 <span aria-hidden="true"></span>
                 <span aria-hidden="true"></span>
                 <span aria-hidden="true"></span>
             </a>
         </div>
 
         <div class="navbar-menu" id="navbar-menu" v-bind:class="{ 'is-active': showMobileMenu }">
             <div class="navbar-start">
                 <div class="navbar-item">
                     <form method="get" action="/search">
                         <div class="field has-addons">
                             <div class="control">
                                 <input type="text" class="input" placeholder="What are you looking for?" name="query">
                             </div>
 
                             <div class="control">
                                 <button class="button is-success">
                                     <span class="icon">
                                         <i class="fas fa-search"></i>
                                     </span>
                                 </button>
                             </div>
                         </div>
                     </form>
                 </div>
             </div>
 
             <div class="navbar-end">
 
                 <div class="navbar-item">
 
                     <div class="dropdown">
                         <button class="dropbtn">Categorii</button>
                         <div class="dropdown-content">
                             <router-link :to="{ name: 'category', params: { id: `Legume`}}">
                                 <h3 class="is-size-4">Legume</h3>
                             </router-link>
                             <router-link :to="{ name: 'category', params: { id: `Fructe`}}">
                                 <h3 class="is-size-4">Fructe</h3>
                             </router-link>
                             <router-link :to="{ name: 'category', params: { id: `Lapte`}}">
                                 <h3 class="is-size-4">Lapte</h3>
                             </router-link>
                             <router-link :to="{ name: 'category', params: { id: `Oua`}}">
                                 <h3 class="is-size-4">Oua</h3>
                             </router-link>
                             <router-link :to="{ name: 'category', params: { id: `Branzeturi`}}">
                                 <h3 class="is-size-4">Branzeturi</h3>
                             </router-link>
 
                         </div>
                     </div>
 
                     <div>
 
                     </div>
                     <div class="buttons">
                         <router-link to="/first_page" class="button is-danger" @click="Logout()">Logout
                         </router-link>
                         <router-link to="/cart" class="button is-success">
                             <span class="icon"><i class="fas fa-shopping-cart"></i></span>
                             <span>Coș({{cartTotalLenght}})</span>
                         </router-link>
                     </div>
                 </div>
             </div>
         </div>
     </nav>
 </template>

<script>
import axios from 'axios'
export default {
    name: "NavComponent",
    methods: {
        Logout() {
            axios.post('http://localhost:8080/logout')
                .then(response => {
                console.log(response)
                }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>



<style>








/* Style The Dropdown Button */
.dropbtn {
background-color: rgb(72, 199, 142);
    /* Green */
    border: none;
    color: white;
    padding: 12px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 4px;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: 00D1B2;
  min-width: 160px;

  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #f1f1f1}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}
</style>