import Vue from 'vue'
import Router from 'vue-router'
import ngariMain from "../components/ngariMain"
import zixun from "../components/zixun"
Vue.use(Router);
var routerObj = [{
		path: '/',
		name: "ngariMain",
		component: ngariMain
	},
	{
		path: '/zixun',
		name: "zixun",
		component: zixun
	}
]
export default new Router({
	routes: routerObj
})