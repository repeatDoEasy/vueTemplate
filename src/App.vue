<template>
	<div style="height: 100%;">

		<transition name="slide-in">
			<router-view/>
		</transition>
		<loader v-show="showLoad"></loader>
	</div>

</template>

<script>
	import loader from "./components/loader";
	import { mapState } from "vuex";
	export default {
		name: 'App',
		components: {
			loader
		},
		computed: mapState(["showLoad"]),
	}
</script>

<style>
	html,
	body,
	dl,
	dt,
	dd,
	ul,
	ol,
	li,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	form,
	input,
	label,
	textarea,
	p {
		margin: 0;
		padding: 0;
		-webkit-text-size-adjust: none
	}
	
	article,
	aside,
	details,
	footer,
	header,
	nav,
	section {
		display: block
	}
	
	em,
	i {
		font-style: normal
	}
	
	img {
		border: 0;
		vertical-align: middle
	}
	
	ol,
	ul {
		list-style: none
	}
	
	input[type=text],
	input[type=password],
	input[type=number],
	input[type=email],
	input[type=search],
	input[type=tel],
	input[type=radio],
	input[type=checkbox] {
		vertical-align: middle;
		outline: 0;
		-webkit-appearance: none;
		-webkit-user-select: text
	}
	
	input::-webkit-input-placeholder,
	textarea::-webkit-input-placeholder {
		color: #ccc
	}
	
	select,
	textarea {
		outline: 0;
		-webkit-appearance: none
	}
	
	textarea {
		-webkit-user-select: text
	}
	
	table {
		border-collapse: collapse;
		border-spacing: 0
	}
	
	* {
		-webkit-user-select: none;
		-webkit-tap-highlight-color: transparent;
		-webkit-touch-callout: none;
		-webkit-box-sizing: border-box;
		box-sizing: border-box
	}
	
	*:before,
	*:after {
		-webkit-box-sizing: border-box;
		box-sizing: border-box
	}
	
	a {
		text-decoration: none
	}
	
	.userselect {
		-webkit-user-select: text
	}
	
	.clearfix:after {
		display: block;
		content: '';
		clear: both;
		visibility: hidden;
	}
	
	body,
	html {
		height: 100%;
	}
	
	body {
		max-width: 750px;
		margin: 0 auto;
		min-height: 100%;
		min-width: 320px;
		font-family: Arial, Helvetica, sans-serif;
		line-height: 1;
		-webkit-text-size-adjust: none;
	}
	
	.slide-in-enter-active {
		transition: transform .6s ease;
	}
	
	.slide-in-leave-active {
		transition: transform .6s ease;
	}
	
	.slide-in-enter,
	.slide-in-leave-to
	/* .slide-fade-leave-active for below version 2.1.8 */
	
	{
		position: absolute;
		top: 0;
		left: 0;
		transform: translateX(100%);
	}
	
	.slide-in-enter-to,
	.slide-in-leave
	/* .slide-fade-leave-active for below version 2.1.8 */
	
	{
		position: absolute;
		top: 0;
		left: 0;
		transform: translateX(0);
	}
</style>