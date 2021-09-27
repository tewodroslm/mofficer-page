<template>


<div id="register" class="shadow rounded">
  <div>
                                                  <table class="table table-dark">
                                                    <thead>
                                                      <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Licence number</th>
                                                        <th scope="col">Working route</th>
                                                        <th scope="col">Dereja</th>
                                                        <th scope="col">Registered date</th>
                                                        <th></th>
                                                      </tr>
                                                    </thead>
                                                    <tbody>
                                                      <tr>
                                                        <th scope="row">1</th>
                                                        <td> {{ this.$store.state.driver.driverObm.name }}</td>
                                                        <td>{{ this.$store.state.driver.driverObm.licence }}  </td>
                                                        <td>{{ this.$store.state.driver.driverObm.working_route }}</td>
                                                        <td>{{ this.$store.state.driver.driverObm.driver_type }}</td>
                                                        <td>{{ this.$store.state.driver.driverObm.created_at }}</td>
                                                        <td>
                                                                <button @click="suspend()">{{ this.$store.state.driver.driverObm.status=='' || this.$store.state.driver.driverObm.status==null ? sus : this.$store.state.driver.driverObm.status }}</button>
                                                             
                                                        </td>
                                                      </tr> 
                                                    </tbody>
                                                  </table>
<div> Payments done by the driver </div>
                                                  <table class="table table-dark">
                                                    <thead>
                                                      <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">amount</th>
                                                        <th scope="col">bank account number</th>
                                                        <th scope="col">paid date</th> 
                                                        <th scope="col"> </th>
                                                        <th></th>
                                                      </tr>
                                                    </thead>
                                                    <tbody v-for="(pay) in paymentsall" :key=pay.index>
                                                      <tr>
                                                        <th scope="row">1</th>
                                                        <td> {{ pay.amount}}</td>
                                                        <td>{{ pay.bank_account }}</td> 
                                                        <td>{{ pay.created_at }}</td> 
                                                        <td> 
                                                        </td>
                                                      </tr> 
                                                    </tbody>
                                                  </table>
                                            <div> Reports by traffic polices </div>
                                                  <table class="table table-dark">
                                                    <thead>
                                                      <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">id</th>
                                                        <th scope="col">Reported area</th>
                                                        <th scope="col">Plate number</th> 
                                                        <th scope="col">reason</th>
                                                        <th scope="col">Reporter Traffic police id</th>
                                                        <th></th>
                                                      </tr>
                                                    </thead>
                                                    <tbody v-for="(rep) in reportsall" :key=rep.index>
                                                      <tr>
                                                        <th scope="row">1</th>
                                                        <td> {{ rep.id}}</td>
                                                        <td>{{ rep.place }}</td> 
                                                        <td>{{ rep.platenumber }}</td> 
                                                        <td>{{ rep.reason}}</td> 
                                                        <td>{{ rep.traffic_police_id}}</td> 
                                                        <td> 
                                                        </td>
                                                      </tr> 
                                                    </tbody>
                                                  </table>
                                                  
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
            sus: 'suspend',
            licence:{
                licence:''
            },
            platenumber:{
                platenumber:''
            },
            paymentsall:[], 
        }
    },
    mounted(){ 
        this.licence.licence = this.$store.state.driver.driverObm.licence      
        this.paymentsMethod()  
    },
    methods: {  
         ...mapActions([
				'suspendd','payments','reports'
			]),
            paymentsMethod(){
                this.platenumber.platenumber = this.$store.state.driver.driverObm.car_plate_number
                 this.payments(this.licence)
                .then(() => {
                    console.log("payments ")
                     this.paymentsall = [...this.$store.state.payments]
                     console.log("===================")
                    console.log(this.paymentsall)
                })
                this.reportsMethod()
            },
            reportsMethod(){
                console.log("PLATE===============")
                console.log(this.platenumber.platenumber)
                this.reports(this.platenumber)
                .then(() => {
                    console.log("reports ...")
                    this.reportsall = [...this.$store.state.reports]
                })
            },
            suspend(){
                console.log(this.$store.state.driver.driverObm.licence)
                this.suspendd(this.licence)
                    .then(() => {
                        this.sus = "Suspended!!"
                    })
                console.log("suspended licence")
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


