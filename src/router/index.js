import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Product from '../components/Product.vue'
import Billing from '../components/Billing.vue'
import Signup from '../components/Signup.vue'
import Login from '../components/Login.vue'
import Profile from '../components/Profile.vue'
import Setting from '../components/Setting.vue'
import Users from '../components/Users.vue'
import Test from '../components/Test.vue'
const routes = [
  {
    path:"/",
    name:"home",
    component:Home
  },
  {
    path:"/test",
    name:"test",
    component:Test
  },
  {
    path:"/users",
    name:"users",
    component:Users
  },
  {
    path:"/setting",
    name:"setting",
    component:Setting
  },
  {
    path:"/product",
    name:"product",
    component:Product
  },
  {
    path:"/profile",
    name:"profile",
    component:Profile
  },
  {
    path:"/billing",
    name:"billing",
    component:Billing
  },
  {
    path: "/signup",
    name:"signup",
    component: Signup,
    
  },
  {
    path: "/login",
    name:"login",
    component: Login,
    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
