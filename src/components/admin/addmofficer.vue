<template>
<div id="register" class="shadow rounded">
<form @submit.prevent="submit">

<ul class="p-3 float-right">
    <li>
        <div class="form-check shadow-sm"> 
             <label class="form-check-label" for="flexRadioDefault1">
                  <h6>Register bus-station offciers</h6>
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
        <label class="float-start pb-1" ><h6>Email(Official email address)</h6></label>
        <input  v-model="credentials.email" type="email" class="form-control  rounded" placeholder="example@gmail.com" required> 
    </div> 
    <div> 
        <div id="leftbox">
          <label class="float-start pb-1 pt-1" ><h6>Work Place</h6></label>
        </div> 
         <b-dropdown id="dropdown-form" ref="dropdown" class="m-2" text='Select Location' v-model="this.selectedItem"> 
            <b-dropdown-divider></b-dropdown-divider> 
            <b-dropdown-item-button></b-dropdown-item-button>
            <b-dropdown-item-button @click="selectedItem='Addis'">Addis</b-dropdown-item-button>
            <b-dropdown-item-button @click="selectedItem='Bishoftu'">Bishoftu</b-dropdown-item-button>
            <b-dropdown-item-button @click="selectedItem='Adama'">Adama</b-dropdown-item-button>
            <b-dropdown-item-button @click="selectedItem='Bahir'">Bahir</b-dropdown-item-button>
            <b-dropdown-item-button @click="selectedItem='Jima'">Jima</b-dropdown-item-button> 
        </b-dropdown>
        <div>{{ this.selectedItem }}</div>
    </div>
    <div class="form-group  labels" style="clear: both;">
        <label class="float-start pb-1 pt-1" ><h6>Password</h6></label>
        <input  v-model="credentials.password" pattern=".{6,}"  type="password" class="form-control  rounded" placeholder="password" required> 
    </div>
     <div class="form-group  labels">
        <label class="float-start pb-1 pt-1" ><h6>Confirm Password</h6></label>
        <input  v-model="credentials.password_confirmation" pattern=".{6,}"  type="password" class="form-control  rounded" placeholder="password" required> 
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
                email:'',
                working_route:'',
                password:'',
                password_confirmation:''
            },
            standAlone: '',
            isTrue: false,
            isTrue1: false,
             selectedItem: 'Addis',
        }
    },
    methods:{
        ...mapActions([ 
                'addMofficer'
			]),
            submit(){
                this.credentials.working_route = this.selectedItem
                if(this.credentials.password == this.credentials.password_confirmation){
                        this.addMofficer(this.credentials) 
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

// 'name' => 'required|string', 
//             'working_route' => 'string',  
//             'email' => 'required|email',
//            'password' => 'required|min:4|confirmed'
}

</script>
<style scoped>
#leftbox {
                float:left;   
            }
            #middlebox{
                margin-left: 8px;
                float:left;   
            }
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
