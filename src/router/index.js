import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'
import login from '../views/login.vue'
import menu from '../views/users.vue'


Vue.use(VueRouter)

	const routes = [
	{
		path: '/',
		name: 'login',
		component: login,
		props: true
	},
	{
		path: '/menu',
		name: 'menu',
		component: menu,
		props: true
	},
	
]


const router = new VueRouter({
		mode: 'history',
		base: process.env.BASE_URL,
		routes
		
})
// router.beforeEach((to, from, next) => {
// 	if (to.name !== 'menu' && !store.state.isAuth) next({ name: 'menu' })
// 	else next()
//   })

// router.beforeEach((from, to, next) => {
//   if (!store.state.isAuth && to.name === 'menu') alert('Не авторизован')
//   else next()
// })

export default router
