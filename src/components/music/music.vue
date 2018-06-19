<template>
	<div class="detail">
		<scroll :data="musicList" :pullup="true" @scrollToEnd="scrollToEnd()" class="wrapper">
			<div class="content">
				<ul class="musicList">
				<li v-for="(item,index) in musicList" :key="index" :data-key="index" @click="play(index)">
					<p><img :src="item.imgUrl" /></p>
					<p>{{item.songName}}</p>
				</li>
			</ul>
			</div>
			
		</scroll>

		<loader v-show="loader"></loader>
		<transition name="slide-in">
			<router-view/>
		</transition>
	</div>

</template>

<script>
	import loader from "./loader";
	import { mapState } from "vuex";
	import song from "./graph.json";
	import scroll from "../scroll"
	export default {
		data() {
			return {
				loader: false,
				page: 1,
				pulldown:true
			}
		},
		created() {
		},
		mounted() {
			this.$store.commit("UPDATEMUSICLIST",song.slice(0,10))        
		},
		computed: mapState(["musicList"]),
		components: {
			loader,
			scroll
		},
		methods: {
			scrollToEnd() {
				this.$store.commit("UPDATEMUSICLIST",song.slice(10,20))
				
			},
			play(index) {
				this.$router.push("music/play");
				this.$store.commit("UPDATECURRENTINDEX", index)
			}
		}
	}
</script>

<style scoped>
	.wrapper {
		height: 100%;
		overflow: hidden;
	}
	
	.detail {
		width: 100%;
		height: 100%;
		overflow: hidden;
		font-size: 0.36rem;
		line-height: 0.44rem;
		text-indent: 0.36rem;
	}
	
	.detail .content img {
		display: block;
		max-width: 100%;
		margin: 0 auto;
	}
	
	.musicList li {
		padding: 0.3rem 0.2rem;
		overflow: hidden;
		border-bottom: 1px solid #e5e5e5;
	}
	
	.musicList li:after {
		content: '';
		display: block;
		clear: both;
	}
	
	.musicList li p {
		float: left;
	}
	
	.musicList li p:nth-child(1) {
		width: 1rem;
		height: 1rem;
		border-radius: 0.2rem;
		overflow: hidden;
	}
	
	.musicList li p:nth-child(1) img {
		display: block;
		width: 100%;
		height: 100%;
	}
	
	.musicList li p:nth-child(2) {
		width: 6.1rem;
		height: auto;
		overflow: hidden;
		padding-left: 0.2rem;
	}
</style>