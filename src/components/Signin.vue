<template>
<div class="container" style="width:27%;background-color:lightblue; padding:5%;">
    <div class="vue-tempalte">
        <form @submit.prevent="submit">
            <h3>Sign In</h3>
 
            <div class="form-group">
                <label>Email address</label>
                <input v-model="credentials.email" type="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input  v-model="credentials.password" type="password" class="form-control form-control-lg" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button><br /><br /><br />
			<div>
				<a @click.prevent="adminlogin()" href="">sign in as admin</a>
			</div>
             
        </form>
    </div>
</div>	
</template>

<script>
import { mapActions } from 'vuex';
    export default {
        data() {
            return {
				credentials:{
					email:'',
					password:'',
				}
			}
        },

		methods:{
			...mapActions([
				'login','officerLogin','setDriversVl'
			]),
			submit(){
				this.officerLogin(this.credentials)
				.then(() => {
					console.log(this.$store.state.user)
					if(Object.keys(this.$store.state.user).length !== 0){
						if(this.$store.state.role == 'mofficer'){
							this.$router.replace('/home');
							console.log("M officer loggin")
							this.getAllDrivers()
							
						}else{
							// this.$router.replace('/moderator')
							console.log("Some other login")
						}
					}
				})
				.catch((error) => {
					console.log(error + "Error WHEN LOGING IN USING CREDENTIAL ");
				})
			},
			adminlogin(){
				this.login(this.credentials)
				.then(() => {
					console.log(this.$store.state.user)
					if(Object.keys(this.$store.state.user).length !== 0){
						if(this.$store.state.role == 'admin'){
							this.$router.replace('/user');
							console.log("Admin log")
						}else{
							// this.$router.replace('/moderator')
							console.log("Some other login")
						}
					}
				})
				.catch((error) => {
					console.log(error + "Error WHEN LOGING IN USING CREDENTIAL ");
				})
			},
			getAllDrivers(){
				fetch('https://damp-coast-22655.herokuapp.com/api/all-driver',{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': 'Bearer '+ this.$store.state.accessToken
						}
					})
					.then((response) => response.json())
					.then((resp) => {
						console.log("RESP == > ", resp.drivers) 
						this.setDriversVl(resp.drivers).then(()=>{console.log("ETHIOPIA YEEE")})
						console.log("alL DrIVer",this.$store.state.drivers)
						// this.$store.state.drivers = [...resp.drivers]
					})
			},
		} 
    }
</script>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  background: #2554FF !important;
  min-height: 100vh;
  display: flex;
  font-weight: 400;
}

body,
html,
.App,
.vue-tempalte,
.vertical-center {
  width: 100%;
  height: 100%;
}

.navbar-light {
  background-color: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
}

.vertical-center {
  display: flex;
  text-align: left;
  justify-content: center;
  flex-direction: column;    
}

.inner-block {
  width: 450px;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  transition: all .3s;
}

.vertical-center .form-control:focus {
  border-color: #2554FF;
  box-shadow: none;
}

.vertical-center h3 {
  text-align: center;
  margin: 0;
  line-height: 1;
  padding-bottom: 20px;
}

label {
  font-weight: 500;
}

.forgot-password,
.forgot-password a {
  text-align: right;
  font-size: 13px;
  padding-top: 10px;
  color: #7a7a7a;
  margin: 0;
}

.forgot-password a {
  color: #2554FF;
}

.social-icons {
  text-align: center;
  font-family: "Open Sans";
  font-weight: 300;
  font-size: 1.5em;
  color: #222222;
}

.social-icons ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.social-icons ul li {
  display: inline-block;
  zoom: 1;
  width: 65px;
  vertical-align: middle;
  border: 1px solid #e3e8f9;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  margin-right: 5px;
  background: #f4f6ff;
}

.social-icons ul li a {
  display: block;
  font-size: 1.4em;
  margin: 0 5px;
  text-decoration: none;
}
.social-icons ul li a i {
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -ms-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}

.social-icons ul li a:focus i,
.social-icons ul li a:active i {
  transition: none;
  color: #222222;
}
</style>