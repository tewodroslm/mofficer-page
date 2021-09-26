<template>


<div id="register" class="shadow rounded">

<div class="dropdown " style="text-align: right;">
  <router-link to="/addmo">
    <button style="margin-right:5px;" class="btn btn-secondary dropdown-toggle dropbutton" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Add Menehariya Officer  
    </button> 
  </router-link>
  <router-link to="/addtp"> 
    <button class="btn btn-secondary dropdown-toggle dropbutton" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
      Add Traffic Polices
    </button>
  </router-link>
  <br/><br />
  
</div>
<div style="text-align: left;"> 
   <div>  
         <b-dropdown id="dropdown-form" ref="dropdown" class="m-2" text='Select role'> 
            <b-dropdown-divider></b-dropdown-divider> 
            <b-dropdown-item-button></b-dropdown-item-button>
            <b-dropdown-item-button @click="swapMofficers()">Menhariya Officers</b-dropdown-item-button>
            <b-dropdown-item-button @click="swapTpolices()">Traffic Polices</b-dropdown-item-button> 
        </b-dropdown> 
    </div>
</div>

    <div class="list-group" v-if=this.isMofficer>
        <h3>Bus station officers</h3>    
        <button type="button" class="list-group-item list-group-item-action" v-for="(officer) in mofficers" :key="officer.index">
            <table style="">
                <tr>
                    <td style="  text-align: left; width:30px">{{ officer.id }}</td>
                    <td  style="  text-align: left;width:200px">{{ officer.name }}</td>
                    <td  style="  text-align: left; width:200px">{{ officer.email }}</td>
                    <td  style="  text-align: left; width:200px">{{ officer.workroute }}</td>
                    <td  style="  text-align: left; width:200px">{{ officer.registered }}</td>
                    <td  style="  text-align: right; width:400px;"><button class="btn btn-success mybutton">edit</button></td>
                </tr>
            </table>
        </button> 
    </div>
    <div class="list-group" v-else>
        <h3>Traffic polices</h3>    
        <button type="button" class="list-group-item list-group-item-action" v-for="(police) in tpolices" :key="police.index">
            <table style="">
                <tr>
                    <td style="  text-align: left; width:30px">{{ police.id }}</td>
                    <td  style="  text-align: left;width:200px">{{ police.name }}</td>
                    <td  style="  text-align: left; width:200px">{{ police.workid }}</td>
                    <td  style="  text-align: left; width:200px">{{ police.workroute }}</td>
                    <td  style="  text-align: left; width:200px">{{ police.registered }}</td>
                    <td  style="  text-align: right; width:400px;"><button class="btn btn-success mybutton">edit</button></td>
                </tr>
            </table>
        </button> 
    </div>
</div>

</template>
<script>
import { mapActions } from 'vuex';
export default{
    name: 'User',
    data(){
        return{
            mofficers: [],
            tpolices: [],
            isMofficer: false, 
        }
    },
    mounted(){
        this.getMofficers()
        this.getTpolices()
    },
    methods: {
        ...mapActions([
            'getMNofficers','getPPolices'
        ]),
        swapMofficers(){
            this.isMofficer = true;
        },
        swapTpolices(){
            this.isMofficer = false;
        },
        getMofficers(){
             this.getMNofficers()
                .then(() => {
                    console.log("It is working. loading mofficers...")
                    this.$store.state.allMofficers.forEach(element => {
                        this.mofficers.push({
                            name: element.name,
                            id: element.id,
                            workroute: element.working_route,
                            email: element.email,
                            registered: element.created_at
                        })
                    });
                    
                    console.log(this.mofficers)
                })
        },
        getTpolices(){
            this.getPPolices()
                .then(() => {
                    console.log("It is working. loading polices...")
                    this.$store.state.allPolices.forEach(element => {
                        this.tpolices.push({
                            name: element.name,
                            id: element.id,
                            workroute: element.working_route, 
                            workid: element.traffic_id,
                            registered: element.created_at
                        })
                    });
                    
                })
        }
    }
}

</script>
<style scoped>

#register{
    width: 65%;
    margin-left: 15%;
}
.dropdown{
 padding-left: 0%;
}

.active  {

  background-color: rgb(70, 108, 121);

}
.mybutton{
    background-color: rgb(30, 55, 63);
}
.dropbutton{
    background-color: white;
    color:black
}
.dropdown{
    margin-top: 2%;
}

</style>


