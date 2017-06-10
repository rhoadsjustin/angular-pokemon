angular
  .module('pokemonApp')
  .controller('PokemonIndexController', PokemonIndexController);

  PokemonIndexController.$inject = ['$http'];

  function PokemonIndexController ($http) {
    var vm = this;
    vm.newPokemon = {};
    vm.newPokemon = {
      name: 'Viva Hate',
      artistName: 'Morrissey'
    };

    $http({
      method: 'GET',
      url: '/api/pokemon'
    }).then(function successCallback(response) {
      vm.pokemon = response.data;
    }, function errorCallback(response) {
      console.log('There was an error getting the data', response);
    });

    vm.createPokemon = function () {
      $http({
        method: 'POST',
        url: '/api/pokemon',
        data: vm.newPokemon,
      }).then(function successCallback(response) {
        vm.pokemon.push(response.data);
      }, function errorCallback(response) {
        console.log('There was an error posting the data', response);
      });
    }

    vm.editPokemon = function (Pokemon) {
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

    vm.deletePokemon = function (pokemon) {
      $http({
        method: 'DELETE',
        url: '/api/pokemon/'+ pokemon._id
      }).then(function successCallback(json) {
        var index = vm.pokemon.indexOf(pokemon);
        vm.pokemon.splice(index,1)
      }, function errorCallback(response) {
        console.log('There was an error deleting the data', response);
      });
    }

  }
