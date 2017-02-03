import Vue from 'vue';
import Router from 'vue-router';
import PokemonList from '../components/pokemon-list.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: PokemonList,
      name: 'pokemon-list'
    }
  ]
});
