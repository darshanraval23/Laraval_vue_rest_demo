<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand" href="/">Home</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="Employee" class="nav-link" aria-current="page">Employe salary</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Employee/add_salary" class="nav-link" >Add Employe salary</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Employee/edit_salary" class="nav-link" >Edit Employe salary</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/signin" class="nav-link" >Sign in</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/registration" class="nav-link" >Ragister</router-link>
        </li>
        <!-- <router-link class="router-link" :to="{ name: 'song', params: { id: item.id } }"  target="_blank" > 
{{ item.title }}<v-icon x-small class="mb-1 ml-1">$vuetify.icons.open-in-new</v-icon>
</router-link> -->
      </ul>
    </div>
  </div>
</nav>
</template>
<script>
export default {
  name: "Header_componets",
};
</script>
<style scoped>
 nav li:hover,
 nav li.router-link-active,
 nav li.router-link-exact-active {
   background-color: #eb83a6;
   color: aliceblue;
 }
</style>
