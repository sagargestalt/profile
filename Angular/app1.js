'use strict';

/**
 * @ngdoc overview
 * @name docubasic3App
 * @description
 * # docubasic3App
 *
 * Main module of the application.
 */
angular
  .module('material', [
    'ngMessages','ngResource','ui.bootstrap','angular-ladda','socialLogin','base64','angularSpinner'

  ]).
   config(function(socialProvider){

      socialProvider.setLinkedInKey('86apemkrm9tjqk');
      socialProvider.setGoogleKey('248318198762-cpk6balnql83162035458uk1hjkgi420.apps.googleusercontent.com');
    });
