import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
	state:{
		accessToken:"",
		user:{},
		isAuthenticated: false,
		role:"",
		tickets: [],
		drivers: [],
	},
	mutations:{
		setAccessToken: (state, value) => {
			state.accessToken = value;
		},
		setUser: (state, value) => {
			state.user = value;
		},
		authenitcate: (state) => {
			state.isAuthenticated = true;
		},
		setRole:(state, value) => {
			state.role = value
		},
		setTickets: (state, value) => {
			state.tickets = value
		},
		setDrivers: (state, value) => {
			state.drivers = value
		}
	},
	actions:{
		setDriversVl: async({commit}, values) => {
			commit('setDrivers', values)
		},
		login: async ({commit, state}, credentials) => {
			try {
				const response = await fetch('http://127.0.0.1:8000/api/login-admin', {
					method: 'POST',
					body: JSON.stringify(credentials),
					headers: {
						'Content-Type': 'application/json',
					},
				});
				const data = await response.json();
				//const { accessToken } = data.access_token;
				commit('setAccessToken', data.token);
				commit('setUser', data.Admin);
				commit('authenitcate');
				commit('setRole', 'admin'); 

				state.isAuthenticated = true
				
			} catch (err) {
				return console.log(err);
			}	
			
			
		},
		officerLogin: async ({commit, state}, credentials) => {
			try {
				const response = await fetch('http://127.0.0.1:8000/api/login-mofficer', {
					method: 'POST',
					body: JSON.stringify(credentials),
					headers: {
						'Content-Type': 'application/json',
					},
				});
				const data = await response.json();
				//const { accessToken } = data.access_token;
				commit('setAccessToken', data.access_token);
				commit('setUser', data.Mofficer);
				commit('authenitcate');
				commit('setRole', 'mofficer'); 

				state.isAuthenticated = true
			}catch(err){
				return console.log(err)
			}
		},
		dashdriver: async({commit, state}) => {
			try {
				const response = await fetch('http://127.0.0.1:8000/api/toCurrentStaion', {
					method: 'GET', 
					headers: {
						'Content-Type': 'application/json',
						'Authorization': 'Bearer '+ state.accessToken,
					},
				});
				const data = await response.json();
				
				commit('setTickets', data.tickets); 

				state.isAuthenticated = true
			}catch(err){
				return console.log(err)
			}
		},
	},
  modules: {}
});
