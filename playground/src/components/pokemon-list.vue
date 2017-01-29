<template>
  <div>
    <template v-if="loading > 0">
      Loading ...
    </template>
    <template v-else>
      <div>
        Hey {{ trainer.name }}, you have {{ trainer.ownedPokemons.length }} pokemons in your pokedex
      </div>
      <ul>
        <router-link v-bind:to="{ name: 'pokemon-new' }">New</router-link>
        <li v-for="pokemon in pokemons" v-bind:key="pokemon.id">
          <pokemon-list-item v-bind:pokemon="pokemon"></pokemon-list-item>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
import gql from 'graphql-tag';
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
