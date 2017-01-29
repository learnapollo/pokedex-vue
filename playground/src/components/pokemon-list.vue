<template>
  <div>
    <template v-if="loading > 0">
      Loading
    </template>
    <template v-else>
      <div>
        Hey {{ Trainer.name }}, you have {{ Trainer.ownedPokemons.length }} pokemons in your pokedex
      </div>
      <ul>
        <li v-for="pokemon in pokemons" :key="pokemon.id">
          <pokemon-list-item :pokemon="pokemon"></pokemon-list-item>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
import gql from 'graphql-tag';
import PokemonListItem from './pokemon-list-item.vue';

const TrainerQuery = gql`
  query TrainerQuery($name: String!) {
    Trainer(name: $name) {
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
    Trainer: { ownedPokemons: [] },
    loading: 0,
  }),
  apollo: {
    Trainer: {
      query: TrainerQuery,
      variables: {
        name: 'Kristijan Sedlak',
      },
      loadingKey: 'loading',
    },
  },
  computed: {
    pokemons() {
      return this.Trainer.ownedPokemons
    }
  },
};
</script>
