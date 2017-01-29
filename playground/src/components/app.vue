<template>
  <div id="app" class="w-100 bg-light-gray min-vh-100">
    <router-view></router-view>
  </div>
</template>

<style>
html,
body {
  font-family: 'Open Sans', sans-serif;
  padding: 0px;
  margin: 0px;
  background: #eee;
}

a,
button {
  cursor: pointer;
  text-decoration: none;
}
a:hover,
button:hover {
  opacity: 0.8;
}
</style>
