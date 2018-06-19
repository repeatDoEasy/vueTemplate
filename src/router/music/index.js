import Vue from 'vue'
import Router from 'vue-router'
import music from "../../components/music/music"
import play from "../../components/music/play"
Vue.use(Router);
var routerObj = [{
		path: '/music',
		name: "music",
		component: music,
		children: [{
			path: 'play',
			name: "play",
			component: play,

		}]
	},
	{
		path: '/',
		redirect: "/music"

	}
]
export default new Router({
	routes: routerObj
})