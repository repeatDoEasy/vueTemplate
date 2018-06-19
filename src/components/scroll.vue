<template>

	<div ref="wrapper">
		<slot></slot>
		<div class="loaderbg" v-show="loading">
			<div class="loader"></div>
		</div>
	</div>

</template>

<script>
	import BScroll from "better-scroll"
	export default {
		name: "Scroll",

		data() {
			return {
				loading: false
			}
		},
		props: {
			/**
			 * 1 滚动的时候会派发scroll事件，会截流。
			 * 2 滚动的时候实时派发scroll事件，不会截流。
			 * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
			 */
			probeType: {
				type: Number,
				default: 1
			},
			/**
			 * 点击列表是否派发click事件
			 */
			click: {
				type: Boolean,
				default: true
			},
			/**
			 * 是否开启横向滚动
			 */
			scrollX: {
				type: Boolean,
				default: false
			},
			/**
			 * 是否派发滚动事件
			 */
			listenScroll: {
				type: Boolean,
				default: false
			},
			/**
			 * 列表的数据
			 */
			data: {
				type: Array,
				default: null
			},
			/**
			 * 是否派发滚动到底部的事件，用于上拉加载
			 */
			pullup: {
				type: Boolean,
				default: false
			},
			/**
			 * 是否派发顶部下拉的事件，用于下拉刷新
			 */
			pulldown: {
				type: Boolean,
				default: true
			},
			/**
			 * 是否派发列表滚动开始的事件
			 */
			beforeScroll: {
				type: Boolean,
				default: false
			},
			/**
			 * 当数据更新后，刷新scroll的延时。
			 */
			refreshDelay: {
				type: Number,
				default: 500
			}
		},
		mounted() {
			// 保证在DOM渲染完毕后初始化better-scroll
			this.$nextTick(() => {
				this._initScroll()
			})
		},
		methods: {
			_initScroll() {
				if(!this.$refs.wrapper) {
					return
				}
				// better-scroll的初始化
				this.scroll = new BScroll(this.$refs.wrapper, {
					probeType: this.probeType,
					click: this.click,
					scrollX: this.scrollX
				})

				// 是否派发滚动事件
				if(this.listenScroll) {
					this.scroll.on('scroll', (pos) => {
						this.$emit('scroll', pos)
					})
				}

				// 是否派发滚动到底部事件，用于上拉加载
				if(this.pullup) {
					this.scroll.on('scrollEnd', () => {
						// 滚动到底部
						if(this.scroll.y <= (this.scroll.maxScrollY)) {
							this.loading = true;
							this.$emit('scrollToEnd')
						}
					})
				}

				// 是否派发顶部下拉事件，用于下拉刷新
				if(this.pulldown) {
					this.scroll.on('touchEnd', (pos) => {

						// 下拉动作
						if(pos.y > 50) {
							this.$emit('pulldown')
						}
					})
				}

				// 是否派发列表滚动开始的事件
				if(this.beforeScroll) {
					this.scroll.on('beforeScrollStart', () => {
						this.$emit('beforeScroll')
					})
				}
			},
			disable() {
				// 代理better-scroll的disable方法
				this.scroll && this.scroll.disable()
			},
			enable() {
				// 代理better-scroll的enable方法
				this.scroll && this.scroll.enable()
			},
			refresh() {
				// 代理better-scroll的refresh方法
				this.scroll && this.scroll.refresh()
			},
			scrollTo() {
				// 代理better-scroll的scrollTo方法
				this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
			},
			scrollToElement() {
				// 代理better-scroll的scrollToElement方法
				this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
			}
		},
		watch: {
			// 监听数据的变化，延时refreshDelay时间后调用refresh方法重新计算，保证滚动效果正常
			data() {

				this.$nextTick(() => {

					this.refresh();

				});
				setTimeout(() => {
					this.loading = false;
				}, 1000)
			}
		}
	}
</script>

<style scoped>
	.loaderbg {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background-color: rgba(0, 0, 0, 0.4);
	}
	.loader{
		width:1.2rem;
		height:1.2rem;
		border-color: white white white transparent;
		border-width: 4px;
		border-style: solid;
		border-radius: 100%;
		position: absolute;
		top:50%;
		left:50%;
		margin-left: -0.6rem;
		margin-top: -0.6rem;
		animation: xuanz 0.7s  linear infinite;
	}
	@-webkit-keyframes xuanz{
		from{transform: rotate(0deg);}
		to{transform: rotate(360deg);}
	}
	@keyframes xuanz{
		from{transform: rotate(0deg);}
		to{transform: rotate(360deg);}
	}
</style>