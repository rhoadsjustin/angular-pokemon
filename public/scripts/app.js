angular
  .module('pokemonApp', ['ngRoute'])
  .config(config);

  config.$inject = ['$routeProvider', '$locationProvider'];
  function config(   $routeProvider,  $locationProvider   ) {
    $routeProvider
      .when('/', {
        templateUrl: '/templates/pokemons',
        controller: 'PokemonIndexController',
        controllerAs: 'pokeIndexCtrl'
      })
      .when('/albums/:id', {
        templateUrl: '/templates/pokemons',
        controller: 'PokemonShowController',
        controllerAs: 'pokeShowCtrl'
      });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }
