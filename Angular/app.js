'use strict';
angular.module('material', ['ngAnimate', 'ngMessages', 'ngResource', 'ui.bootstrap', 'angular-ladda', 'socialLogin', 'base64', 'angularSpinner', 'ngFileUpload', 'ngImgCrop', 'summernote', 'ngTagsInput', 'bootstrapLightbox', 'ngSanitize', 'LocalStorageModule', 'angular-button-spinner', 'hm.readmore','uiCropper']).config(function(socialProvider) {
    socialProvider.setLinkedInKey('86apemkrm9tjqk');
    socialProvider.setGoogleKey('248318198762-cpk6balnql83162035458uk1hjkgi420.apps.googleusercontent.com');
}).config(function(LightboxProvider) {
    LightboxProvider.templateUrl = 'NewDesignSrc/demo3-lightbox-modal.html';
    LightboxProvider.calculateModalDimensions = function(dimensions) {
        var width = dimensions.windowWidth;
        var height = dimensions.windowHeight;
        return {
            'width': width,
            'height': height
        };
    };
    LightboxProvider.getImageCaption = function(image) {
        return image.CAPTION;
    };
    LightboxProvider.getImagelike = function(image) {
        return image.TOTAL_LIKES;
    };
}).config(['localStorageServiceProvider', function(localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('ls');
}]);