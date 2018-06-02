import angular from 'angular';
import uiRouter from 'angular-ui-router';
import goodComponent from './good.component';

let goodModule = angular.module('good', [
  uiRouter
])

.config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state("good", {
        url: "/good/:id",
        params: { id: '0' },
        views: {
          "app" : {
            component: "good"
          }
        }
      });
  })

.component('good', goodComponent)

.name;

export default goodModule;
