import Home from './components/mofficer/Home.vue'
import User from './components/User.vue'
import Signin from './components/Signin.vue'

export const routes = [
    {
        path: '/', component: Signin
    },
    {
        path: '/home', component: Home
    },
    {
        path: '/user', component: User
    }
]


