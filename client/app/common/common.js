import angular from 'angular';
import Header from './header/header';
import Foot from './foot/foot';

let commonModule = angular.module('app.common', [
  Header,
  Foot
])
  
.name;

export default commonModule;
