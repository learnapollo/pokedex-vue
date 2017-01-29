<template>
  <router-link class="root" v-bind:to="{ name: 'pokemon-edit', params: { pokemonId: pokemon.id }}">
    <img class="image" v-bind:src="pokemon.url" />
    <div class="label">{{pokemon.name}}</div>
  </router-link>
</template>

<script>
export default {
  props: ['pokemon']
}
</script>

<style scoped>
.root {
  display: inline-block;
  padding: 15px;
  margin: 10px;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, .2);
  background: #fff;
  vertical-align: top;
  box-sizing: border-box;
}
.image {
  width: 200px;
  height: 200px;
  display: block;
  box-sizing: border-box;
}
.label {
  margin-top: 10px;
  color: #777;
}
</style>
