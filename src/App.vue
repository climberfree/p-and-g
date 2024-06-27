<template>
  <div id="app">
    <LoginButton v-if="!user" />
    <LogoutButton v-if="user" />
    <div v-if="user">
      <p>Welcome, {{ user.displayName }}</p>
    </div>
  </div>
</template>

<script>
import { auth } from './firebase';  // Import auth from firebase.js
import LoginButton from './components/LoginButton.vue';
import LogoutButton from './components/LogoutButton.vue';

export default {
  components: {
    LoginButton,
    LogoutButton
  },
  data() {
    return {
      user: null
    }
  },
  created() {
    auth.onAuthStateChanged((user) => {
      this.user = user;
    });
  }
}
</script>

<!--<style>-->
<!--#app {-->
<!--  font-family: Avenir, Helvetica, Arial, sans-serif;-->
<!--  -webkit-font-smoothing: antialiased;-->
<!--  -moz-osx-font-smoothing: grayscale;-->
<!--  text-align: center;-->
<!--  color: #2c3e50;-->
<!--  margin-top: 60px;-->
<!--}-->
<!--</style>-->
