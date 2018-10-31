import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Contact from '@/components/Contact';
import AddMovie from '@/components/AddMovie';
import Movies from '@/components/Movies';
import Movie from '@/components/Movie';
import Err404 from '@/components/Err404';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/movies/add',
      name: 'AddMovie',
      component: AddMovie
    },
    {
      path: '/movies/:slug',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/movies',
      name: 'Movies',
      component: Movies
    },
    {
      path: '*',
      name: 'Err404',
      component: Err404
    }
    
  ]
});