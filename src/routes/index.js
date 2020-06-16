import VueRouter from 'vue-router';
import Vue from 'vue';
import Home from '../views/Home.vue' 
import Manage from '../views/Manage.vue' 
import Benefit from '../views/Benefit.vue' 
import Service from '../views/Service.vue' 
import PayHistory from '../views/PayHistory.vue' 


Vue.use(VueRouter);

export const router = new VueRouter({
	mode: 'history', 
	routes: [
		{
			path:'/',
			redirect: '/home' 
		},
		{
			path:'/home', 
			component: Home 
        },
        {
			path:'/manage', 
			component: Manage 
        },
        {
			path:'/benefit', 
			component: Benefit 
        },
        {
			path:'/service', 
			component: Service 
        },
        {
			path:'/pay_history', 
			component: PayHistory 
        },
	]
})