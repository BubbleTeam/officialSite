import VueRouter from 'vue-router';
import Home from 'modules/home';
import Blog from 'modules/blog';

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/blog',
            component: Blog
        }
    ]
});

export default router;