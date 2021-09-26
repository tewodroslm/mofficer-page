import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";


Vue.use(Vuex);

export const store = new Vuex.Store({
	plugins: [createPersistedState({
        storage: window.sessionStorage,
    })],
	state:{
		accessToken:"",
		user:{},
		isAuthenticated: false,
		role:"",
		tickets: [],
		ticketsFrom: [],
		drivers: [],
		allMofficers:[],
		allPolices:[],
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
		setTicketsFrom: (state, value) => {
			state.ticketsFrom = value
		},
		setDrivers: (state, value) => {
			state.drivers = value
		},
		setAllMofficers:(state, value) => {
			state.allMofficers = value
		},
		setAllPolice: (state, value) => {
			state.allPolices = value
		}
	},
	actions:{
		setDriversVl: async({commit}, values) => {
			commit('setDrivers', values)
		},
		addpolice: async ({state}, credentials) => {
			console.log("==============")
			console.log(state.accessToken)
			try{
				const response = await fetch('http://127.0.0.1:8000/api/register-trafficpolice', {
					method: 'POST', 
					body: JSON.stringify(credentials),
					headers: { 
						'Accept': 'application/json',
						'Content-Type': 'application/json',
						'Authorization': 'Bearer '+ state.accessToken,
					},
				}); 
				console.log(response)
			}catch(err){
				return console.log(err)
			}
		}, 
		addMofficer: async ({state},credentials) => {
			try {
				const response = await fetch('http://127.0.0.1:8000/api/register-menhariyaOfficer', {
					method: 'POST',
					body: JSON.stringify(credentials),
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
						'Authorization': 'Bearer '+ state.accessToken,
					},
				}); 
				//const { accessToken } = data.access_token; 
				console.log(response)
			} catch (err) {
				return console.log(err);
			}	
			
			
		},
		getMNofficers: async ({commit, state}) => {
			try{
				const response = await fetch('http://127.0.0.1:8000/api/get-mofficers',{
					method: 'GET', 
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
						'Authorization': 'Bearer '+ state.accessToken,
					},
				});
				const data = await response.json();
				commit('setAllMofficers', data.mofficers);
				console.log(data.mofficers)
			}catch (err){
				return console.log(err)
			}
		},
		getPPolices: async ({commit, state}) => {
			try{
				const response = await fetch('http://127.0.0.1:8000/api/get-polices',{
					method: 'GET', 
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
						'Authorization': 'Bearer '+ state.accessToken,
					},
				});
				const data = await response.json();
				commit('setAllPolice', data.tpolices);
				console.log(data.tpolices)
			}catch (err){
				return console.log(err)
			}
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
			commit('setTickets', [])
			commit('setTicketsFrom', [])
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
		fromHereDriver: async({commit, state}) => {
			try {
				const response = await fetch('http://127.0.0.1:8000/api/departedfromhere', {
					method: 'GET', 
					headers: {
						'Content-Type': 'application/json',
						'Authorization': 'Bearer '+ state.accessToken,
					},
				});
				const data = await response.json();
				// this.$store.state.tickets = [...data.tickets]
				commit('setTicketsFrom', data.tickets); 
 
			}catch(err){
				return console.log(err)
			}
		}
	},
  modules: {}
});
