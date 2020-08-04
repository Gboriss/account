<template>
<form class="search" @submit.prevent="submit()">
	<h1>Вход</h1>
	<div class="question">
		<input 
			type="email" 
			placeholder="email"
			required
			v-model.trim="email"
			:class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
		/>
		 <small 
          class="helper-text invalid"
          v-if="$v.email.$dirty && !$v.email.required"
        >Поле Email не должно быть пустым</small>
        <small 
          class="helper-text invalid"
          v-else-if="$v.email.$dirty && !$v.email.email"
        >Введите корретный Email</small>
	</div>
	<div class="question">
		<input 
			type="password" 
			required 
			placeholder="password"
			v-model.trim="password"
			:class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
		/>
		<small 
          class="helper-text invalid"
          v-if="$v.password.$dirty && !$v.password.required"
        >
          Введите пароль
        </small>
        <small 
          class="helper-text invalid"
          v-else-if="$v.password.$dirty && !$v.password.minLength"
        >
          Пароль должен быть {{$v.password.$params.minLength.min}} символов. Сейчас он {{password.length}}
        </small>
	</div>
	<button type="submit">Отправить</button>
</form>	

  
</template>

<script>
import {email, required, minLength} from 'vuelidate/lib/validators'

export default {
	name: 'login',
		data () {
			return {
				email: '',
				password: '',
			}
		},
		validations: {
			email: {email, required},
			password: {required, minLength: minLength(6)}
		},
	methods: {
		submit() {
			
			if (this.$v.$invalid) {
				this.$v.$touch()
				return
			}
 			const formData = {
				email: this.email,
				password: this.password
			}
			console.log(formData)

			this.$router.push('/menu')
		}

	},

	computed: {
		valid() {

		}
	}
}
</script>

<style  lang="scss" scoped>
* {
	transition: ( all 0.25s cubic-bezier(.53,.01,.35,1.5));

}

form {
	display: flex;
	flex-direction: column;
	// display: inline-block;
	width: 400px;
	height: 350px;
	padding: 30px 25px;
	margin: 40px auto;
	border-radius: 40px;
	box-sizing: border-box;
	box-shadow: 0 0 20px -5px rgba(0, 0, 0, .25);
	background-color: white;
	
	  
	h1 {
		color: rgba(255,74,86,1);
		font-weight: 100;
		// letter-spacing: 0.01em;
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
		// letter-spacing: 0.01em;
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
	
		input {		
			position: relative;
			font-size: 17px;
			color: rgba(255,74,86,1);
			padding: 10px 15px;
			background-color: none;
			box-sizing: border-box;

			appearance: none;
			border: 1px solid rgba(255,74,86,1);
			width: 100%;
			display: block;
			border-radius: 60px;
			font-weight: 100;
			// letter-spacing: 0.01em;
			z-index: 1;

			&::placeholder {
				font-weight: 300;
				// line-height: 0.9;

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
.helper-text {
	margin-left: 15px;
}

</style>