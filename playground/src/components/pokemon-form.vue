<template>
  <form novalidate @submit.prevent="submit">
    <template v-if="loading > 0">
      Loading ...
    </template>
    <template v-else>
      <input type="text" v-model="pokemon.name" placeholder="Name"/>
      <input type="text" v-model="pokemon.url" placeholder="Image Url"/>
      <img v-bind:src="pokemon.url" />
      <button v-if="!isNew" v-on:click.prevent="remove">Delete</button>
      <router-link v-bind:to="{ name: 'pokemon-list' }">Cancel</router-link>
      <button v-bind:disabled="!isValid">Save</button>
    </template>
  </form>
</template>

<script>
import gql from 'graphql-tag';
import {trainerId} from '../config';

const pokemonQuery = gql`
  query pokemonQuery($id: ID!) {
    pokemon: Pokemon(id: $id) {
      id
      name
      url
    }
  }
`;
const createPokemonMutation = gql`
  mutation createPokemon($name: String!, $url: String!, $trainerId: ID) {
    pokemon: createPokemon(name: $name, url: $url, trainerId: $trainerId) {
      id
    }
  }
`
const updatePokemonMutation = gql`
  mutation updatePokemon($id: ID!, $name: String!, $url: String!) {
    pokemon: updatePokemon(id: $id, name: $name, url: $url) {
      id
    }
  }
`;
const deletePokemonMutation = gql`
  mutation deletePokemon($id: ID!) {
    pokemon: deletePokemon(id: $id) {
      id
    }
  }
`;

export default {
  props: ['pokemonId'],
  data: () => ({
    pokemon: {
      name: '',
      url: '',
      trainerId
    },
    loading: 0
  }),
  apollo: {
    pokemon: {
      query: pokemonQuery,
      variables () {
        return { id: this.pokemonId };
      },
      skip () {
        return this.isNew;
      },
      loadingKey: 'loading'
    },
  },
  computed: {
    isNew () {
      return !this.pokemonId;
    },
    isValid () {
      return !!this.pokemon.name && !!this.pokemon.url;
    }
  },
  methods: {
    submit () {
      return this.$apollo.mutate({
        mutation: this.isNew ? createPokemonMutation : updatePokemonMutation,
        variables: this.pokemon
      })
      .then((data) => {
        this.$router.go(-1);
      })
      .catch((error) => {
        console.error(error);
      });
    },
    remove () {
      return this.$apollo.mutate({
        mutation: deletePokemonMutation,
        variables: this.pokemon
      })
      .then((data) => {
        this.$router.go(-1);
      })
      .catch((error) => {
        console.error(error);
      });
    }
  }
}
</script>
