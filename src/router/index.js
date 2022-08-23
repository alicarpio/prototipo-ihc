import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import StudentViewBasic from '@/views/StudentViewBasic.vue'
import RoomsMonitoringView from '@/views/RoomsMonitoringView.vue' 

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path: '/', component: HomeView},
        {path: '/profesores', component: RoomsMonitoringView},
        {path: '/estudiantes', component: StudentViewBasic}
    ]
})

export default router
