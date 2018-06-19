import Vue from 'vue'
import Router from 'vue-router'
import ngariMain from "../components/ngariMain"
Vue.use(Router);
var routerObj = [{
		path: '/',
		name: "ngariMain",
		component: ngariMain
	}
]
export default new Router({
	routes: routerObj
})