'use strict'

var app = angular.module('nList.links', []);

app.controller('linksCtrl',['$scope','links','checkUser', ($scope, links, checkUser) => {
  $scope.posts = links.links;

  $scope.addPost = () => {
    links.addOne({
      title: $scope.title,
      language: $scope.data.name,
      subTopic: $scope.data.topic,
      type: $scope.data.type,
      link: $scope.link,
      keywords: $scope.description,
      likes: $scope.posts.likes || 0,
      dislikes: $scope.posts.dislikes || 0,
      date_added: new Date().toISOString().slice(0, 19).replace('T', ' ') //Generates a current time stamp in MySql DATETIME database format
    });
    $scope.title='';
    $scope.description = '';
    $scope.link = '';
    $scope.data.topic = null;
    $scope.data.type = null;
    $scope.data.name = null;
  };

  $scope.setFilter = (type, value) => {
    $scope[type+'Filter'] = {};
    $scope[type+'Filter'][type] = value;
  };


//Selected options for type, language & topics
  $scope.data = {
    type: null,
    typeOptions: [
      {value: '1', label: 'Article'},
      {value: '2', label: 'Book'},
      {value: '3', label: 'Forum'},
      {value: '4', label: 'Video'}
    ],
    name: null,
    languageOptions: [
      {value: '1', label: 'C'},
      {value: '2', label: 'C++'},
      {value: '3', label: 'C#'},
      {value: '4', label: 'CSS'},
      {value: '5', label: 'Deployment'},
      {value: '6', label: '.Net'},
      {value: '7', label: 'Git'},
      {value: '8', label: 'Go'},
      {value: '9', label: 'Html'},
      {value: '10', label: 'Java'},
      {value: '11', label: 'Javascript'},
      {value: '12', label: 'Php'},
      {value: '13', label: 'Python'},
      {value: '14', label: 'Ruby'},
      {value: '15', label: 'Sql'}
    ],
    topic: null,
    topics: {
      '1':[{value: '34', label: 'none'}],
      '2':[{value: '34', label: 'none'}],
      '3':[{value: '34', label: 'none'}],
      '4':[
          {value: '34', label: 'none'},
          {value: '1', label:'Bootstrap'},
          {value: '2', label:'Jeet'},
          {value: '3', label:'Less'},
          {value: '4', label:'Sass'},
        ],

      '5':[
          {value: '34', label: 'none'},
          {value: '5', label:'Amazon Web Services'},
          {value: '6', label:'Apache'},
          {value: '7', label:'Bower'},
          {value: '8', label:'Docker'},
          {value: '9', label:'Grunt'},
          {value: '10', label:'Gulp'},
          {value: '11', label:'Heroku'},
        ],

      '6':[{value: '34', label: 'none'}],

      '7':[
          {value: '34', label: 'none'},
          {value: '12', label:'Bitbucket'},
          {value: '13', label:'Github'},
          {value: '14', label:'Gitlab'},
        ],

      '8':[{value: '34', label: 'none'}],

      '9':[{value: '34', label: 'none'}],

      '10':[{value: '34', label: 'none'}],

      '11':[
          {value: '34', label: 'none'},
          {value: '15', label:'Angular'},
          {value: '16', label:'Backbone'},
          {value: '17', label:'CoffeeScript'},
          {value: '18', label:'D3'},
          {value: '19', label:'Jquery'},
          {value: '20', label:'Kraken'},
          {value: '21', label:'Meteor'},
          {value: '22', label:'Mongo'},
          {value: '23', label:'Node'},
          {value: '24', label:'React'},
        ],

      '12':[
          {value: '34', label: 'none'},
          {value: '25', label:'CodeIgniter'},
          {value: '26', label:'Doctrine'},
          {value: '27', label:'Laravel'},
          {value: '28', label:'Symfony'},
          {value: '29', label:'Yii'},
        ],

      '13':[
          {value: '34', label: 'none'},
          {value: '30', label:'Django'},
        ],

      '14':[
          {value: '34', label: 'none'},
          {value: '31', label:'Rails'},
        ],

      '15':[
          {value: '34', label: 'none'},
          {value: '32', label:'MySql'},
          {value: '33', label:'PostgreSql'},
        ]
    }
   };
}]);
