import Vue from 'vue'
import axios from "axios"
//该文件用于改造Vue，扩展Vue
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.serverUrl="https://easy-mock.com/mock/5b05347f29c4976dc91e8c9d/music/*.jsonRequest";
Vue.prototype.setupService = function(option) {
	this.server = {};
	for(let j = 0; j < option.length; j++) {
		this.server[option[j].method] = function() {
			let arg = [];
			for(let i = 0; i < arguments.length; i++) {
				arg.push(arguments[i])
			}
			return this.$post(option[j].beanName, option[j].beanName, arg)
		}.bind(this);
	}

}
Vue.prototype.$post = function(serverName, serverMethod, arg) {
	return this.$axios.post(this.serverUrl, arg, {
		headers: {
			"X-Service-Id": serverName,
			"X-Service-Method": serverMethod,
		}
	}).then(res=>{
		return res.data.body;
	},err=>{
		return 0;
	})
}
export default Vue