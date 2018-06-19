<template>
	<div class="ngariMain">
		<Scroll :data="arr" :pulldown="pulldown" @pulldown="ee()" class="wrapper">
			<div class="content">
				<div style="height: 200px;background-color: red;"></div>
				<div style="height: 200px;background-color: green;"></div>
				<div style="height: 200px;background-color: goldenrod;"></div>
			</div>
		</Scroll>
		<div @click="go()">咨询</div>
	</div>
</template>

<script>
	import Scroll from "./scroll";
	export default {
		name: 'ngariMain',
		data() {
			return {
				arr: [],
				pulldown: true
			}
		},
		components: {
			Scroll
		},
		mounted() {
			console.log(this);
		},
		methods: {
			go() {
				this.$router.push("/scroll");

			},
			ee(){
				console.log("eeee")
			},
			play() {
				console.log(this)
			}

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	li {
		font-size: 0.32rem;
		padding: 0.2rem;
	}
</style>