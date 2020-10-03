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
        <li v-for="(link, idx) in navLinks" :key="idx" class="nav-item mr-2">
          <div class="nav-link">
            <router-link
              :class="['fas', link.logo, 'text-white']"
              :to="link.dest"
            >
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navLinks: [
        {
          logo: "fa-search",
          dest: "/search",
        },
        {
          logo: "fa-envelope",
          dest: "/messages",
        },
        {
          logo: "fa-bell",
          dest: "/notifications",
        },
        {
          logo: "fa-user-friends",
          dest: "/friends",
        },
        {
          logo: "fa-user-circle",
          dest: "/profile",
        },
        {
          logo: "fa-align-justify",
          dest: "/options",
        },
      ],
    };
  },
};
</script>

<style scoped>
.custom-navbar {
  background-color: #dd2c00;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2), 0 0 20px 0 rgba(0, 0, 0, 0.19);
}
</style>