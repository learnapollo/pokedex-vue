<template>
  <div class="app">
    <pokedex></pokedex>
  </div>
</template>

<script>
import Pokedex from './components/Pokedex.vue';

export default {
  name: 'app',
  components: {
    Pokedex,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  font-size: 15px;
  line-height: 1.5;
  color: #333;
}

ul {
  padding-left: 20px;
}

ul li {
  list-style: none;
}

ul li span {
  color: #999;
  margin-right: 10px;
}

.app {
  text-align: center;
}

.app-logo {
  animation: App-logo-spin infinite 20s linear;
  height: 80px;
}

.app-header {
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
}

.app-intro {
  font-size: large;
}

@keyframes App-logo-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

</style>
