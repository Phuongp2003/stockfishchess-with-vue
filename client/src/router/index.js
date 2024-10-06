import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/ChessBoard.vue'
import ChessBoard from '@/components/ChessBoard.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/chess', component: ChessBoard }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
