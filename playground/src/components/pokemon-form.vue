<template>
  <div class="root">
    <div class="title" v-if="!isNew">{{pokemon.name}} owned by {{trainerName}}</div>
    <form class="form" novalidate @submit.prevent="submit">
      <template v-if="loading > 0">
        Loading ...
      </template>
      <template v-else>
        <input class="text-input" type="text" v-model="pokemon.name" placeholder="Name"/>
        <input class="text-input" type="text" v-model="pokemon.url" placeholder="Image Url"/>
        <img class="preview" v-bind:src="pokemon.url" />
        <div class="buttons">
          <button class="link remove" v-if="!isNew" v-on:click.prevent="remove">Delete</button>
          <router-link class="link cancel" v-bind:to="{ name: 'pokemon-list' }">Cancel</router-link>
          <button class="button submit" v-bind:disabled="!isValid">Save</button>
        </div>
      </template>
    </form>
  </div>
</template>

<script>
import gql from 'graphql-tag';
import {trainerId, trainerName} from '../config';

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
    trainerName,
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
    }
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

<style scoped>
.root {
  text-align: center;
  display: block;
  padding: 20px;

}
.title {
  text-align: center;
  padding: 40px;
  display: block;
  color: #7F7F7F;
  font-size: 32px;
  font-weight: 300;
}
.form {
  display: inline-block;
  width: 100%;
  max-width: 450px;
  padding: 30px;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, .2);
  background: #fff;
  vertical-align: top;
  box-sizing: border-box;
}
.text-input {
  display: block;
  box-sizing: border-box;
  width: 100%;
  margin: 0px 0px 15px 0px;
  padding: 15px;
  font: inherit;
}
.preview {
  width: 100%;
  max-height: 400px;
  min-height: 250px;
  background: #F7F7F7;
  display: inline-block;
  box-sizing: border-box;
  margin-bottom: 30px;
  padding: 30px;
}
.link,
.button {
  color: #777;
  display: inline-block;
  padding: 15px 35px;
  background: transparent;
  border: 0px;
  border-radius: 3px;
  font: inherit;
  font-size: 19px;
}
.button {
  background: #2BC3A1;
  color: #fff;
}
.remove {
  color: #ba2626;
}
</style>
