<template>
  <div>
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
  transition: ease-out 0.3s;
}
a:hover,
button:hover {
  opacity: 0.7;
}
a:disabled,
button:disabled {
  opacity: 0.3;
}
</style>
