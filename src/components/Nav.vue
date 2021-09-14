<template>
  <div class="navbar-collapse container d-flex justify-content-around shadow rounded" id="navbar" >
    <ul class="">
            <li class="nav-item active float-left">
                <a href="" target="_blank" rel="noopener" active> <router-link  to="/"><h6>Home</h6></router-link> </a>
            </li>
            <li class="nav-item active">
                <a href="" target="_blank" rel="noopener"> <router-link to="/register"><h6>Register</h6></router-link> </a>
            </li>
           <li class="nav-item active ">
               <a href="" target="_blank" rel="noopener">    <router-link to="/user"><h6>User</h6></router-link></a>
           </li>
            <li class="nav-item active ">
               <a href="" target="_blank" rel="noopener">    <router-link to="/about"><h6>About</h6></router-link></a>
           </li>
     <li>
       <div class="input-group" id="search" >
         <div class="form-outline">
          <input type="search" id="form1" class="form-control" />
         </div>
         <button type="button" class="btn btn-primary"> search
        </button>
       </div>
   </li>
    </ul>
  </div>  
</template>
<script>
export default {
  name: 'navigation'
  
}
</script>
<style scoped>
#search{
    margin-left: 80%;
}


h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 15px;
}
a {
  color: white;
  text-decoration: none;
}
a:hover {
  color: red;
}

a:active {
  background-color: yellow;
  color: blueviolet;
}
#search{
}
#navbar{
  background-color: rgb(30, 55, 63);
  padding: 1%;
}

  .router-link-active,
   .router-link-exact-active {
   background-color: indianred;
   cursor: pointer;
 }
</style>

