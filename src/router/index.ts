import { RouteRecordRaw, createWebHistory, createRouter } from "vue-router"
import HomeView from "../views/HomeView.vue"
import AuthView from "../views/AuthView.vue"
const routes: Array<RouteRecordRaw> = [
    {
        path:'/',
        name:'home',
        component:HomeView
    },
    {
        path:'/auth',
        name:'auth',
        component:AuthView
    },
]


export default createRouter({
    routes,
    history: createWebHistory(import.meta.env.BASE_URL)
})