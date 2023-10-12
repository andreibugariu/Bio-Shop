import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductDetails from '@/views/Product.vue'
import LoginView from '@/views/Login.vue'
import SignUp from '@/views/SignUp.vue'
import CategoryView from '@/views/Category.vue'
import SearchView from '@/views/Search.vue'
import CartView from '@/views/Cart.vue'
import  SuccessView from '@/views/SuccessView.vue'
import LoginFarmerView from  '@/views/LoginFarmer.vue'
import RegisterFarmer from '@/views/RegisterFarmer'
import HomeFarmerView from '@/views/HomeFarmerView.vue'
import CartOrders from '@/views/CartOrders.vue'
import CreateProduct from  '@/views/CreateProduct.vue'
import UpdateProduct from  '@/views/UpdateProduct.vue'
import FirstPage from '@/views/FirstPage.vue'
import CategoryFarmer from '@/views/CategoryFarmer.vue'
import SearchProductFarmers from '@/views/SearchProductFarmers.vue'
const routes = [
  {
    path: '/cart_orders',
    name: 'CartOrders',
    component: CartOrders
  },
    {
    path: '/search_products_farmers',
    name: 'SearchProductFarmers',
    component: SearchProductFarmers
  },
  {
    path: '/category_farmer',
    name: 'CategoryFarmer',
    component: CategoryFarmer
  },
   {
    path: '/first_page',
    name: 'FirstPage',
    component: FirstPage
  },
   {
    path: '/update_product',
    name: 'UpdateProduct',
    component: UpdateProduct
  },
   {
    path: '/',
    name: 'home',
    component: HomeView
  },
   {
    path: '/create_product',
    name: 'CreateProduct',
    component: CreateProduct
  },
   {
    path: '/register_farmer',
    name: 'RegisterFarmer',
    component: RegisterFarmer
  },
  {
    path: '/home_farmer',
    name: 'HomeFarmer',
    component: HomeFarmerView
  },
   {
    path: '/cart/success',
    name: 'Success',
    component: SuccessView

  },
   {
    path: '/login_farmer',
    name: 'LoginFarmer',
    component: LoginFarmerView

  },
   {
    path: '/cart',
    name: 'cart',
    component: CartView,
    props: true
  },
  {
    path: '/category',
    name: 'category',
    component: CategoryView
  },
   {
    path: '/search',
    name: 'search',
    component: SearchView
  },
   {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  { 
    path: '/product/show/:id',
    name: 'ShowDetails',
    component: ProductDetails
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
