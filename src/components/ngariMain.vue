<template>
	<div class="ngariMain">
		<ul>
			<li v-for="item in list">
				{{item}}
			</li>
		</ul>
		<br />

		<div @click="go()">咨询</div>
	</div>
</template>

<script>
	export default {
		name: 'ngariMain',
		data() {
			return {
				list: []
			}
		},
		mounted() {
			this.setupService([{
				beanName: "eh.pcConfig",
				method: "getPcConfig"
			}, {
				beanName: "eh.appointRecord",
				method: "endedRemoteInquiry"
			}])
			this.getPC().then(res=>{
				let un=res.unfinished;
				let arr=[];
				un.forEach(item=>{
					arr.push(item.meetClinicResult.meetReport);
				})
				this.list=arr;
			})

		},
		methods: {
			go() {
				this.$router.push("/zixun");

			},
			getPC() {
				return this.server.getPcConfig("sing", 1).then(res => {
					return res;
				}, err => {
					console.log(err)
					return err;
				})
			}

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li{
	font-size: 0.32rem;
	padding: 0.2rem;
}
</style>