import {createRouter, createWebHistory} from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import StudentViewBasic from '@/views/StudentViewBasic.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path: '/', component: HomeView},
        {path: '/estudiantes', component: StudentViewBasic}
    ]
})

export default router
