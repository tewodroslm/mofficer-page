<template>
  <div id="app"> 
    <!-- <Home msg="Welcome to Your Vue.js App"/> -->
     <nav class="navbar mt-1 shadow bg-lightblue rounded justify-content-between flex-nowrap flex-row fixed-top" style="background-color:lightblue;">
      <div class="container">
        <a class="navbar-brand float-left" href="/" target="_blank">
          MtMs.io
        </a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="btn" to="/user"  v-show="!this.$store.state.isAuthenticated">Sign in</router-link>
          </li>
          <li class="nav-item">
            <router-link class="btn" to="/"  v-show="this.$store.state.isAuthenticated">Sign out</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="App">
      <div class="vertical-center">
        <div class="inner-block">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Home from './components/mofficer/Home.vue'

export default {
  name: 'App',
  components: {
    // Home
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
