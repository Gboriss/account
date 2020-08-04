<template>
<form class="search" @submit.prevent="adduser">
	<h1>Пользователи</h1>
	<div class="question">
		<input type="text" 
			required 
			placeholder="First Name"
			v-model.trim="inputEntry"
			autocomplete="off" 
			
		/>
	</div>
	<div class="question">
		<input type="text" 
			required 
			placeholder="Last Name"
			v-model.trim="inputlastname"
			autocomplete="off"
		/>
	</div>
	<div class="question">
		<input type="text" 
			required 
			placeholder="Email Address"
			v-model.trim="inputEmail"
			autocomplete="off"
		/>
	</div>
	<button>Submit</button>
</form>	
</template>


<script>


export default {
	name: 'uiForm',
   
	data() {
		return {
			inputEntry: '',
			inputlastname: '',
			inputEmail: '',
			error: false,
		}
	},

	methods: {
	   adduser() {
			if (this.inputEntry) {
				this.$store.commit('ADDUSER', {
					id: Date.now(),
					firstname: this.inputEntry,
					lastname: this.inputlastname,
					email: this.inputEmail,
					edit: false,
				})			
				this.inputEntry = ''
				this.inputlastname = ''
				this.inputEmail = ''

			}
		}
	}
}
</script>


<style lang="scss" scoped>

* {
	transition: ( all 0.25s cubic-bezier(.53,.01,.35,1.5));

}

form {
	display: flex;
	flex-direction: column;
	display: inline-block;
	// width: 500px;
	max-width: 500px;
	min-width: 350px;
	height: 400px;
	
	padding: 30px 25px;
	margin: 40px 10px;
	border-radius: 40px;
	box-sizing: border-box;
	background-color: white;

	h1 {
		color: rgba(255,74,86,1);
		font-weight: 100;
		letter-spacing: 0.01em;
		margin-left: 15px;
		margin-bottom: 35px;
		text-transform: uppercase;
	}
		
	button {
		margin-top: 35px;
		background-color: white;
		border: 1px solid rgba(255,74,86,1);
		line-height: 0;
		font-size: 17px;
		display: inline-block;
		box-sizing: border-box;
		padding: 20px 15px; 
		border-radius: 60px;
		color: rgba(255,74,86,1);
		font-weight: 100;
		letter-spacing: 0.01em;
		position: relative;
		z-index: 1;
		
		&:hover, &:focus {
			color: white;
			background-color: rgba(255,74,86,1);
		}
	}
	.question {
		position: relative;
		padding: 10px 0;
		  
		label {
			transform-origin: left center;
			color:  rgba(255,74,86,1);
			font-weight: 100;
			// letter-spacing: 0.01em;
			font-size: 17px;
			box-sizing: border-box;
			padding: 10px 15px;
			display: block;
			position: absolute;
			margin-top: -40px;
			z-index: 2;
			pointer-events: none;

		}
	
		input[type="text"] {		
			position: relative;
			display: block;
			width: 100%;
			font-weight: 100;
			font-size: 17px;
			padding: 10px 15px;
			border-radius: 60px;

			appearance: none;
			box-sizing: border-box;
			color: rgba(255,74,86,1);
			border: 1px solid rgba(255,74,86,1);
			background-color: none;
			z-index: 1;

			&::placeholder {
				font-weight: 300;
				color: rgba(175, 47, 47, 0.15);
			}

			&:focus {
				outline: none;
				background: rgba(255,74,86,1);
				color: white;
			}
		}
	}	  
}
</style>
