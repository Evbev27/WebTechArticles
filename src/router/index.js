import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import Reviews from '../views/Reviews.vue'
import Search from '../views/Search.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/news', name: 'news', component: News },
        { path: '/reviews', name: 'reviews', component: Reviews },
        { path: '/search', name: 'search', component: Search },
        { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundView }
    ],
    scrollBehavior() {
        return { top: 0 }
    }
})

export default router