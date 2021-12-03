<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top custom-bg-dark">
      <router-link to="/" class="navbar-brand">
        <img style="max-height: 25px" src="../assets/logo.png" /> Task Manager
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link
              to="/"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
              class="nav-link"
              exact
            >
              Home
            </router-link>
          </li>
          <li v-if="$store.state.isLoggedIn" class="nav-item">
            <router-link
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
              to="/tasks"
              class="nav-link"
              exact
            >
              Tasks
            </router-link>
          </li>
          <li v-if="!$store.state.isLoggedIn" class="nav-item">
            <router-link
              to="/register"
              class="nav-link"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
              exact
            >
              Register
            </router-link>
          </li>
          <li v-if="!$store.state.isLoggedIn" class="nav-item">
            <router-link
              to="/login"
              class="nav-link"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
              exact
            >
              Login
            </router-link>
          </li>
          <li v-if="$store.state.isLoggedIn" class="nav-item">
            <a
              v-on:click.prevent="logout()"
              class="nav-link"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
              href="#"
              >Logout</a
            >
          </li>
          <li class="nav-item" v-if="this.$store.state.username">
            <!-- Display the current user's username in the navbar -->
            <a class="nav-link username" href="#">
              {{ this.$store.state.username }}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import * as auth from "../services/AuthService"

export default {
  name: "Navbar",
  methods: {
    logout: function () {
      auth.logout()
      this.$router.push({ name: "home" })
    },
  },
}
</script>

<style>
.username {
  pointer-events: none;
}
</style>