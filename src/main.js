import {
    createApp
} from 'vue';
import {
    createRouter,
    createWebHistory
} from 'vue-router';
import App from './App.vue';
import ListProduct from './components/ListProduct.vue';
import './assets/styles.css';
import HomePage from './components/Home.vue';
import Gender from './components/Gender.vue';
import BrandView from './components/BrandView.vue';
import DetailView from './components/DetailView.vue';


const routes = [{
        path: '/', // Define a route with a parameter
        name: 'home',
        component: HomePage
    }, {
        path: '/ListProduct', // Define a route with a parameter
        name: 'ListProduct',
        component: ListProduct
    },
    {
        path: '/gender/', // Define a route with a parameter
        name: 'gender',
        component: Gender,
        props: true
    },
    {
        path: '/brand/', // Define a route with a parameter
        name: 'brand',
        component: BrandView,
        props: true
    },
    {
        path: '/detailProduct/:productId', // Define a route with a parameter
        name: 'detailproduct',
        component: DetailView,
        props: true
    },


    // Define more routes as needed
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');