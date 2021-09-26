import Home from './components/mofficer/Home.vue'
import User from './components/User.vue'
import Signin from './components/Signin.vue'
import Addtpolice from './components/admin/addtrafficpolice.vue'
import AddMofficer from './components/admin/addmofficer.vue'

export const routes = [
    {
        path: '/', component: Signin
    },
    {
        path: '/home', component: Home
    },
    {
        path: '/user', component: User
    },
    {
        path: '/addtp', component: Addtpolice
    },
    {
        path: '/addmo', component: AddMofficer
    }
]


