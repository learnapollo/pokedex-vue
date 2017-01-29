<template>
  <div>
    <router-link v-bind:to="{ name: 'pokemon-edit', params: { pokemonId: pokemon.id }}">
      <h3>{{pokemon.name}}</h3>
      <img v-bind:src="pokemon.url" />
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['pokemon']
}
</script>
