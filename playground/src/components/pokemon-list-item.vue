<template>
  <div>
    <router-link :to="{ name: 'pokemon-show', params: { pokemonId: this.pokemon.id }}">
      <h3>{{this.pokemon.name}}</h3>
      <img :src="this.pokemon.url" />
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['pokemon']
}
</script>
