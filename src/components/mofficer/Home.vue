<template>
  <div class="container-scroller"> 
    <!-- partial:partials/_navbar.html -->
    <nav class="navbar navbar-dark bg-dark justify-content-between default-layout col-lg-12 col-12 p-0 fixed-top d-flex align-items-top flex-row">
      <div class="navbar-dark bg-dark text-center navbar-brand-wrapper d-flex align-items-center justify-content-start" >
        <div class="me-3">
          <button class="navbar-toggler navbar-toggler align-self-center" type="button" data-bs-toggle="minimize">
            <span class="icon-menu"></span>
          </button>
        </div>
        <div>
          <a class="navbar-brand brand-logo" href="index.html">
            <h3 style="color: white; font-size:700;">Bus s.</h3>
          </a> 
        </div>
      </div>
      <div class="navbar-menu-wrapper d-flex align-items-top"> 
        <ul class="navbar-nav" style="margin-right:30%;">
          <li class="nav-item font-weight-semibold d-none d-lg-block ms-0">
            <h1 class="welcome-text" sytle="color:blue;">M. Officer, <span class="text-black fw-bold"> {{  this.$store.state.user.name }} </span></h1><a>{{  this.$store.state.user.email }} </a>
            <h3 class="welcome-sub-text">Menhariya transportation status!</h3>
          </li> 
        </ul>  
         <form class="form-inline">
             <input class="form-control mr-sm-2" type="search" placeholder="Search driver" aria-label="Search">  
         </form>
         <button class="btn btn-primary" style="margin-left:16%;" @click="signOUT()">Sign out</button>
      </div>
     
    </nav>
    <!-- partial -->
    <div class="container-fluid page-body-wrapper  justify-content-md-center" id="body-bak">
        
      <!-- partial -->
      <!-- partial:partials/_sidebar.html -->
      <!-- partial -->
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="row">
            <div class="col-sm-12">
              <div class="home-tab">
                <div class="d-sm-flex align-items-center justify-content-between border-bottom">
                  <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item">
                      <a class="nav-link active ps-0" id="home-tab" data-bs-toggle="tab" href="#overview" role="tab" aria-controls="overview" aria-selected="true">Overview</a>
                    </li> 
                  </ul> 
                </div>
                <div class="tab-content tab-content-basic">
                  <div class="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview"> 
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="statistics-details d-flex align-items-center justify-content-between">
                          <div>
                            <p class="statistics-title">Total Vehicles</p>
                            <h3 class="rate-percentage">{{  this.$store.state.drivers.length }}</h3>
                            <p class="text-danger d-flex"><i class="mdi mdi-menu-down"></i><span></span></p>
                          </div>
                          <div>
                            <p class="statistics-title">Departed from this bstation</p>
                            <h3 class="rate-percentage">{{  this.$store.state.ticketsFrom.length }}</h3>
                            <p class="text-success d-flex"><i class="mdi mdi-menu-up"></i><span></span></p>
                          </div>
                          <div>
                            <p class="statistics-title">On their way to this bstation</p>
                            <h3 class="rate-percentage" v-if="this.$store.state.tickets">{{  this.$store.state.tickets.length }}</h3>
                            <p class="text-danger d-flex"><i class="mdi mdi-menu-down"></i><span> </span></p>
                          </div>
                          <div class="d-none d-md-block">
                            <p class="statistics-title">Total under penality</p>
                            <h3 class="rate-percentage">0</h3>
                            <p class="text-success d-flex"><i class="mdi mdi-menu-down"></i><span></span></p>
                          </div> 
                        </div>
                      </div>
                    </div> 
                    <div class="row">
                      <div class="col-lg-8 d-flex flex-column"> 
                         <div class="row flex-grow">
                          <div class="col-12 grid-margin stretch-card">
                            <div class="card card-rounded">
                              <div class="card-body">
                                <div class="d-sm-flex justify-content-between align-items-start">
                                  <div>
                                    <h4 class="card-title card-title-dash">Menhariya Status</h4>
                                   <p class="card-subtitle card-subtitle-dash">All the status of today ...</p>
                                  </div> 
                                </div>
                                <div class="table-responsive  mt-1">
                                  <table class="table select-table">
                                    <thead>
                                      <tr>
                                        <th>
                                          <div class="form-check form-check-flat mt-0">
                                            <label class="form-check-label">
                                              <input type="checkbox" class="form-check-input" aria-checked="false"><i class="input-helper"></i></label>
                                          </div>
                                        </th>
                                        <th>Driver</th>
                                        <th>Starting point</th>
                                        <th>Destination</th>
                                        <th>Status</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr v-for="(driver,index) in shoofier" :key=driver.index>
                                        <td>
                                          <div class="form-check form-check-flat mt-0">
                                            <label class="form-check-label">
                                            <input type="checkbox" class="form-check-input" aria-checked="false"><i class="input-helper"></i></label>
                                          </div>
                                        </td>
                                        <td>
                                          <div> 
                                              <b-button v-b-modal="modalId(index, driver.licence)" variant="outline-primary">
                                                
                                                   <h6>{{ driver.name }}</h6>
                                                   <p>{{ driver.licence }}</p>
                                               
                                              </b-button>
                                               <!-- Modal -->
                                              <b-modal :id="'modal' + index" >
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
                                                      </tr>
                                                    </thead>
                                                    <tbody>
                                                      <tr>
                                                        <th scope="row">1</th>
                                                        <td> {{ sdriver.name }}</td>
                                                        <td>{{ sdriver.licence }}  </td>
                                                        <td>{{ sdriver.working_route }}</td>
                                                        <td>{{ sdriver.driver_type }}</td>
                                                        <td>{{ sdriver.created_at }}</td>
                                                      </tr> 
                                                    </tbody>
                                                  </table>
                                                  
                                                </div>  
                                              </b-modal> 
                                            <!-- End modal for driver profile -->
                                          </div>
                                        </td>
                                        <td>
                                          <h6> {{ driver.starting }} </h6>
                                          <p>{{ driver.time }}</p>
                                        </td>
                                        <td>
                                          <h6>{{ driver.destination }}</h6> 
                                        </td>
                                        <td><div> {{ driver.status }} </div></td>
                                        
                                      </tr>
                                  
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> 

                      <!-- Start modal for driver profile  -->
                     
                      <div class="col-lg-4 d-flex flex-column"> 
                        <div class="row flex-grow">
                          <div class="col-12 grid-margin stretch-card">
                            <div class="card card-rounded">
                              <div class="card-body">
                                <div class="row">
                                  <div class="col-lg-12">
                                    <div class="d-flex justify-content-between align-items-center mb-3">
                                      <div>
                                        <h4 class="card-title card-title-dash">Top Performer</h4>
                                      </div>
                                    </div>
                                    <div class="mt-3">
                                      <div class="wrapper d-flex align-items-center justify-content-between py-2 border-bottom">
                                        <div class="d-flex">
                                           
                                          <div class="wrapper ms-3">
                                            <p class="ms-1 mb-1 fw-bold">Brandon Washington</p>
                                            <small class="text-muted mb-0">162543</small>
                                          </div>
                                        </div>
                                        <div class="text-muted text-small">
                                          Joined 2y ago
                                        </div>
                                      </div>
                                      <div class="wrapper d-flex align-items-center justify-content-between py-2 border-bottom">
                                        <div class="d-flex">
                                           
                                          <div class="wrapper ms-3">
                                            <p class="ms-1 mb-1 fw-bold">Wayne Murphy</p>
                                            <small class="text-muted mb-0">162543</small>
                                          </div>
                                        </div>
                                        <div class="text-muted text-small">
                                          Joined 1y ago
                                        </div>
                                      </div>
                                      <div class="wrapper d-flex align-items-center justify-content-between py-2 border-bottom">
                                        <div class="d-flex">
                                          
                                          <div class="wrapper ms-3">
                                            <p class="ms-1 mb-1 fw-bold">Katherine Butler</p>
                                            <small class="text-muted mb-0">162543</small>
                                          </div>
                                        </div>
                                        <div class="text-muted text-small">
                                          Joined 1y ago
                                        </div>
                                      </div>
                                      <div class="wrapper d-flex align-items-center justify-content-between py-2 border-bottom">
                                        <div class="d-flex">
                                          
                                          <div class="wrapper ms-3">
                                            <p class="ms-1 mb-1 fw-bold">Matthew Bailey</p>
                                            <small class="text-muted mb-0">162543</small>
                                          </div>
                                        </div>
                                        <div class="text-muted text-small">
                                          Joined 2month ago
                                        </div>
                                      </div>
                                      <div class="wrapper d-flex align-items-center justify-content-between pt-2">
                                        <div class="d-flex">
                                         
                                          <div class="wrapper ms-3">
                                            <p class="ms-1 mb-1 fw-bold">Rafell John</p>
                                            <small class="text-muted mb-0">Alaska, USA</small>
                                          </div>
                                        </div>
                                        <div class="text-muted text-small">
                                          Joined 23d ago
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- content-wrapper ends -->
         <footer class="footer">
          <div class="d-sm-flex justify-content-center justify-content-sm-between">
            
            <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Copyright © 2021. All rights reserved.</span>
          </div>
        </footer>
      </div>
      <!-- main-panel ends -->
    </div>
    <!-- page-body-wrapper ends -->
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return { 
      shoofier: [],
      singleDriver: {
        name: '',
        licence: '',
        starting: '',
        destination: '',
        time:'',
        status: ''
      },
      sdriver:{
        name:'',
        licence:'',
        working_route: '',
        car_owner:'',
        created_at: '',
        driver_type: '',
        id: '',
        updated_at: '',
      },
      message: true,
      nfh:0,
      alldriver:[],
    }
  },
  mounted(){
    this.showDrivers()
    this.showDrivers1()  
    this.nfromHere() 
  },
  
  methods: {
    ...mapActions([
				'dashdriver', 'fromHereDriver'
			]),
    showDrivers1(){
      this.fromHereDriver()
          .then(() => {
            // this.tickets = this.$store.state.tickets 
            console.log("TickETs From Here" ,this.$store.state.ticketsFrom)
            if(!this.$store.state.ticketsFrom || !this.$store.state.ticketsFrom.length){
              console.log("Empty list tickT FrOmE hErE")
            }else{
            this.alldriver = [... this.$store.state.drivers]
           
            this.$store.state.ticketsFrom.forEach( (tval) => {
             this.alldriver.forEach((dval) => {
                if(dval.id == tval.driver_id){
                  this.shoofier.push({
                    name: dval.name,
                    licence: dval.licence,
                    starting: tval.starting_point,
                    destination: tval.destination,
                    time: tval.created_at,
                    status:  tval.canceled === 1 ? "complited" : "on the move" 
                  })
                }
              })
            })
            console.log("Success")
             
            }
          })        
    },
    showDrivers(){
      this.dashdriver()
          .then(() => {
            // this.tickets = this.$store.state.tickets 
            console.log("TickETs coming to Here" ,this.$store.state.tickets)
            console.log("DRiveRs" ,this.$store.state.drivers)  
            if(!this.$store.state.tickets || !this.$store.state.tickets.length){
              console.log("Empty list tickT tO hErE")
            }else{
              this.$store.state.tickets.forEach( (tval) => {
              this.$store.state.drivers.forEach((dval) => {
                if(dval.id == tval.driver_id){
                  this.shoofier.push({
                    name: dval.name,
                    licence: dval.licence,
                    starting: tval.starting_point,
                    destination: tval.destination,
                    time: tval.created_at,
                    status:  tval.canceled === 1 ? "complited" : "on the move" 
                  })
                }
              })
            })
            }
            
            console.log("Success")
          })        
    },
    nfromHere(){
      if(this.$store.state.ticketsFrom || this.$store.state.ticketsFrom.length){
        this.nfh = this.$store.state.ticketsFrom.length
      }
      
    },
    modalId(i, x) {
      console.log("************")

      this.$store.state.drivers.forEach((dval) => {
         if(dval.licence == x){ 
            this.sdriver.name = dval.name
            this.sdriver.licence = dval.licence
            this.sdriver.working_route = dval.working_route
            this.sdriver.created_at = dval.created_at
            this.sdriver.driver_type = dval.driver_type
            this.sdriver.id = dval.driver_id 
         }
      });


      // this.sdriver.working_route = this.$store.state.drivers[this.$store.state.drivers.indexOf(x)].working_route
      return 'modal' + i;
    },
    signOUT(){
      this.$router.replace('/');
    },
     
  },
}
</script>



 <style scoped >
@import "../../assets/styles/style.css";/*# sourceMappingURL=../maps/vertical-layout-light/style.css.map */
  #body-bak { 
    background-color: rgb(180, 191, 195);
  }
  #nav-bm{
   background-color:rgb(148, 165, 218);
  }
  #log-n{
    background-color:rgb(148, 165, 218);
  }
 </style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
 
