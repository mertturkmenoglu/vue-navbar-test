<template>
  <nav class="navbar navbar-expand-lg navbar-light custom-navbar">
    <router-link class="navbar-brand" to="/">
      <img
        src="../assets/icon_white.svg"
        width="30"
        height="30"
        class="d-inline-block align-bottom"
        alt="Logo"
      />
      <span class="ml-3 text-white">Vevericka</span>
    </router-link>

    <div class="navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item mr-2">
          <div class="nav-link">
            <router-link class="fas fa-search text-white" to="/search">
            </router-link>
          </div>
        </li>
        <li class="nav-item mr-2">
          <div class="nav-link">
            <router-link class="fas fa-envelope text-white" to="/messages">
            </router-link>
          </div>
        </li>
        <li class="nav-item mr-2">
          <div class="nav-link">
            <router-link class="fas fa-bell text-white" to="/notifications">
            </router-link>
          </div>
        </li>
        <li class="nav-item mr-2">
          <div class="nav-link">
            <router-link class="fas fa-user-friends text-white" to="/friends">
            </router-link>
          </div>
        </li>
        <li class="nav-item mr-2">
          <div class="nav-link">
            <router-link class="fas fa-user-circle text-white" to="/profile">
            </router-link>
          </div>
        </li>
        <li class="nav-item mr-2">
          <div class="nav-link">
            <router-link class="fas fa-align-justify text-white" to="/options">
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.custom-navbar {
  background-color: #dd2c00;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2), 0 0 20px 0 rgba(0, 0, 0, 0.19);
}
</style>