import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import auto from 'vue-auto-routing'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [...auto]

// const routes: Array<RouteConfig> = [
//   {
//     path: "/",
//     name: "Home",
//     component: Home,
//   },
//   // {
//   //   path: "/about",
//   //   name: "About",
//   //   // route level code-splitting
//   //   // this generates a separate chunk (about.[hash].js) for this route
//   //   // which is lazy-loaded when the route is visited.
//   //   component: () =>
//   //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
//   // },
// ];
console.log('routes;')
console.log(routes)
const router = new VueRouter({
	// mode: "history",
	// base: process.env.BASE_URL,
	routes,
})

export default router
