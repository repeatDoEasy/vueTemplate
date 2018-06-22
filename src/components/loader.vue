<template>
	<div class="loaderbg">
		<div class="loader">
			<img src="../assets/load.gif" />
		</div>

	</div>

</template>

<script>
	export default {

	}
</script>

<style scoped>
	.loaderbg {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background-color: transparent;
		z-index: 999999;
	}
	
	.loader {
		width: 200px;
		position: absolute;
		overflow: hidden;
		height: 199px;
		border-radius: 27px;
		transform: scale(0.5);
		top:40%;
		left:50%;
		margin-top: -100px;
		margin-left: -100px;
	}
	
	.loaderbg img {
		position: absolute;
		top: -56px;
		left: -70px;
	}
</style>