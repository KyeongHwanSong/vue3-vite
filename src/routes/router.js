import {
	createRouter,
	createWebHistory,
	createWebHashHistory,
} from 'vue-router';

import Home from './Home.vue';
import Movie from './Movie.vue';
import About from './about.vue';

/*const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('./views/Home.vue'),
	},
	{
		path: '/',
		name: 'About',
		component: () => import('./views/About.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;*/

export default createRouter({
	//history: createWebHistory(),
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home,
		},
		{
			path: '/movie',
			name: 'Movie',
			component: Movie,
		},
		{
			path: '/about',
			name: 'About',
			component: About,
		},
	],
});
