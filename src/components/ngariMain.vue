<template>
	<div class="ngariMain">
		<Scroll :data="arr" :pulldown="pulldown" >
		</Scroll>
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
			
		},
		methods: {
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	li {
		font-size: 0.32rem;
		padding: 0.2rem;
	}
	.wrapper {
		height: 500px;
		overflow: hidden;
	}
</style>