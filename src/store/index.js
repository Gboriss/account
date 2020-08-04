import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		isAuth: false,
		users: [],
		searchValue: ''
	},
	mutations: {
		SET_USERS: (state, users) => {
			state.users = users
		},
		REMOVE: (state, id) => {
            let user = state.users.findIndex(user => 
            	(user.id === id))

                state.users = [
                    ...state.users.slice(0, user),
                    ...state.users.slice(user + 1)
                ]
		},
		UPDATE: (state, { id, content }) => {
            let user = state.users.find(user => 
                (user.id === id))
				user.firstname = content
			},

		UPDATELASTNAME: (state, { id, contentLastname }) => {
		let user = state.users.find(user => 
			(user.id === id))
			user.lastname = contentLastname
		},

		UPDATEEMAIL: (state, { id, contentEmail }) => {
		let user = state.users.find(user => 
			(user.id === id))
			user.email = contentEmail
		},
			
		ADDUSER: (state, user) => {
			state.users.push(user)
		},
		
		SET_SEARCH: (state, value) => {
			state.searchValue = value
			// let user = state.searchValue.filter(user => 
			// 	(user.id === id))
		},
	},
	actions: {
		GET_USERS_FROM_API({commit}) {
			return axios('http://localhost:3000/users', {
				method: "GET"
			})
			.then((users) => {
				commit('SET_USERS', users.data)
			return users
			})
			.catch((error) => {
				console.log(error)
			return error
			})
		},
		GET_SEARCH({commit}, value) {
			commit('SET_SEARCH', value)
		}
	},
	getters: {
		USERS(state) {
			return state.users
		},
		SEARCH_VALUE(state) {
			return state.searchValue
		}
	},
  modules: {
  }
})
