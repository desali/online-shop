import angular from 'angular';
import Home from './home/home';
import Catalog from './catalog/catalog';
import Good from './good/good';

let componentModule = angular.module('app.components', [
  Home,
  Catalog,
  Good
])

.name;

export default componentModule;
