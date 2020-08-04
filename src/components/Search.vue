<template>
<div>
	<input 
		type="text"
		placeholder="search"
		v-model="searchValue"
		@keyup.enter="search(searchValue)"
	/>
	<button @click="search(searchValue)">
		<img src="../assets/images/search.svg" >
	</button>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'search',
	data() { 
		return {
			searchValue: ''
		}
	},
	computed: {
		...mapGetters([
			'SEARCH_VALUE'
		])
	},
	methods: {
		...mapActions([
			'GET_SEARCH'
		]),
		search(value) {
			this.GET_SEARCH(value)
			
		}
	}

}
</script>

<style lang="scss" scoped>
div {
	// display: flex;
	// flex-wrap: wrap;
	padding: 40px 10px 60px;
	
	border-radius: 40px;

}
input[type="text"] {		
	position: relative;
	font-size: 24px;
	color: #fff;

	padding: 10px 15px;
	background-color: none;
	box-sizing: border-box;

	appearance: none;
	border: 1px solid rgba(255,74,86,1);
	border-radius: 60px;
	z-index: 1;

	&::placeholder {
		font-weight: 300;
		color: #fff;
		opacity: 0.5;
	}
}
button {
	width: 50px;	
	height: 50px;
	border: 1px solid rgba(255,74,86,1);
    margin-left: 10px;

	border-radius: 60px;

	img {
	width: 20px;	

	}
}
</style>>

