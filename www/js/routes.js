angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tHELEGENDOFZELDA', {
    url: '/page1',
    templateUrl: 'templates/tHELEGENDOFZELDA.html',
    controller: 'tHELEGENDOFZELDACtrl'
  })

  .state('tipsTrick', {
    url: '/page2',
    templateUrl: 'templates/tipsTrick.html',
    controller: 'tipsTrickCtrl'
  })

  .state('breathOfTheWild', {
    url: '/page3',
    templateUrl: 'templates/breathOfTheWild.html',
    controller: 'breathOfTheWildCtrl'
  })

  .state('contactUs', {
    url: '/page4',
    templateUrl: 'templates/contactUs.html',
    controller: 'contactUsCtrl'
  })

  .state('page5', {
    url: '/page5',
    templateUrl: 'templates/page5.html',
    controller: 'page5Ctrl'
  })

$urlRouterProvider.otherwise('/page5')


});