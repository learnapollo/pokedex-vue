import Vue from 'vue';
import Router from 'vue-router';
import PokemonList from '../components/pokemon-list.vue';
import PokemonForm from '../components/pokemon-form.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    component: PokemonList,
    name: 'pokemon-list'
  },
  {
    path: '/new',
    component: PokemonForm,
    name: 'pokemon-new'
  },
  {
    path: '/:pokemonId',
    component: PokemonForm,
    name: 'pokemon-edit',
    props: true
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
