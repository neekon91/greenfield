angular.module('nList', ['nList.services','ui.router', 'nList.links', 'nList.profile'])

.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'components/home/home.html'

    })

    .state('links', {
      url:'/links',
      templateUrl: 'components/links/links.html',
      controller: 'linksCtrl',
      resolve: {
        linkPromise : ['links', function(links){
          return links.getAll();
        }]
      }
    })

    .state('profile', {
        url: '/profile',
        templateUrl: 'components/profile/profile.html',
        controller: 'ProfileController'
    })

});

