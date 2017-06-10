angular
  .module('pokemonApp')
  .controller('PokemonShowController', PokemonShowController);

  PokemonShowController.$inject = ['$http', '$routeParams'];
  function PokemonShowController (  $http,   $routeParams  ) {
    var vm = this;
    console.log($routeParams);

    $http({
      method: 'GET',
      url: '/api/pokemon/'+ $routeParams.id  // how can we get the id? (hint: check console log from above)
    }).then(function successCallback(json) {
      vm.pokemon = json.data;
      console.log(vm.pokemon);
    }, function errorCallback(error) {
      console.log(error);
    });

    vm.editPokemon = function (pokemon) {
      $http({
        method: 'PUT',
        url: '/api/pokemon/'+pokemon._id,
        data: pokemon
      }).then(function successCallback(json) {
        // don't need to do anything!
      }, function errorCallback(response) {
        console.log('There was an error editing the data', response);
      });
    }
  }
