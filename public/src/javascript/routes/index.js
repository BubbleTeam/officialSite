import VueRouter from 'vue-router';
import Home from 'modules/home';
import Articles from 'modules/articles';

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/articles',
            component: Articles
        }
    ]
});

export default router;