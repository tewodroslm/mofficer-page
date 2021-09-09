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
            <h1 class="welcome-text" sytle="color:blue;">M. Officer, <span class="text-black fw-bold">John Doe</span></h1>
            <h3 class="welcome-sub-text">Menhariya transportation status!</h3>
          </li> 
        </ul>  
         <form class="form-inline">
             <input class="form-control mr-sm-2" type="search" placeholder="Search driver" aria-label="Search">  
         </form>
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
                            <h3 class="rate-percentage">32</h3>
                            <p class="text-danger d-flex"><i class="mdi mdi-menu-down"></i><span>-0.5%</span></p>
                          </div>
                          <div>
                            <p class="statistics-title">Departed from this bstation</p>
                            <h3 class="rate-percentage">7</h3>
                            <p class="text-success d-flex"><i class="mdi mdi-menu-up"></i><span>+0.1%</span></p>
                          </div>
                          <div>
                            <p class="statistics-title">On their way to this bstation</p>
                            <h3 class="rate-percentage">6</h3>
                            <p class="text-danger d-flex"><i class="mdi mdi-menu-down"></i><span>68.8</span></p>
                          </div>
                          <div class="d-none d-md-block">
                            <p class="statistics-title">Total under penality</p>
                            <h3 class="rate-percentage">2</h3>
                            <p class="text-success d-flex"><i class="mdi mdi-menu-down"></i><span>+0.8%</span></p>
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
                                      <tr v-for="(driver,index) in drivers" :key=driver.index>
                                        <td>
                                          <div class="form-check form-check-flat mt-0">
                                            <label class="form-check-label">
                                            <input type="checkbox" class="form-check-input" aria-checked="false"><i class="input-helper"></i></label>
                                          </div>
                                        </td>
                                        <td>
                                          <div> 
                                              <b-button v-b-modal="modalId(index)" variant="outline-primary">
                                                
                                                   <h6>{{ driver.name }}</h6>
                                                   <p>{{ driver.licence }}</p>
                                               
                                              </b-button>
                                               <!-- Modal -->
                                              <b-modal :id="'modal' + index">
                                                  
                                                      Hello From My Modal!
                                                  
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
                                      <!-- <tr>
                                        <td>
                                          <div class="form-check form-check-flat mt-0">
                                            <label class="form-check-label">
                                            <input type="checkbox" class="form-check-input" aria-checked="false"><i class="input-helper"></i></label>
                                          </div>
                                        </td>
                                        <td>
                                          <div class="d-flex">
                                            <img src="images/faces/face4.jpg" alt="">
                                             <a href="/">
                                            <div>
                                              <h6>Matthew Bailey</h6>
                                              <p>bf5d</p>
                                            </div>
                                             </a>
                                          </div>
                                        </td>
                                        <td>
                                          <h6>Dz</h6>
                                          <p>8 am</p>
                                        </td>
                                        <td>
                                          <h6>Adama</h6> 
                                        </td>
                                        <td><div class="badge badge-opacity-danger">On the move</div></td>
                                      </tr> -->
                                      <!-- <tr>
                                        <td>
                                          <div class="form-check form-check-flat mt-0">
                                            <label class="form-check-label">
                                            <input type="checkbox" class="form-check-input" aria-checked="false"><i class="input-helper"></i></label>
                                          </div>
                                        </td>
                                        <td>
                                          <div class="d-flex">
                                            <img src="images/faces/face5.jpg" alt="">
                                             <a href="/">
                                            <div>
                                              <h6>Katherine Butler</h6>
                                              <p>codAm</p>
                                            </div>
                                             </a>
                                          </div>
                                        </td>
                                        <td>
                                          <h6>Dz</h6>
                                          <p>8:30 am</p>
                                        </td>
                                        <td>
                                            <h6>Adama</h6> 
                                        </td>
                                        <td><div class="badge badge-opacity-success">Completed</div></td>
                                      </tr> -->
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
                                          <img class="img-sm rounded-10" src="images/faces/face1.jpg" alt="profile">
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
                                          <img class="img-sm rounded-10" src="images/faces/face2.jpg" alt="profile">
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
                                          <img class="img-sm rounded-10" src="images/faces/face3.jpg" alt="profile">
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
                                          <img class="img-sm rounded-10" src="images/faces/face4.jpg" alt="profile">
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
                                          <img class="img-sm rounded-10" src="images/faces/face5.jpg" alt="profile">
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
                        <!-- <div class="row flex-grow">
                          <div class="col-12 grid-margin stretch-card">
                            <div class="card card-rounded">
                              <div class="card-body">
                                <div class="row">
                                  <div class="col-lg-12">
                                    <div class="d-flex justify-content-between align-items-center mb-3">
                                      <div>
                                        <h4 class="card-title card-title-dash">Leave Report</h4>
                                      </div>
                                      <div>
                                        <div class="dropdown">
                                          <button class="btn btn-secondary dropdown-toggle toggle-dark btn-lg mb-0 me-0" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Month Wise </button>
                                          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton3">
                                            <h6 class="dropdown-header">week Wise</h6>
                                            <a class="dropdown-item" href="#">Year Wise</a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="mt-3">
                                      <canvas id="leaveReport"></canvas>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> -->
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
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      drivers:[
        {
          name: 'Brandon Washington',
          licence: 'abet23',
          starting: 'Addis A',
          destination: 'Debere Z',
          time: 2,
          status: 'on the move'
        },
        {
          name: 'Chala',
          licence: 'chal43',
          starting: 'Adama',
          destination: 'Debere Z',
          time: 2,
          status: 'on the move'
        },
        {
          name: 'Feyesa',
          licence: 'feya23',
          starting: 'Addis A',
          destination: 'Mekele',
          time: 2,
          status: 'complited'
        }, {
          name: 'Feyesa',
          licence: 'feya23',
          starting: 'Addis A',
          destination: 'Mekele',
          time: 2,
          status: 'complited'
        },
      ]
    }
  },
  methods: {
    modalId(i) {
      return 'modal' + i;
    }
  },
}
</script>



 <style scoped >
@import "../assets/styles/style.css";/*# sourceMappingURL=../maps/vertical-layout-light/style.css.map */
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
 
