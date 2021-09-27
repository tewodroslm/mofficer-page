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
		driver:{},
		isAuthenticated: false,
		role:"",
		tickets: [],
		ticketsFrom: [],
		drivers: [],
		allMofficers:[],
		allPolices:[],
		payments:[],
		reports:[]
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
		},
		setPayments: (state, value) => {
			state.payments = value
		},
		setReports: (state, value) => {
			state.reports = value
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
				const response = await fetch('https://damp-coast-22655.herokuapp.com/api/register-trafficpolice', {
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
				const response = await fetch('https://damp-coast-22655.herokuapp.com/api/register-menhariyaOfficer', {
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
				const response = await fetch('https://damp-coast-22655.herokuapp.com/api/get-mofficers',{
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
				const response = await fetch('https://damp-coast-22655.herokuapp.com/api/get-polices',{
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
				const response = await fetch('https://damp-coast-22655.herokuapp.com/api/login-admin', {
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
				const response = await fetch('https://damp-coast-22655.herokuapp.com/api/login-mofficer', {
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
				const response = await fetch('https://damp-coast-22655.herokuapp.com/api/toCurrentStaion', {
					method: 'GET', 
					headers: {
						'Content-Type': 'application/json',
						'Authorization': 'Bearer '+ state.accessToken,
					},
				});
				const data = await response.json();
				console.log("=========== to current ========")
				console.log(data)
				commit('setTickets', data.tickets); 

				state.isAuthenticated = true
			}catch(err){
				return console.log(err)
			}
		},
		fromHereDriver: async({commit, state}) => {
			try {
				const response = await fetch('https://damp-coast-22655.herokuapp.com/api/departedfromhere', {
					method: 'GET', 
					headers: {
						'Content-Type': 'application/json',
						'Authorization': 'Bearer '+ state.accessToken,
					},
				});
				const data = await response.json();
				console.log("=========== from current ========")
				console.log(data)
				// this.$store.state.tickets = [...data.tickets]
				commit('setTicketsFrom', data.tickets); 
 
			}catch(err){
				return console.log(err)
			}
		},
		getDriver: async({state}, licence) => {
			try {
				const response = await fetch('https://damp-coast-22655.herokuapp.com/api/mocheckdriver',{
					method: 'POST',
					body: JSON.stringify(licence),
					headers: {
						'Content-Type': 'application/json',
						'Authorization': 'Bearer '+ state.accessToken,
					},
				});
				const data = await response.json();
				Vue.set(state.driver, 'driverObm', data.driver)
				console.log(data)
				console.log(state.driver)
			}catch(err){
				return console.log(err)
			}
		},
		suspendd: async({state},licence) => {
			try {
				const response = await fetch('https://damp-coast-22655.herokuapp.com/api/suspend',{
					method: 'POST',
					body: JSON.stringify(licence),
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
						'Authorization': 'Bearer '+ state.accessToken,
					},
				});
				const data = await response.json();
				// Vue.set(state.driver, 'driverObm', data.driver)
				console.log(data)
				console.log("Driver suspended")
			}catch(err){
				return console.log(err)
			}
		},
		
		payments: async({commit, state}, licence) => {
			try {
				const response = await fetch('https://damp-coast-22655.herokuapp.com/api/payments',{
					method: 'POST',
					body: JSON.stringify(licence),
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
						'Authorization': 'Bearer '+ state.accessToken,
					},
				});
				const data = await response.json();
				commit('setPayments', data.payments)
				console.log(data)
				console.log(data.payments)
				console.log("Driver payments")
			}catch(err){
				return console.log(err)
			}
		},

		reports: async({commit, state}, platenumber) => {
			try {
				const response = await fetch('https://damp-coast-22655.herokuapp.com/api/get-reports',{
					method: 'POST',
					body: JSON.stringify(platenumber),
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
						'Authorization': 'Bearer '+ state.accessToken,
					},
				});
				const data = await response.json();
				commit('setReports', data.reports)
				console.log(data)
				console.log("Driver reports888888888888888888888")
				console.log(data.reports)
				console.log("Driver reports")
			}catch(err){
				return console.log(err)
			}
		}

	},
  modules: {}
});


