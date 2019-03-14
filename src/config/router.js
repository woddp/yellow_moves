import  Vue from  'vue'
import  VueRouter from 'vue-router'
Vue.use(VueRouter);
const  Home = () => import('@/components/pages/home/index');
const  Category = () => import('@/components/pages/category');
const  SpecialList = () => import('@/components/pages/special/list');
const routes=[
    {path:'/',component:Home,
    children: [
        { path: '', redirect: 'home' },
        { path: 'home', component: () => import('@/components/pages/home/home') },
        { path: 'special', component: () => import('@/components/pages/special') },
        { path: 'hot', component: () => import('@/components/pages/find') },
        { path: 'me', component: () => import('@/components/pages/find') }
    ]},
    {path:'/category',component:Category},
    {path:'/special/list',component:SpecialList},
    { path: '/play/:id', component: () => import('@/components/pages/play') },
    { path: '/login', component: () => import('@/components/pages/users/login') },
    { path: '/register', component: () => import('@/components/pages/users/register') },
    {path:'/user',component:() => import('@/components/pages/users/index')},

]
const  router=new VueRouter({
    routes
});
export  default  router;
