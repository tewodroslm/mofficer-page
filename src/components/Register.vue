<template>
<div id="register" class="shadow rounded">
<form action="">

<ul class="p-3 float-right">
    <li>
        <div class="form-check shadow-sm">
             <input class="form-check-input" type="radio" name="role" id="flexRadioDefault1" checked>
             <label class="form-check-label" for="flexRadioDefault1">
                  <h6>Traffic Police</h6>
             </label>
        </div>
    </li>
    <li>
        <div class="form-check  shadow-sm ">
              <input class="form-check-input" type="radio" name="role" id="flexRadioDefault2" >
             <label class="form-check-label" for="flexRadioDefault2">
                  <h6>Menehariya Officer</h6>
             </label>
        </div>
    </li>
</ul>

<div id="user_info">

    <div class="form-group ">
     <label class="float-start labels pb-1"><h6>First Name</h6></label>
     <input type="text" class="form-control  rounded" placeholder="first Name"/>
    </div>
    <div class="form-group  labels">
        <label class="float-start pb-1 pt-1" ><h6>Last Name</h6></label>
        <input type="text" class="form-control  rounded" placeholder="last name"> 
    </div>
    <div class="form-group  labels">
        <label class="float-start pb-1 pt-1" ><h6>User Name</h6></label>
        <input type="text" class="form-control  rounded" placeholder="user name"> 
    </div>
    <div class="form-group  labels">
        <label class="float-start pb-1 pt-1" ><h6>Email</h6></label>
        <input type="email" class="form-control  rounded" placeholder="email"> 
    </div>
    <div class="form-group  labels">
        <label class="float-start pb-1 pt-1" ><h6>Password</h6></label>
        <input type="password" class="form-control  rounded" placeholder="password"> 
    </div>
     <div class="form-group  labels">
        <label class="float-start pb-1 pt-1" ><h6>Phone</h6></label>
        <input type="tel" class="form-control  rounded" placeholder="phone number "> 
    </div>
    <ul class="pt-1 float-right">
    <li>
        <div class="form-check shadow-sm">
             <input class="form-check-input" type="radio" name="gender" id="flexRadioDefault3" checked>
             <label class="form-check-label" for="flexRadioDefault3">
                  <h6>Male</h6>
             </label>
        </div>
    </li>
    <li>
        <div class="form-check  shadow-sm ">
              <input class="form-check-input" type="radio" name="gender" id="flexRadioDefault4" >
             <label class="form-check-label" for="flexRadioDefault4">
                   <h6>Female</h6>
             </label>
        </div>
    </li>
</ul>
    <div class="form-group  labels">
        <label class="float-start pb-1" ><h6>ID Number</h6></label>
        <input type="text" class="form-control  rounded" placeholder="ID"> 
    </div>

    <div class="form-group  labels">
        <label class="float-start pb-1 pt-1" ><h6>Work Place</h6></label>
        <input type="text" class="form-control  rounded" placeholder="Work Place"> 
    </div>
    <button class="btn btn-primary btn-block mt-2 btn-register"><h6>Register</h6></button>
</div>
</form>
</div>
</template>
<script>
export default{
    name: 'Register'
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