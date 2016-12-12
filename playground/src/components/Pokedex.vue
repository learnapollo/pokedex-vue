<template>
  <div class="pokedex">
    <template v-if="loading > 0">
      Loading
    </template>
    <template v-else>
      <div>
        Hey {{ Trainer.name }}, you have {{ Trainer.ownedPokemons.length }} pokemons in your pokedex
      </div>
      <ul>
        <li v-for="pokemon in pokemons" :key="pokemon.id">
          {{ pokemon.name }}
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
import gql from 'graphql-tag';

// GraphQL query
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

// Component def
export default {
  // Local state
  data: () => ({
    Trainer: { ownedPokemons: [] },
    loading: 0,
  }),
  // Apollo GraphQL
  apollo: {
    Trainer: {
      query: TrainerQuery,
      variables: {
        name: '__NAME__',
      },
      loadingKey: 'loading',
    },
  },
  // Computed properties
  computed: {
    pokemons() {
      return this.Trainer.ownedPokemons.reverse()
    }
  },
};
</script>
