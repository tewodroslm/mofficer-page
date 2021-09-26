<template>
<div id="register" class="shadow rounded">
<form @submit.prevent="submit">

<ul class="p-3 float-right">
    <li>
        <div class="form-check shadow-sm"> 
             <label class="form-check-label" for="flexRadioDefault1">
                  <h6>Register Traffic Polices</h6>
             </label>
        </div>
    </li>
    
</ul>

<div id="user_info">

    <div class="form-group ">
     <label class="float-start labels pb-1"><h6>Name</h6></label>
     <input  v-model="credentials.name" type="text" class="form-control  rounded" placeholder="first Name" required/>
    </div>
     
    <div class="form-group  labels">
        <label class="float-start pb-1" ><h6>ID Number(Official service id number)</h6></label>
        <input  v-model="credentials.traffic_id" type="number" class="form-control  rounded" placeholder="ID" required/> 
    </div>
        <div class="form-group  labels">
        <label class="float-start pb-1 pt-1" ><h6>Work Place</h6></label>
        <input  v-model="credentials.working_route" type="text" class="form-control  rounded" placeholder="Work Place" required/> 
    </div>
    <div class="form-group  labels">
        <label class="float-start pb-1 pt-1" ><h6>Password</h6></label>
        <input  v-model="credentials.password" type="password" class="form-control  rounded" placeholder="password" required/> 
    </div>
     <div class="form-group  labels">
        <label class="float-start pb-1 pt-1" ><h6>Confirm Password</h6></label>
        <input  v-model="credentials.password_confirmation" type="password" class="form-control  rounded" placeholder="password" required/> 
    </div>

    <button class="btn btn-primary btn-block mt-2 btn-register" type="submit"><h6>Register</h6></button>
</div>
    <div v-if=isTrue>
        <h3 style="color: red;">Please submit form again!</h3>
    </div>
    <div v-if=isTrue1>
        <h3> registration success full! </h3>
    </div>
</form>
   <router-link to="/user"> <a>Go home</a> </router-link>
</div>
</template>
<script>
import { mapActions } from 'vuex';
export default{

    name: 'Register',
    data(){
        return{
            credentials:{
                name:'',
                traffic_id:0,
                working_route:'',
                password:'',
                password_confirmation:''
            },
            isTrue: false,
            isTrue1: false,
        }
    },
    methods:{
        ...mapActions([
				'addpolice'
			]),
            submit(){
                if(this.credentials.traffic_id != 0 && this.credentials.password==this.credentials.password_confirmation){
                        this.addpolice(this.credentials) 
                    .catch((error) => {
                        console.log(error + "Error WHEN LOGING IN USING CREDENTIAL ");
                    })
                    this.isTrue = false;
                    this.isTrue1 = true;
                }
                else{ 
                    this.isTrue = true;
                    console.log("Error submiting registration!! ")
                }
				
			},
    } 
}

</script>
<style scoped>
#register{
    width: 65%;
    margin-left: 15%;
}
#user_info{
    padding-left: 25%;
    padding-right: 25%;
}
.btn-register{
    margin-bottom: 10%;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 15px;
}
.labels{
    margin-left: 0%;
}
</style>