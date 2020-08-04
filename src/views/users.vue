<template>
<div>
	<main>
		<uiForm />
		<search />
	</main>
	<ul>
		<accounts 
			v-for="user in filteredUsers"
			:key="user.id"
			:user="user"
		/>
	</ul>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import accounts from '../components/accounts'
import uiForm from '../components/Form'
import search from '../components/Search'


export default {
	name: 'users',
	components: {
		accounts,
		uiForm,
		search
	},
	data() {
        return {
           sortedUsers: []
        }
    },
	computed: {
        users() {
            return this.$store.state.users   
		},
		...mapGetters([
            'SEARCH_VALUE'
		]),
		filteredUsers() {
			if (this.sortedUsers.length) {
				return this.sortedUsers
			} else {
				return this.users
			}
		},
	},
	 methods: {
        ...mapActions([
            'GET_USERS_FROM_API',
		]),
		sortusers(value) {
			this.sortedUsers = [...this.users]
            if (value) {
                this.sortedUsers = this.sortedUsers.filter(function (item) {
					return item.firstname.toLowerCase().includes(value.toLowerCase()) || item.lastname.toLowerCase().includes(value.toLowerCase())
                }) 
            } else {
                this.sortedUsers = this.users
            }

        }
	 },
	mounted() {
		this.GET_USERS_FROM_API()
			// .then((response) => {
			// 	if (response.data) {
			// 		console.log('daaata')
			// 		// this.sortedUsers(this.SEARCH_VALUE)
			// 	}
			// })       
	},

	watch: {
        SEARCH_VALUE() {
            this.sortusers(this.SEARCH_VALUE)
        }
    },
    
}
</script>

<style lang="scss" scoped>
@import '../assets/fonts.css';
@import '../assets/reset.css';

ul {
	display: flex;
	flex-wrap: wrap;
	// justify-content: space-around;
	
	justify-content: flex-start;
}

main {
	display: flex;
	flex-wrap: wrap;

	justify-content: space-between;

}

</style>
