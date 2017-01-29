<template>
  <div class="root">
    <template v-if="loading > 0">
      Loading ...
    </template>
    <template v-else>
      <div class="title">
        Hey {{ trainer.name }}, you have {{ trainer.ownedPokemons.length }} pokemons in your pokedex
      </div>
      <div class="items">
        <pokemon-list-add></pokemon-list-add>
        <pokemon-list-item v-for="pokemon in pokemons" v-bind:key="pokemon.id" v-bind:pokemon="pokemon"></pokemon-list-item>
      </div>
    </template>
  </div>
</template>

<script>
import gql from 'graphql-tag';
import PokemonListAdd from './pokemon-list-add.vue';
import PokemonListItem from './pokemon-list-item.vue';
import {trainerName} from '../config';

const trainerQuery = gql`
  query trainerQuery($name: String!) {
    trainer: Trainer(name: $name) {
      id
      name
      ownedPokemons {
        id
        name
        url
      }
    }
  }
`;

export default {
  components: {
    'pokemon-list-add': PokemonListAdd,
    'pokemon-list-item': PokemonListItem
  },
  data: () => ({
    trainer: {
      name: '',
      ownedPokemons: []
    },
    loading: 0,
  }),
  apollo: {
    trainer: {
      query: trainerQuery,
      variables: {
        name: trainerName,
      },
      loadingKey: 'loading',
    },
  },
  computed: {
    pokemons() {
      return this.trainer.ownedPokemons
    }
  },
};
</script>

<style scoped>
.root {
  text-align: center;
  padding: 20px;
}
.title {
  padding: 40px;
  display: block;
  color: #7F7F7F;
  font-size: 32px;
  font-weight: 300;
}
</style>
