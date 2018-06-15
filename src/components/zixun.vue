<template>
  <div class="zixun">
   {{msg}}
  </div>
</template>

<script>
export default {
  name: 'zixun',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.zixun{
		position: absolute;
		z-index: 100;
		top:0;
		left:0;
		right: 0;
		bottom:0;
		background-color: green;
	}
</style>
