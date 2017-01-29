import Vue from 'vue';
import Router from 'vue-router';
import PokemonList from '../components/pokemon-list.vue';
import PokemonShow from '../components/pokemon-show.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    component: PokemonList,
    name: 'pokemon-list'
  },
  {
    path: '/:pokemonId',
    component: PokemonShow,
    name: 'pokemon-show'
  },
  {
    path: '*',
    redirect: '/'
  }
];

export default new Router({
  mode: 'history',
  routes
});
