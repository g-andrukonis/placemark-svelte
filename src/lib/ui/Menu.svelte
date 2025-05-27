<script lang="ts">
  import { loggedInUser } from "$lib/runes.svelte";
</script>

<nav class="navbar is-full-width">
  <div class="container">
    <div class="navbar-brand">
      <a class="navbar-item" href="/dashboard">
        <span class="icon mr-5"><i style="font-size: 32px; color: darkorange;" class="fas fa-guitar"></i></span>
        <span><strong>PlaceMark</strong> </span>
      </a>
    </div>
    <div id="navbarMenu" class="navbar-menu">
      <div class="navbar-end">
        <a class="navbar-item" href="/addEvent"> Dashboard </a>
        <a class="navbar-item" href="/report"> Reports </a>
        <a class="navbar-item" href="/charts"> Charts </a>
        <a class="navbar-item" href="/maps"> Maps </a>
        <a class="navbar-item" href="/maps"> Gallery </a>
        <a data-sveltekit-preload-data="tap" class="navbar-item" href="/logout"> Logout [{loggedInUser.name}]</a>
      </div>
      <div></div>
    </div>
  </div>
</nav>
