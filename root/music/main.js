import "../../src/units/calRem"
import Vue from '../../src/changeVue'
import App from '../../src/App'
import router from '../../src/router/music/index'
import store from '../../src/store/music/index'

/* eslint-disable no-new */
new Vue({
	el: '#app',
	store,
	router,
	render: (h) => h(App)
})