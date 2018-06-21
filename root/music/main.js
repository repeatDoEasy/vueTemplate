import "../../src/units/calRem"
import Vue from '../../src/changeVue'
import App from '../../src/App'
import router from '../../src/router/music/index'
import store from '../../src/store/music/index'
Vue.prototype.$load = function(bool) {
	/*if(bool) {
		setTimeout(() => {
			this.$store.commit("UPDATELOAD", bool);
		}, 600)
	}else{
		
	}*/
	this.$store.commit("UPDATELOAD", bool);

}
/* eslint-disable no-new */
new Vue({
	el: '#app',
	store,
	router,
	render: (h) => h(App)
})